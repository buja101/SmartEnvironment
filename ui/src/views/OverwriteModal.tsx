import React = require('preact');
import { Component } from 'preact';

interface OverModalProps<T extends OverModalOption> {
  title: string;
  visible: boolean;
  text: string;

  onCancel(): void;
  onButtonClick(key: string): void;
  onYes(key1: string): void;

}

interface OverModalState {

}

export interface OverModalOption {
  title: string;
  text: string;
}

export default class OverModal<T extends OverModalOption> extends Component<OverModalProps<T>, OverModalState> {
  public render() {

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article class="AlertModel__container"> 
          <header class="SelectModal__header">
            <h3>{this.props.title}</h3>
            <a class='SelectModal__close close' onClick={() => this.props.onButtonClick('close')}>&times;</a>
          </header>

          <section class='SelectModel__content'>
            {this.props.text}
          </section>
          <footer class="alertFooter">
            <label for="modal_1" class="button dangerous" onClick={() => this.props.onButtonClick('close')}>
              No
            </label>
            <label for="modal_1" class="button buttonFloatRight buttonMarginRight" onClick={() => this.props.onYes('yes')}>
              Yes
            </label>
          </footer>
        </article>
      </div>
    );
  }
}
