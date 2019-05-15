import * as DAPjs from '../../lib/dapjs';
import { getHexFile } from '../../lib/hexlify';

export async function flashMicroBit(python: string, onProgress: (progress: number) => void) {
  console.log('Select your micro:bit');

  const device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x0d28, productId: 0x0204 }],
  });

  // Connect to device
  window.transport = new DAPjs.WebUSB(device);
  window.daplink = new DAPjs.DAPLink(window.transport);

  // Ensure disconnected
  window.daplink.disconnect();

  // Event to monitor flashing progress
  window.daplink.on(DAPjs.DAPLink.EVENT_PROGRESS, (progress: number) => {
    console.log('progress', progress);

    onProgress(progress);
  });

  try {
    // Push binary to board
    await window.daplink.connect();

    let output;

    try {
      output = getHexFile(python);
    } catch (e) {
      alert(e.message);
      return;
    }

    // Encode firmware for flashing
    const enc = new TextEncoder();
    const image = enc.encode(output).buffer;

    console.log('Flashing');
    await window.daplink.flash(image);
    console.log('Finished flashing!');
    await window.daplink.disconnect();
  } catch (e) {
    console.log('Error flashing: ' + e);

    // If micro:bit does not support dapjs
    if (e.message === 'No valid interfaces found.') {
      return;
    } else if (e.message === 'Unable to claim interface.') {
      return;
    }
  }
}
