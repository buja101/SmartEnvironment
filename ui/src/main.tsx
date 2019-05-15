import * as React from 'preact';
import { newApp } from './app';
import Page from './views/Page';

function main() {
  Blockly.HSV_VALUE = 0.9;

  const app = newApp();
  const pageDiv = getElementByIdSafe('page');

  if (!pageDiv.parentElement) { return; }

  React.render(<Page app={app} />, pageDiv.parentElement, pageDiv);

  function getElementByIdSafe(id: string): HTMLElement {
    const element = document.getElementById(id);

    if (!element) { throw new Error(`Could not find element with "${id}"`); }

    return element;
  }
}
 

main();
