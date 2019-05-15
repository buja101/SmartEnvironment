type HostType = 'RaspberryPi' | 'Internet';

export function isHostedBy(): HostType {
  const nodes = window.document.getElementsByName('x-host-type');
  

  if (nodes.length > 0) {
    const node = nodes[0];

    if (node instanceof HTMLMetaElement && node.content.length > 0) {
      return node.content as HostType;
    }
  }

  return 'Internet';
}
