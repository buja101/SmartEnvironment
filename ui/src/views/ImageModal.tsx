import React = require('preact');
import { Component } from 'preact';

interface ImageModalProps<T extends ImageModalOption> {
  title: string;
  visible: boolean;
  options: T[];

  onCancel(): void;
  onSelect(option: T): void;
}

interface ImageModalState {

}

export interface ImageModalOption {
  title: string;
  image: string;
  help: string;
}

export default class ImageModal<T extends ImageModalOption> extends Component<ImageModalProps<T>, ImageModalState> {
  public render() {
    const getOptions = () => (
      this.props.options.map((option) => (
        <div className='ImageModalOption'>
          {option.title}
          <img src={option.image} />
          <div className='ImageModalOptionButtonContainer'>
            <button onClick={() => this.props.onSelect(option)}>Select</button>
            <a class='icon-help-circled' style='color:#aaa' href={option.help}></a>
          </div>
        </div>
      ))
    );

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article>
          <header>
            <h3>{this.props.title}</h3>
          </header>

          <section class='content'>
            <div class='ImageModalOptionContainer'>
              {getOptions()}
            </div>
          </section>
          <footer>

          </footer>
        </article>
      </div>
    );
  }
}
