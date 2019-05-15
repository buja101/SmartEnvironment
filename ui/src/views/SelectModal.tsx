import React = require('preact');
import { Component } from 'preact';

interface SelectModalProps<T extends SelectModalOption> {
  title: string;
  selectLabel: string;
  visible: boolean;

  buttons: SelectModalButton[];
  options: T[];

  onButtonClick(key: string): void;
  onSelect(option: T): void;
}

interface SelectModalState {

}

export interface SelectModalOption {
  label: string;
}

export interface SelectModalButton {
  key: string;
  label: string;
  position: 'left' | 'right';
}

export default class SelectModal<T extends SelectModalOption> extends Component<SelectModalProps<T>, SelectModalState> {
  private getButtons(): SelectModalButton[] {
    return [
      ...this.props.buttons,
      { key: 'close', label: 'Close', position: 'right' },
    ];
  }

  public render() {
    const getOptions = () => this.props.options.map((option) => ([
      <div class='SelectModal__cell SelectModal__cell--text'>
        <span>{option.label}</span>
      </div>,
      <div class='SelectModal__cell SelectModal__cell--action'>
        <button onClick={() => this.props.onSelect(option)}>{this.props.selectLabel}</button>
      </div>,
    ]));

    return (
      <div class='SelectModal modal'>

        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />

        <label for='modal_1' class='overlay'></label>

        <article class='SelectModel__container'>

          <header class='SelectModal__header'>
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            <div class='SelectModal__grid'>
              {getOptions()}
            </div>
          </section>

          <footer class='SelectModal__buttons'>
            {
              this.getButtons().map((button) => (
                <button style={{ float: button.position, [`margin-${button.position === 'left' ? 'right' : 'left'}`]: '8px' }} onClick={() => this.props.onButtonClick(button.key)}>{button.label}</button>
              ))
            }
          </footer>

        </article>

      </div>
    );
  }
}
