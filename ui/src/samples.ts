import path = require('path');
import changeCase = require('change-case');
import { Platform } from './types';
const includeFolder: (folderPath: string) => { [file: string]: string } = require('include-folder');

interface PlatformSamples {
  [name: string]: string;
}

type AllPlatformSamples = Partial<Record<Platform, PlatformSamples>>;

const Samples: AllPlatformSamples = {};

const microbitSamples = includeFolder(path.join(__dirname, '..', 'src', 'platforms', 'microbit', 'samples'));
registerSamples('MicroBit', microbitSamples);

const webSamples = includeFolder(path.join(__dirname, '..', 'src', 'platforms', 'python', 'samples'));
registerSamples('Python', webSamples);

const circuitpySamples = includeFolder(path.join(__dirname, '..', 'src', 'platforms', 'circuitpython', 'samples'));
registerSamples('CircuitPython', circuitpySamples);

const piSamples = includeFolder(path.join(__dirname, '..', 'src', 'platforms', 'raspberrypi', 'samples'));
registerSamples('RaspberryPi', piSamples);

// ... other platforms (like above) ...

function registerSamples(platform: Platform, foundSamples: { [file: string]: string }) {
  Samples[platform] = {};

  Object.keys(foundSamples).forEach((file) => {
    Samples[platform]![changeCase.titleCase(file)] = foundSamples[file];
  });
}

export function newSamples() {
  function getSamples(platform: Platform) {
    const platformSamples = Samples[platform];

    if (!platformSamples) {
      // throw new Error('No samples found');
      return [];
    }

    return Object.keys(platformSamples);
  }

  function getSample(platform: Platform, file: string) {
    const platformSamples = Samples[platform];

    if (!platformSamples) {
      throw new Error('No samples found');
    }

    return platformSamples[file];
  }

  return {
    getSamples,
    getSample,
  };
}
