'use babel';

import { CompositeDisposable, Emitter } from 'atom';
import {
  CONSOLE_VIEW_MESSAGES_URI, CONSOLE_VIEW_MESSAGES_TITLE,
} from '../../constants';

let instance = null;

export default class ViewMessages {

  constructor(state) {
    if (!instance) {
      instance = this;
    }

    this.element = document.createElement('ul');
    this.element.classList.add('tool-panel', 'console');

    this.disposables = new CompositeDisposable();
    this.emitter = new Emitter();
    return instance;
  }

  getTitle() {
    return CONSOLE_VIEW_MESSAGES_TITLE;
  }

  getURI() {
    return CONSOLE_VIEW_MESSAGES_URI;
  }

  getDefaultLocation() {
    return 'bottom';
  }

  getAllowedLocations() {
    return ['right', 'bottom'];
  }

  isPermanentDockItem() {
    return true;
  }

  addNewItem({ sender, type, message }) {
    if (!message) {
      return;
    }
    const item = document.createElement('li');

    item.classList.add('item-message', sender, type);
    item.textContent = `${sender}: ${message}`;

    this.element.appendChild(item);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {

  }

  // Tear down any state and detach
  destroy() {
    this.disposables.dispose();
    this.element.remove();
    this.emitter.emit('did-destroy');
  }

  getElement() {
    return this.element;
  }
}
