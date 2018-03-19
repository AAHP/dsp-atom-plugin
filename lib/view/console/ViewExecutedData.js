'use babel';

import { Base64 } from 'js-base64';
import { CompositeDisposable, Emitter } from 'atom';
import Loader from '../Loader';
import {
  CONSOLE_EXECUTED_DATA_URI,
  CONSOLE_EXECUTED_DATA_ERROR_URI,
  CONSOLE_EXECUTED_DATA_TITLE,
  CONSOLE_EXECUTED_DATA_ERROR_TITLE,
  status,
} from '../../constants';

let errInstance = null;
let instance = null;

export default class ViewExecutedData {

  constructor(isError) {
    if (isError && !errInstance) {
      errInstance = this;
    } else if (!isError && !instance) {
      instance = this;
    }

    this.isErrorConsole = isError;
    this.element = document.createElement('div');
    this.element.classList.add('tool-panel', 'view-executed-data');

    this.loader = Loader();

    this.disposables = new CompositeDisposable();
    this.emitter = new Emitter();
    return isError ? errInstance : instance;
  }

  getTitle() {
    return this.isErrorConsole ? CONSOLE_EXECUTED_DATA_ERROR_TITLE : CONSOLE_EXECUTED_DATA_TITLE;
  }

  getURI() {
    return this.isErrorConsole ? CONSOLE_EXECUTED_DATA_ERROR_URI : CONSOLE_EXECUTED_DATA_URI;
  }

  getDefaultLocation() {
    return 'bottom';
  }

  getAllowedLocations() {
    return ['right', 'bottom'];
  }

  isPermanentDockItem() {
    return false;
  }

  showLoader() {
    this.element.appendChild(this.loader);
  }

  hideLoader() {
    if (this.loader.parentElement) {
      this.loader.parentElement.removeChild(this.loader);
    }
  }

  clearConsole() {
    this.element.innerHTML = '';
  }

  outputResult(statusMessage, data, type) {
    switch (statusMessage) {
      case status.SUCCESS: {
        this.element.innerHTML = `
           <pre class="success-msg">${data}</pre>
         ` ;
        type === 'update' ? this.element.scrollTop = this.element.scrollHeight : null;
      }
        break;
      case status.ERROR:
        this.element.innerHTML = `
           <pre class="error-msg">${data}</pre>
         ` ;
         break;
       case status.CANCEL:
         this.element.innerHTML = `
            <h3>Script have been canceled</h3>
          `;
          break;
    }
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
