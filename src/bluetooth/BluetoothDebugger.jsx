import { motion } from 'framer-motion';
import { useBluetooth } from './useBluetooth';
import DevicePanel from './components/DevicePanel';
import ServiceExplorer from './components/ServiceExplorer';
import LogPanel from './components/LogPanel';
import { Link } from 'react-router-dom';
import './bluetooth.css';

export default function BluetoothDebugger() {
  const {
    device,
    server,
    services,
    isConnecting,
    isDiscovering,
    error,
    logs,
    isSupported,
    scanAndConnect,
    disconnect,
    discoverServices,
    readCharacteristic,
    writeCharacteristic,
    startNotifications,
    stopNotifications,
    addLog,
    clearLogs,
  } = useBluetooth();

  return (
    <div className="bt-app">
      <header className="bt-header">
        <div className="bt-header-content">
          <Link to="/" className="bt-back-link">&larr; Back</Link>
          <div className="bt-header-title">
            <h1>Bluetooth Debug Analyzer</h1>
            <p>Connect, explore, and debug BLE devices via Web Bluetooth</p>
          </div>
        </div>
      </header>

      {!isSupported && (
        <motion.div
          className="bt-browser-warning"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3>Web Bluetooth Not Supported</h3>
          <p>
            Your browser does not support the Web Bluetooth API.
            Please use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> on
            desktop (macOS, Windows, Linux, or ChromeOS).
          </p>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="bt-error-banner"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}

      <div className="bt-layout">
        <div className="bt-main">
          <DevicePanel
            device={device}
            server={server}
            isConnecting={isConnecting}
            onConnect={scanAndConnect}
            onDisconnect={disconnect}
            onDiscover={discoverServices}
            isDiscovering={isDiscovering}
          />

          <ServiceExplorer
            services={services}
            readCharacteristic={readCharacteristic}
            writeCharacteristic={writeCharacteristic}
            startNotifications={startNotifications}
            stopNotifications={stopNotifications}
            addLog={addLog}
          />
        </div>

        <div className="bt-sidebar">
          <LogPanel logs={logs} onClear={clearLogs} />
        </div>
      </div>
    </div>
  );
}
