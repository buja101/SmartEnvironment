export interface App {
  initConnection(ip: string | null): Promise<void>;
  runCode(code: string): void;

  openFile(): Promise<string>;
  saveFile(data: string | Uint8Array, ext: string, type: string): Promise<void>;
  exportPython(python: string, extensions: Extension[]): Promise<void>;
  saveHex(python: string, extensions: Extension[]): Promise<void>;
  flashHex(python: string, extensions: Extension[], onProgress: (progress: number) => void): Promise<void>;

  assignTerminal(term: TerminalInterface): void;

  getThemes(): string[];

  getSamples(platform: Platform): string[];
  getSample(platform: Platform, file: string): string;
}

export interface TerminalEvents {
  data: (data: string) => void;
  resize: (cols: number, rows: number) => void;
}

export interface TerminalInterface {
  on<K extends keyof TerminalEvents>(eventType: K, handler: TerminalEvents[K]): void;

  focus(): void;
  write(s: string): void;
  reset(): void;

  cols: number;
  rows: number;
}

export type Extension = 'micro:bit General' | 'Pi General' | 'Web General' | 'CircuitPython General' | 'Calliope General' | 'scroll:bit' | 'enviro:bit' | 'GiggleBot' | 'Pi Supply IoT LoRa Node' | 'EnviroBit';

export type Platform = 'Python' | 'MicroBit' | 'RaspberryPi' | 'CircuitPython' | 'Calliope';

export interface PlatformSelection {
  platform: Platform;
  title: string;
  image: string;
  help: string;
}

export interface PlatformInterface {
  key: Platform;
  name: string;
  image: string;
  capabilities: Capability[];
  defaultExtensions: Extension[];
  extensions: Extension[];
}

export type Capability = 'HexDownload' | 'RemoteShell' | 'TrinketShell' | 'HexFlash' | 'PythonDownload';
