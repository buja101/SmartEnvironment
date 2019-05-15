import fs = require('fs');
import path = require('path');

const firmware = fs.readFileSync(path.join(__dirname, '..', '..', 'binaries', 'micropython.hex'), 'utf8');

function hexlifyLine(ar: Uint8Array) {
  let result = '';

  for (let i = 0; i < ar.length; ++i) {
    if (ar[i] < 16) {
      result += '0';
    }
    result += ar[i].toString(16);
  }

  return result;
}

function hexlify(script: string) {
  // add header, pad to multiple of 16 bytes
  const data = new Uint8Array(4 + script.length + (16 - (4 + script.length) % 16));

  data[0] = 77; // 'M'
  data[1] = 80; // 'P'
  data[2] = script.length & 0xff;
  data[3] = (script.length >> 8) & 0xff;

  for (let i = 0; i < script.length; ++i) {
    data[4 + i] = script.charCodeAt(i);
  }

  // check data.length < 0x2000
  if (data.length > 8192) {
    throw new RangeError('Too long');
  }

  // convert to .hex format
  let addr = 0x3e000; // magic start address in flash
  const chunk = new Uint8Array(5 + 16);
  const output = [];

  for (let i = 0; i < data.length; i += 16, addr += 16) {
    chunk[0] = 16; // length of data section
    chunk[1] = (addr >> 8) & 0xff; // high byte of 16-bit addr
    chunk[2] = addr & 0xff; // low byte of 16-bit addr
    chunk[3] = 0; // type (data)

    for (let j = 0; j < 16; ++j) {
      chunk[4 + j] = data[i + j];
    }

    let checksum = 0;

    for (let j = 0; j < 4 + 16; ++j) {
      checksum += chunk[j];
    }

    chunk[4 + 16] = (-checksum) & 0xff;

    output.push(':' + hexlifyLine(chunk).toUpperCase());
  }

  return output.join('\n');
}

// Generates a hex file containing the user's Python from the firmware.
export function getHexFile(python: string) {
  const hexlified_python = hexlify(python);
  const insertion_point = ':::::::::::::::::::::::::::::::::::::::::::';

  return firmware.replace(insertion_point, hexlified_python);
}
