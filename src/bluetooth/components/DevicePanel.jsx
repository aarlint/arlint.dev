import { motion } from 'framer-motion';

export default function DevicePanel({ device, server, isConnecting, onConnect, onDisconnect, onDiscover, isDiscovering }) {
  const isConnected = device?.gatt?.connected;

  return (
    <motion.div
      className="bt-panel bt-device-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bt-panel-header">
        <h3>Device Connection</h3>
        <div className={`bt-status-dot ${isConnected ? 'connected' : 'disconnected'}`} />
      </div>

      {!isConnected ? (
        <button
          className="bt-btn bt-btn-primary"
          onClick={onConnect}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <>
              <span className="bt-spinner" />
              Connecting...
            </>
          ) : (
            'Scan & Connect'
          )}
        </button>
      ) : (
        <div className="bt-device-info">
          <div className="bt-info-grid">
            <div className="bt-info-item">
              <span className="bt-info-label">Name</span>
              <span className="bt-info-value">{device.name || 'Unknown Device'}</span>
            </div>
            <div className="bt-info-item">
              <span className="bt-info-label">ID</span>
              <span className="bt-info-value bt-monospace">{device.id}</span>
            </div>
            <div className="bt-info-item">
              <span className="bt-info-label">GATT</span>
              <span className="bt-info-value">{server ? 'Connected' : 'Not connected'}</span>
            </div>
          </div>
          <div className="bt-btn-group">
            <button
              className="bt-btn bt-btn-secondary"
              onClick={onDiscover}
              disabled={isDiscovering}
            >
              {isDiscovering ? (
                <>
                  <span className="bt-spinner" />
                  Discovering...
                </>
              ) : (
                'Discover Services'
              )}
            </button>
            <button className="bt-btn bt-btn-danger" onClick={onDisconnect}>
              Disconnect
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
