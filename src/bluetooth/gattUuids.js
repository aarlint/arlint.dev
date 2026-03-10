// Well-known GATT Service UUIDs
export const KNOWN_SERVICES = {
  '00001800-0000-1000-8000-00805f9b34fb': 'Generic Access',
  '00001801-0000-1000-8000-00805f9b34fb': 'Generic Attribute',
  '0000180a-0000-1000-8000-00805f9b34fb': 'Device Information',
  '0000180f-0000-1000-8000-00805f9b34fb': 'Battery Service',
  '00001802-0000-1000-8000-00805f9b34fb': 'Immediate Alert',
  '00001803-0000-1000-8000-00805f9b34fb': 'Link Loss',
  '00001804-0000-1000-8000-00805f9b34fb': 'Tx Power',
  '00001805-0000-1000-8000-00805f9b34fb': 'Current Time Service',
  '00001806-0000-1000-8000-00805f9b34fb': 'Reference Time Update',
  '00001807-0000-1000-8000-00805f9b34fb': 'Next DST Change',
  '00001808-0000-1000-8000-00805f9b34fb': 'Glucose',
  '00001809-0000-1000-8000-00805f9b34fb': 'Health Thermometer',
  '0000180d-0000-1000-8000-00805f9b34fb': 'Heart Rate',
  '0000180e-0000-1000-8000-00805f9b34fb': 'Phone Alert Status',
  '00001810-0000-1000-8000-00805f9b34fb': 'Blood Pressure',
  '00001811-0000-1000-8000-00805f9b34fb': 'Alert Notification',
  '00001812-0000-1000-8000-00805f9b34fb': 'Human Interface Device',
  '00001813-0000-1000-8000-00805f9b34fb': 'Scan Parameters',
  '00001814-0000-1000-8000-00805f9b34fb': 'Running Speed and Cadence',
  '00001815-0000-1000-8000-00805f9b34fb': 'Automation IO',
  '00001816-0000-1000-8000-00805f9b34fb': 'Cycling Speed and Cadence',
  '00001818-0000-1000-8000-00805f9b34fb': 'Cycling Power',
  '00001819-0000-1000-8000-00805f9b34fb': 'Location and Navigation',
  '0000181a-0000-1000-8000-00805f9b34fb': 'Environmental Sensing',
  '0000181c-0000-1000-8000-00805f9b34fb': 'User Data',
  '0000181d-0000-1000-8000-00805f9b34fb': 'Weight Scale',
  '0000181e-0000-1000-8000-00805f9b34fb': 'Bond Management',
  '00001820-0000-1000-8000-00805f9b34fb': 'Internet Protocol Support',
  '00001822-0000-1000-8000-00805f9b34fb': 'Pulse Oximeter',
  '00001826-0000-1000-8000-00805f9b34fb': 'Fitness Machine',
  '0000fe95-0000-1000-8000-00805f9b34fb': 'Xiaomi Inc.',
  '0000fee0-0000-1000-8000-00805f9b34fb': 'Anhui Huami (Mi Band)',
  '0000feaa-0000-1000-8000-00805f9b34fb': 'Google Eddystone',
};

