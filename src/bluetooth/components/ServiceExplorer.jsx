import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getServiceName, getCharacteristicName, shortenUuid, getCharacteristicProperties } from '../gattUuids';
import CharacteristicViewer from './CharacteristicViewer';

function ServiceCard({ serviceData, readCharacteristic, writeCharacteristic, startNotifications, stopNotifications, addLog }) {
  const [expanded, setExpanded] = useState(false);
  const { service, characteristics, error } = serviceData;
  const serviceName = getServiceName(service.uuid);
  const shortUuid = shortenUuid(service.uuid);

  return (
    <motion.div
      className="bt-service-card"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`bt-service-header ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="bt-service-title">
          <span className="bt-service-icon">{expanded ? '\u25BC' : '\u25B6'}</span>
          <div>
            <span className="bt-service-name">
              {serviceName || 'Unknown Service'}
            </span>
            <span className="bt-service-uuid">{shortUuid}</span>
          </div>
        </div>
        <span className="bt-char-count">
          {characteristics.length} char{characteristics.length !== 1 ? 's' : ''}
        </span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="bt-service-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error && (
              <div className="bt-error-inline">Cannot read: {error}</div>
            )}
            {!serviceName && (
              <div className="bt-uuid-full">
                <span className="bt-info-label">Full UUID</span>
                <code>{service.uuid}</code>
              </div>
            )}
            {characteristics.map(({ characteristic, descriptors }, idx) => {
              const charName = getCharacteristicName(characteristic.uuid);
              const props = getCharacteristicProperties(characteristic);

              return (
                <CharacteristicViewer
                  key={characteristic.uuid + idx}
                  characteristic={characteristic}
                  charName={charName}
                  properties={props}
                  descriptors={descriptors}
                  readCharacteristic={readCharacteristic}
                  writeCharacteristic={writeCharacteristic}
                  startNotifications={startNotifications}
                  stopNotifications={stopNotifications}
                  addLog={addLog}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServiceExplorer({ services, readCharacteristic, writeCharacteristic, startNotifications, stopNotifications, addLog }) {
  if (services.length === 0) return null;

  return (
    <motion.div
      className="bt-panel bt-services-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="bt-panel-header">
        <h3>GATT Services</h3>
        <span className="bt-badge">{services.length}</span>
      </div>

      <div className="bt-services-list">
        {services.map((serviceData, idx) => (
          <ServiceCard
            key={serviceData.service.uuid + idx}
            serviceData={serviceData}
            readCharacteristic={readCharacteristic}
            writeCharacteristic={writeCharacteristic}
            startNotifications={startNotifications}
            stopNotifications={stopNotifications}
            addLog={addLog}
          />
        ))}
      </div>
    </motion.div>
  );
}
