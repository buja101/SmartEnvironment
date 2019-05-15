import React = require('preact');
import { Component } from 'preact';

interface Props {
  platformImg?: string;

  openSamples(): void;
  openExtensions?(): void;
  openThemes(): void;
  // downloadPython(): void;
  downloadHex?(): void;
  downloadPython?(): void;
  onFunction(): void;
  openPlatforms(): void;
  modeQuestion(): void;

  newCode(): void;
  openCode(): void;
  saveCode(): void;
  openTerminal?(): void;

  sync: boolean;
}

export default class Nav extends Component<Props, {}> {
  public render() {
    const { openExtensions, downloadHex, openTerminal: sendCode, downloadPython } = this.props;

    return (
      <nav>
        <a class='brand' onClick={() => this.props.modeQuestion()} data-tooltip="Change Mode">
          {this.props.platformImg && <img src={this.props.platformImg} class='Nav__platformImg' height={50} />}

          <img class='logo' src='/images/edublocksBetaLogo.svg' />
          {/*<span class='filename'>({this.props.sync ? 'In sync' : 'Out of sync'})</span>*/}
        </a>

        <input id='bmenub' type='checkbox' class='show' />
        <label for='bmenub' class='burger pseudo button icon-menu'></label>

        <div class='menu'>



          <a class='button icon-plus' title="Create new file" href='javascript:void(0)' onClick={() => this.props.newCode()}>
            New
          </a>

          <a class='button icon-folder-open' title="Open a file" href='javascript:void(0)' onClick={() => this.props.openCode()}>
            Open
          </a>

          <a class='button icon-floppy' title='Save a file' href='javascript:void(0)' onClick={() => this.props.saveCode()}>
            Save
          </a>

          {downloadHex &&
            <a class='button icon-flash' title='Download file to flash to micro:bit' href='javascript:void(0)' onClick={() => downloadHex()}>
              Download Hex
            </a>
          }

          {downloadPython &&
            <a class='button icon-download' title='Download Python Source Code' href='javascript:void(0)' onClick={() => downloadPython()}>
              Download
          </a>
          }


          {/*<a class='button' title='Themes' href='javascript:void(0)' onClick={() => this.props.openThemes()}>
            Themes
          </a>*/}

          {openExtensions &&
            <a class='button icon-puzzle' title='Extensions' href='javascript:void(0)' onClick={() => openExtensions()}>
              Extensions
            </a>
          }

          <a class='button icon-book' title='Samples' href='javascript:void(0)' onClick={() => this.props.openSamples()}>
            Samples
          </a>

          <a class='button icon-cog' title="Settings" href='javascript:void(0)' onClick={() => this.props.onFunction()}>
            Settings
          </a>

          {sendCode &&
            <a class='button icon-play button-green' title='Run your code' href='javascript:void(0)' onClick={() => sendCode()}>
              Run
            </a>
          }

        </div>
      </nav>
    );
  }
}