// Well-known GATT Characteristic UUIDs
export const KNOWN_CHARACTERISTICS = {
  '00002a00-0000-1000-8000-00805f9b34fb': 'Device Name',
  '00002a01-0000-1000-8000-00805f9b34fb': 'Appearance',
  '00002a02-0000-1000-8000-00805f9b34fb': 'Peripheral Privacy Flag',
  '00002a03-0000-1000-8000-00805f9b34fb': 'Reconnection Address',
  '00002a04-0000-1000-8000-00805f9b34fb': 'Peripheral Preferred Connection Parameters',
  '00002a05-0000-1000-8000-00805f9b34fb': 'Service Changed',
  '00002a06-0000-1000-8000-00805f9b34fb': 'Alert Level',
  '00002a07-0000-1000-8000-00805f9b34fb': 'Tx Power Level',
  '00002a19-0000-1000-8000-00805f9b34fb': 'Battery Level',
  '00002a23-0000-1000-8000-00805f9b34fb': 'System ID',
  '00002a24-0000-1000-8000-00805f9b34fb': 'Model Number String',
  '00002a25-0000-1000-8000-00805f9b34fb': 'Serial Number String',
  '00002a26-0000-1000-8000-00805f9b34fb': 'Firmware Revision String',
  '00002a27-0000-1000-8000-00805f9b34fb': 'Hardware Revision String',
  '00002a28-0000-1000-8000-00805f9b34fb': 'Software Revision String',
  '00002a29-0000-1000-8000-00805f9b34fb': 'Manufacturer Name String',
  '00002a2a-0000-1000-8000-00805f9b34fb': 'IEEE 11073-20601 Regulatory Cert',
  '00002a37-0000-1000-8000-00805f9b34fb': 'Heart Rate Measurement',
  '00002a38-0000-1000-8000-00805f9b34fb': 'Body Sensor Location',
  '00002a39-0000-1000-8000-00805f9b34fb': 'Heart Rate Control Point',
  '00002a49-0000-1000-8000-00805f9b34fb': 'Blood Pressure Feature',
  '00002a4d-0000-1000-8000-00805f9b34fb': 'Report',
  '00002a4e-0000-1000-8000-00805f9b34fb': 'Protocol Mode',
  '00002a50-0000-1000-8000-00805f9b34fb': 'PnP ID',
  '00002a5d-0000-1000-8000-00805f9b34fb': 'Sensor Location',
  '00002a63-0000-1000-8000-00805f9b34fb': 'Cycling Power Measurement',
  '00002a65-0000-1000-8000-00805f9b34fb': 'Cycling Power Feature',
  '00002a5b-0000-1000-8000-00805f9b34fb': 'CSC Measurement',
  '00002a5c-0000-1000-8000-00805f9b34fb': 'CSC Feature',
  '00002a53-0000-1000-8000-00805f9b34fb': 'RSC Measurement',
  '00002a54-0000-1000-8000-00805f9b34fb': 'RSC Feature',
  '00002a6e-0000-1000-8000-00805f9b34fb': 'Temperature',
  '00002a6f-0000-1000-8000-00805f9b34fb': 'Humidity',
  '00002a6d-0000-1000-8000-00805f9b34fb': 'Pressure',
  '00002a76-0000-1000-8000-00805f9b34fb': 'UV Index',
  '00002a2b-0000-1000-8000-00805f9b34fb': 'Current Time',
  '00002a0f-0000-1000-8000-00805f9b34fb': 'Local Time Information',
};

// Well-known GATT Descriptor UUIDs
export const KNOWN_DESCRIPTORS = {
  '00002900-0000-1000-8000-00805f9b34fb': 'Characteristic Extended Properties',
  '00002901-0000-1000-8000-00805f9b34fb': 'Characteristic User Description',
  '00002902-0000-1000-8000-00805f9b34fb': 'Client Characteristic Configuration',
  '00002903-0000-1000-8000-00805f9b34fb': 'Server Characteristic Configuration',
  '00002904-0000-1000-8000-00805f9b34fb': 'Characteristic Presentation Format',
  '00002905-0000-1000-8000-00805f9b34fb': 'Characteristic Aggregate Format',
};

export function getServiceName(uuid) {
  const normalized = uuid.toLowerCase();
  return KNOWN_SERVICES[normalized] || null;
}

export function getCharacteristicName(uuid) {
  const normalized = uuid.toLowerCase();
  return KNOWN_CHARACTERISTICS[normalized] || null;
}

export function getDescriptorName(uuid) {
  const normalized = uuid.toLowerCase();
  return KNOWN_DESCRIPTORS[normalized] || null;
}

export function shortenUuid(uuid) {
  const match = uuid.match(/^0000([0-9a-f]{4})-0000-1000-8000-00805f9b34fb$/i);
  return match ? `0x${match[1].toUpperCase()}` : uuid;
}

export function getCharacteristicProperties(characteristic) {
  const props = characteristic.properties;
  const list = [];
  if (props.broadcast) list.push('Broadcast');
  if (props.read) list.push('Read');
  if (props.writeWithoutResponse) list.push('Write Without Response');
  if (props.write) list.push('Write');
  if (props.notify) list.push('Notify');
  if (props.indicate) list.push('Indicate');
  if (props.authenticatedSignedWrites) list.push('Authenticated Signed Writes');
  if (props.reliableWrite) list.push('Reliable Write');
  if (props.writableAuxiliaries) list.push('Writable Auxiliaries');
  return list;
}

export function parseValue(dataView) {
  if (!dataView || dataView.byteLength === 0) return { hex: '', ascii: '', decimal: [] };

  const bytes = new Uint8Array(dataView.buffer);
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(' ');
  const ascii = Array.from(bytes).map(b => (b >= 32 && b < 127) ? String.fromCharCode(b) : '.').join('');
  const decimal = Array.from(bytes);

  return { hex, ascii, decimal, raw: dataView };
}
