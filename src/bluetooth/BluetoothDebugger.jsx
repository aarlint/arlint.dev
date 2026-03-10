import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useBluetooth } from './useBluetooth';
import DevicePanel from './components/DevicePanel';
import ServiceExplorer from './components/ServiceExplorer';
import LogPanel from './components/LogPanel';
import { Link } from 'react-router-dom';
import './bluetooth.css';

function detectPlatform() {
  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS/.test(ua);
  const isFirefox = /Firefox|FxiOS/.test(ua);
  return { isIOS, isAndroid, isSafari, isFirefox };
}

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

  const platform = useMemo(() => detectPlatform(), []);

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
          {platform.isIOS ? (
            <>
              <h3>iOS / iPadOS Detected</h3>
              <p>
                Apple&apos;s Safari does not support the Web Bluetooth API.
                To use this tool on your iPad or iPhone, install one of these
                third-party browsers that add Web Bluetooth support:
              </p>
              <div className="bt-alt-browsers">
                <a href="https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055" target="_blank" rel="noopener noreferrer" className="bt-alt-browser-card">
                  <strong>Bluefy</strong>
                  <span>Full Web Bluetooth browser for iOS. Free with premium features.</span>
                </a>
                <a href="https://apps.apple.com/app/webble/id1193531073" target="_blank" rel="noopener noreferrer" className="bt-alt-browser-card">
                  <strong>WebBLE</strong>
                  <span>Lightweight Web Bluetooth-enabled browser for iOS.</span>
                </a>
              </div>
              <p className="bt-alt-note">
                Open this same URL in one of the browsers above to get started.
              </p>
            </>
          ) : platform.isFirefox ? (
            <>
              <h3>Firefox Not Supported</h3>
              <p>
                Firefox does not support the Web Bluetooth API.
                Please open this page in <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> instead.
              </p>
            </>
          ) : (
            <>
              <h3>Web Bluetooth Not Supported</h3>
              <p>
                Your browser does not support the Web Bluetooth API.
                Please use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> on
                desktop (macOS, Windows, Linux, or ChromeOS).
                {platform.isAndroid && (
                  <> On Android, <strong>Chrome</strong> and <strong>Samsung Internet</strong> both support Web Bluetooth.</>
                )}
              </p>
            </>
          )}
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
