import { PlatformInterface } from '../../types';

export function newMicrobitPlatform(): PlatformInterface {
  return {
    key: 'MicroBit',
    name: 'micro:bit',
    image: '/images/microbit.png',
    capabilities: ['HexDownload', 'HexFlash'], 
    defaultExtensions: [
      'micro:bit General',
    ],
    extensions: [
      'scroll:bit',
      'GiggleBot',
      'Pi Supply IoT LoRa Node',
    ],
  };
}
