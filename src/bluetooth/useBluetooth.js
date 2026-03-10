import { useState, useCallback, useRef } from 'react';

export function useBluetooth() {
  const [device, setDevice] = useState(null);
  const [server, setServer] = useState(null);
  const [services, setServices] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);
  const notificationCleanups = useRef([]);

  const addLog = useCallback((type, message, data = null) => {
    const entry = {
      id: Date.now() + Math.random(),
      timestamp: new Date(),
      type,
      message,
      data,
    };
    setLogs(prev => [entry, ...prev]);
    return entry;
  }, []);

  const clearLogs = useCallback(() => setLogs([]), []);

  const isSupported = () => !!navigator.bluetooth;

  const scanAndConnect = useCallback(async () => {
    if (!isSupported()) {
      setError('Web Bluetooth API is not supported in this browser. Use Chrome or Edge.');
      addLog('error', 'Web Bluetooth API not supported');
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      addLog('info', 'Requesting Bluetooth device...');
      const btDevice = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [
          'generic_access', 'generic_attribute', 'device_information',
          'battery_service', 'heart_rate', 'health_thermometer',
          'immediate_alert', 'link_loss', 'tx_power',
          'current_time', 'human_interface_device',
          'cycling_speed_and_cadence', 'cycling_power',
          'running_speed_and_cadence', 'environmental_sensing',
          'body_composition', 'user_data', 'weight_scale',
          'fitness_machine', 'blood_pressure',
        ],
      });

      addLog('success', `Device selected: ${btDevice.name || 'Unknown'} (ID: ${btDevice.id})`);

      btDevice.addEventListener('gattserverdisconnected', () => {
        addLog('warning', `Device "${btDevice.name || 'Unknown'}" disconnected`);
        setServer(null);
        setServices([]);
        notificationCleanups.current.forEach(fn => fn());
        notificationCleanups.current = [];
      });

      addLog('info', 'Connecting to GATT server...');
      const gattServer = await btDevice.gatt.connect();
      addLog('success', 'Connected to GATT server');

      setDevice(btDevice);
      setServer(gattServer);

    } catch (err) {
      if (err.name === 'NotFoundError') {
        addLog('info', 'Device selection cancelled by user');
      } else {
        setError(err.message);
        addLog('error', `Connection failed: ${err.message}`);
      }
    } finally {
      setIsConnecting(false);
    }
  }, [addLog]);

  const disconnect = useCallback(() => {
    notificationCleanups.current.forEach(fn => fn());
    notificationCleanups.current = [];

    if (device?.gatt?.connected) {
      device.gatt.disconnect();
      addLog('info', `Disconnected from "${device.name || 'Unknown'}"`);
    }
    setDevice(null);
    setServer(null);
    setServices([]);
  }, [device, addLog]);

  const discoverServices = useCallback(async () => {
    if (!server) {
      addLog('error', 'No GATT server connected');
      return;
    }

    setIsDiscovering(true);
    try {
      addLog('info', 'Discovering services...');
      const discoveredServices = await server.getPrimaryServices();
      addLog('success', `Found ${discoveredServices.length} service(s)`);

      const serviceData = [];
      for (const service of discoveredServices) {
        addLog('info', `Discovering characteristics for service ${service.uuid}...`);
        try {
          const characteristics = await service.getCharacteristics();
          addLog('success', `  Found ${characteristics.length} characteristic(s) in ${service.uuid}`);

          const charData = [];
          for (const char of characteristics) {
            let descriptors = [];
            try {
              descriptors = await char.getDescriptors();
              if (descriptors.length > 0) {
                addLog('info', `    Found ${descriptors.length} descriptor(s) for ${char.uuid}`);
              }
            } catch {
              // Some characteristics don't allow descriptor access
            }
            charData.push({ characteristic: char, descriptors });
          }
          serviceData.push({ service, characteristics: charData });
        } catch (err) {
          addLog('warning', `  Could not read characteristics for ${service.uuid}: ${err.message}`);
          serviceData.push({ service, characteristics: [], error: err.message });
        }
      }
      setServices(serviceData);
    } catch (err) {
      addLog('error', `Service discovery failed: ${err.message}`);
      setError(err.message);
    } finally {
      setIsDiscovering(false);
    }
  }, [server, addLog]);

  const readCharacteristic = useCallback(async (characteristic) => {
    try {
      addLog('info', `Reading characteristic ${characteristic.uuid}...`);
      const value = await characteristic.readValue();
      addLog('success', `Read ${value.byteLength} byte(s) from ${characteristic.uuid}`, {
        bytes: Array.from(new Uint8Array(value.buffer)),
      });
      return value;
    } catch (err) {
      addLog('error', `Read failed for ${characteristic.uuid}: ${err.message}`);
      throw err;
    }
  }, [addLog]);

  const writeCharacteristic = useCallback(async (characteristic, data, withResponse = true) => {
    try {
      const writeMethod = withResponse ? 'writeValueWithResponse' : 'writeValueWithoutResponse';
      addLog('info', `Writing ${data.byteLength} byte(s) to ${characteristic.uuid} (${withResponse ? 'with response' : 'without response'})...`);
      await characteristic[writeMethod](data);
      addLog('success', `Write successful to ${characteristic.uuid}`, {
        bytes: Array.from(new Uint8Array(data)),
      });
    } catch (err) {
      addLog('error', `Write failed for ${characteristic.uuid}: ${err.message}`);
      throw err;
    }
  }, [addLog]);

  const startNotifications = useCallback(async (characteristic, callback) => {
    try {
      addLog('info', `Starting notifications for ${characteristic.uuid}...`);
      await characteristic.startNotifications();

      const handler = (event) => {
        const value = event.target.value;
        addLog('notification', `Notification from ${characteristic.uuid}: ${value.byteLength} byte(s)`, {
          bytes: Array.from(new Uint8Array(value.buffer)),
        });
        callback?.(value);
      };

      characteristic.addEventListener('characteristicvaluechanged', handler);
      addLog('success', `Notifications started for ${characteristic.uuid}`);

      const cleanup = () => {
        characteristic.removeEventListener('characteristicvaluechanged', handler);
        characteristic.stopNotifications().catch(() => {});
      };
      notificationCleanups.current.push(cleanup);

      return cleanup;
    } catch (err) {
      addLog('error', `Failed to start notifications for ${characteristic.uuid}: ${err.message}`);
      throw err;
    }
  }, [addLog]);

  const stopNotifications = useCallback(async (characteristic) => {
    try {
      await characteristic.stopNotifications();
      addLog('info', `Notifications stopped for ${characteristic.uuid}`);
    } catch (err) {
      addLog('error', `Failed to stop notifications for ${characteristic.uuid}: ${err.message}`);
    }
  }, [addLog]);

  return {
    device,
    server,
    services,
    isConnecting,
    isDiscovering,
    error,
    logs,
    isSupported: isSupported(),
    scanAndConnect,
    disconnect,
    discoverServices,
    readCharacteristic,
    writeCharacteristic,
    startNotifications,
    stopNotifications,
    addLog,
    clearLogs,
  };
}
