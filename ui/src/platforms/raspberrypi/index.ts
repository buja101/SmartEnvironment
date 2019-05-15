import { PlatformInterface } from '../../types';

export function newRaspberryPiPlatform(): PlatformInterface {
  return {
    key: 'RaspberryPi',
    name: 'micro:bit',
    image: '/images/pi.png',
    capabilities: ['RemoteShell'],
    defaultExtensions: [
      'Pi General',
    ],
    extensions: [],
  };
}
