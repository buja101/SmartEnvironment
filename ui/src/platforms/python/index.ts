import { PlatformInterface } from '../../types';

export function newWebPlatform(): PlatformInterface {
  return {
    key: 'Python',
    name: 'Python 3',
    image: '/images/webpy.png',
    capabilities: ['TrinketShell'],
    defaultExtensions: [
      'Web General',
    ],
    extensions: [],
  };
}
