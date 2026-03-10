import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TYPE_ICONS = {
  info: '\u2139\uFE0F',
  success: '\u2705',
  warning: '\u26A0\uFE0F',
  error: '\u274C',
  notification: '\uD83D\uDD14',
};

const TYPE_CLASSES = {
  info: 'bt-log-info',
  success: 'bt-log-success',
  warning: 'bt-log-warning',
  error: 'bt-log-error',
  notification: 'bt-log-notification',
};

function LogEntry({ entry }) {
  const [showData, setShowData] = useState(false);
  const time = entry.timestamp.toLocaleTimeString('en-US', { hour12: false, fractionalSecondDigits: 3 });

  return (
    <div className={`bt-log-entry ${TYPE_CLASSES[entry.type] || ''}`}>
      <span className="bt-log-time">{time}</span>
      <span className="bt-log-icon">{TYPE_ICONS[entry.type] || ''}</span>
      <span className="bt-log-message">{entry.message}</span>
      {entry.data && (
        <button
          className="bt-log-data-toggle"
          onClick={() => setShowData(!showData)}
        >
          {showData ? 'hide' : 'data'}
        </button>
      )}
      {showData && entry.data && (
        <pre className="bt-log-data">
          {JSON.stringify(entry.data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default function LogPanel({ logs, onClear }) {
  const [filter, setFilter] = useState('all');
  const [autoScroll, setAutoScroll] = useState(true);
  const logRef = useRef(null);

  const filtered = filter === 'all' ? logs : logs.filter(l => l.type === filter);

  useEffect(() => {
    if (autoScroll && logRef.current) {
      logRef.current.scrollTop = 0;
    }
  }, [logs, autoScroll]);

  return (
    <motion.div
      className="bt-panel bt-log-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="bt-panel-header">
        <h3>Debug Log</h3>
        <div className="bt-log-controls">
          <select
            className="bt-select bt-select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
            <option value="notification">Notifications</option>
          </select>
          <label className="bt-checkbox-label">
            <input
              type="checkbox"
              checked={autoScroll}
              onChange={(e) => setAutoScroll(e.target.checked)}
            />
            Auto-scroll
          </label>
          <button className="bt-btn bt-btn-sm bt-btn-ghost" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="bt-log-container" ref={logRef}>
        {filtered.length === 0 ? (
          <div className="bt-log-empty">
            No log entries yet. Connect to a device to get started.
          </div>
        ) : (
          filtered.map(entry => (
            <LogEntry key={entry.id} entry={entry} />
          ))
        )}
      </div>
    </motion.div>
  );
}
