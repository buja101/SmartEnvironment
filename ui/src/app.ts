import { getBeforeScript } from './blocks/index';
import { getIo } from './io';
import { flashMicroBit } from './platforms/microbit/flash';
import { newSamples } from './samples';
import { newServerConnection, ServerConnection } from './server';
import { App, Extension, TerminalInterface } from './types';
import { getHexFile } from './lib/hexlify';

export function newApp(): App {
  let connection: ServerConnection | undefined;
  const io = getIo();
  const samples = newSamples();

  async function initConnection(ip: string | null) {
    connection = await newServerConnection(ip);
  }

  function runCode(code: string) {
    if (!connection) {
      throw new Error('No connection!');
    }

    return connection.runCode(code);
  }

  function openFile() {
    return io.openFile();
  }

  function saveFile(data: string | Uint8Array, ext: string, type: string) {
    return io.saveFile(data, ext, type);
  }

  function getCombinedScript(python: string, extensions: Extension[]) {
    const beforeScript = getBeforeScript(extensions);

    let newpy = python;

    newpy = newpy.replace('from gigglebot import *', '');
    newpy = newpy.replace('from scrollbit import *', '');
    newpy = newpy.replace('from envirobit import *', '');
    newpy = newpy.replace('from iotloranode import loraNode', '');

    const combinedScript = (beforeScript ? (beforeScript + '\n\n') : '') + newpy;

    return combinedScript;
  }

  async function exportPython(python: string, extensions: Extension[]) {
    const combinedScript = getCombinedScript(python, extensions);

    await io.saveFile(combinedScript, 'py', 'text/python;charset=utf-8');
  }

  async function flashHex(python: string, extensions: Extension[], onProgress: (progress: number) => void) {
    const combinedScript = getCombinedScript(python, extensions);

    // const hex = getHexFile(combinedScript);

    // await io.saveFile(hex, 'hex', 'application/octet-stream');

    await flashMicroBit(combinedScript, onProgress);
  }

  async function saveHex(python: string, extensions: Extension[]) {
    const combinedScript = getCombinedScript(python, extensions);

    const hex = getHexFile(combinedScript);

    await io.saveFile(hex, 'hex', 'application/octet-stream');

  }

  function assignTerminal(terminal: TerminalInterface) {
    if (!connection) {
      throw new Error('No connection!');
    }

    connection.on('data', (data) => terminal.write(data));

    connection.on('reconnect', () => {
      terminal.reset();

      connection!.resizeTerminal(terminal.cols, terminal.rows);
    });

    terminal.on('data', connection.sendData);
    terminal.on('resize', connection.resizeTerminal);

    if (terminal.cols && terminal.rows) {
      connection.resizeTerminal(terminal.cols, terminal.rows);
    }
  }

  function getThemes() {
    return [
      'Default',
      'Tangerine',
      'Vivid',
      'DarkRed',
      'Celestial',
      'Pacific',
      'Dark',
      'Solarized',
    ];
  }

  return {
    initConnection,
    runCode,
    openFile,
    saveFile,
    exportPython,
    flashHex,
    saveHex,
    assignTerminal,
    getThemes,
    ...samples,
  };
}
