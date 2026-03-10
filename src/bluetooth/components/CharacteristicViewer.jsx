import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shortenUuid, getDescriptorName, parseValue } from '../gattUuids';

export default function CharacteristicViewer({
  characteristic,
  charName,
  properties,
  descriptors,
  readCharacteristic,
  writeCharacteristic,
  startNotifications,
  stopNotifications,
  addLog,
}) {
  const [expanded, setExpanded] = useState(false);
  const [readValue, setReadValue] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);
  const [notifyValues, setNotifyValues] = useState([]);
  const [writeInput, setWriteInput] = useState('');
  const [writeFormat, setWriteFormat] = useState('hex');
  const [notifyCleanup, setNotifyCleanup] = useState(null);

  const shortUuid = shortenUuid(characteristic.uuid);
  const canRead = properties.includes('Read');
  const canWrite = properties.includes('Write') || properties.includes('Write Without Response');
  const canNotify = properties.includes('Notify') || properties.includes('Indicate');
  const writeWithResponse = properties.includes('Write');

  const handleRead = useCallback(async () => {
    setIsReading(true);
    try {
      const value = await readCharacteristic(characteristic);
      setReadValue(parseValue(value));
    } catch {
      // Error already logged in hook
    }
    setIsReading(false);
  }, [characteristic, readCharacteristic]);

  const handleWrite = useCallback(async () => {
    if (!writeInput.trim()) return;
    setIsWriting(true);
    try {
      let data;
      if (writeFormat === 'hex') {
        const hexStr = writeInput.replace(/\s+/g, '').replace(/0x/gi, '');
        const bytes = hexStr.match(/.{1,2}/g)?.map(b => parseInt(b, 16)) || [];
        data = new Uint8Array(bytes);
      } else if (writeFormat === 'ascii') {
        const encoder = new TextEncoder();
        data = encoder.encode(writeInput);
      } else {
        const nums = writeInput.split(/[\s,]+/).map(Number);
        data = new Uint8Array(nums);
      }
      await writeCharacteristic(characteristic, data, writeWithResponse);
      setWriteInput('');
    } catch {
      // Error already logged
    }
    setIsWriting(false);
  }, [characteristic, writeInput, writeFormat, writeCharacteristic, writeWithResponse]);

  const handleToggleNotify = useCallback(async () => {
    if (isNotifying) {
      notifyCleanup?.();
      setIsNotifying(false);
      setNotifyCleanup(null);
      await stopNotifications(characteristic);
    } else {
      try {
        const cleanup = await startNotifications(characteristic, (value) => {
          setNotifyValues(prev => [parseValue(value), ...prev].slice(0, 50));
        });
        setNotifyCleanup(() => cleanup);
        setIsNotifying(true);
      } catch {
        // Error already logged
      }
    }
  }, [characteristic, isNotifying, notifyCleanup, startNotifications, stopNotifications]);

  return (
    <div className="bt-char-card">
      <div
        className={`bt-char-header ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="bt-char-title">
          <span className="bt-char-expand">{expanded ? '\u25BC' : '\u25B6'}</span>
          <div>
            <span className="bt-char-name">{charName || 'Unknown Characteristic'}</span>
            <span className="bt-char-uuid">{shortUuid}</span>
          </div>
        </div>
        <div className="bt-property-tags">
          {properties.map(prop => (
            <span key={prop} className={`bt-prop-tag bt-prop-${prop.toLowerCase().replace(/\s+/g, '-')}`}>
              {prop}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="bt-char-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {!charName && (
              <div className="bt-uuid-full">
                <span className="bt-info-label">Full UUID</span>
                <code>{characteristic.uuid}</code>
              </div>
            )}

            {/* Descriptors */}
            {descriptors.length > 0 && (
              <div className="bt-descriptors">
                <span className="bt-info-label">Descriptors</span>
                {descriptors.map((d, i) => (
                  <div key={i} className="bt-descriptor-item">
                    <span>{getDescriptorName(d.uuid) || 'Unknown'}</span>
                    <code>{shortenUuid(d.uuid)}</code>
                  </div>
                ))}
              </div>
            )}

            {/* Read */}
            {canRead && (
              <div className="bt-action-section">
                <button
                  className="bt-btn bt-btn-sm bt-btn-read"
                  onClick={handleRead}
                  disabled={isReading}
                >
                  {isReading ? 'Reading...' : 'Read Value'}
                </button>
                {readValue && (
                  <div className="bt-value-display">
                    <div className="bt-value-row">
                      <span className="bt-value-label">HEX</span>
                      <code className="bt-value-hex">{readValue.hex}</code>
                    </div>
                    <div className="bt-value-row">
                      <span className="bt-value-label">ASCII</span>
                      <code className="bt-value-ascii">{readValue.ascii}</code>
                    </div>
                    <div className="bt-value-row">
                      <span className="bt-value-label">DEC</span>
                      <code className="bt-value-dec">{readValue.decimal.join(', ')}</code>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Write */}
            {canWrite && (
              <div className="bt-action-section">
                <div className="bt-write-controls">
                  <select
                    className="bt-select"
                    value={writeFormat}
                    onChange={(e) => setWriteFormat(e.target.value)}
                  >
                    <option value="hex">Hex</option>
                    <option value="ascii">ASCII</option>
                    <option value="decimal">Decimal</option>
                  </select>
                  <input
                    type="text"
                    className="bt-input"
                    value={writeInput}
                    onChange={(e) => setWriteInput(e.target.value)}
                    placeholder={
                      writeFormat === 'hex' ? 'FF 01 02' :
                      writeFormat === 'ascii' ? 'Hello' :
                      '255, 1, 2'
                    }
                    onKeyDown={(e) => e.key === 'Enter' && handleWrite()}
                  />
                  <button
                    className="bt-btn bt-btn-sm bt-btn-write"
                    onClick={handleWrite}
                    disabled={isWriting || !writeInput.trim()}
                  >
                    {isWriting ? 'Writing...' : 'Write'}
                  </button>
                </div>
              </div>
            )}

            {/* Notify */}
            {canNotify && (
              <div className="bt-action-section">
                <button
                  className={`bt-btn bt-btn-sm ${isNotifying ? 'bt-btn-danger' : 'bt-btn-notify'}`}
                  onClick={handleToggleNotify}
                >
                  {isNotifying ? 'Stop Notifications' : 'Start Notifications'}
                </button>
                {isNotifying && (
                  <div className="bt-notify-indicator">
                    <span className="bt-pulse" /> Listening...
                  </div>
                )}
                {notifyValues.length > 0 && (
                  <div className="bt-notify-log">
                    {notifyValues.map((val, i) => (
                      <div key={i} className="bt-notify-entry">
                        <code className="bt-value-hex">{val.hex}</code>
                        <span className="bt-value-ascii">{val.ascii}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
