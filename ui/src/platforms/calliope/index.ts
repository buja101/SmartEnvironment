import { PlatformInterface } from '../../types';

export function newCalliopePlatform(): PlatformInterface {
  return {
    key: 'Calliope',
    name: 'Calliope Mini',
    image: '/images/calliope.png',
    capabilities: ['HexDownload'],
    defaultExtensions: [
      'Calliope General',
    ],
    extensions: [],
  };
}
