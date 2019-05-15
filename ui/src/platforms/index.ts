import { Platform, PlatformInterface, PlatformSelection } from '../types';
import { newCalliopePlatform } from './calliope';
import { newCircuitPythonPlatform } from './circuitpython';
import { newMicrobitPlatform } from './microbit';
import { newRaspberryPiPlatform } from './raspberrypi';
import { newWebPlatform } from './python';


export function getPlatformList(): PlatformSelection[] {
  return [
    { platform: 'Python', title: 'Python 3', image: '/images/webpy.png', help: 'https://edublocks.org/python.html' },
    // { title: 'Advanced Python', image: '/images/advpy.png', help: 'https://edublocks.org' },
    { platform: 'RaspberryPi', title: 'Raspberry Pi', image: '/images/pi.png', help: 'https://edublocks.org/pi.html' },
    { platform: 'MicroBit', title: 'micro:bit', image: '/images/microbit.png', help: 'https://edublocks.org/microbit.html' },
    { platform: 'CircuitPython', title: 'CircuitPython', image: '/images/circuitplayground.png', help: 'https://edublocks.org/circuitpy.html' },
    // { platform: 'Calliope', title: 'Calliope Mini', image: '/images/calliope.png', help: 'https://docs.edublocks.org/mode-guides/calliope' },
  ];
}

export async function getPlatform(platform: Platform): Promise<PlatformInterface> {
  switch (platform) {
    case 'Python':
      return newWebPlatform();
    case 'MicroBit':
      return newMicrobitPlatform(); 
    case 'RaspberryPi':
      return newRaspberryPiPlatform();
    case 'CircuitPython': 
      return newCircuitPythonPlatform();
    case 'Calliope':
      return newCalliopePlatform();
    default:
      throw new Error('Invalid platform: ' + platform);
  }
}
