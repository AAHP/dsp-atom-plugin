'use babel';

import CustomPrompt from './Prompt';
import emitter from './../Emitter';
import store from '../scripts/store';
import { atomErrorHandler } from '../scripts/utils/handlers';
import auth from '../scripts/utils/auth';
import {
  buttonDeleteSessionHandler,
  changeEnvironmentHandler,
  createZipHandler,
} from '../scripts/utils';
import runProject from './../scripts/utils/runProject';
import handleCancelScriptClick from './../scripts/utils/cancelScript';
import handleHelpButtonClick from './../scripts/utils/helpButtonHandler';
import {
  CANCEL_SCRIPT_EXEC_FAIL,
  CANCEL_SCRIPT_EXEC_RUN,
  CANCEL_SCRIPT_EXEC_SUCCESS,
  CLS_ENV_SELECT,
  CLS_HIDDEN,
  CLS_WORK_DIR_SELECT,
  CONTROL_BUTTONS,
  DEAFULT_WINDOW_BACKGROUND_COLOR,
  DEAFULT_WINDOW_TEXT_COLOR,
  ENV_LIST,
  ENV_SELECTED_KEY,
  WORK_DIRECTORIES,
  SCRIPT_STATUS_CHANGE,
  SCRIPT_EXEC_READY,
  SCRIPT_EXEC_START,
  SCRIPT_EXEC_RUN,
  SCRIPT_EXEC_SUCCESS,
  SCRIPT_EXEC_FAIL,
  CONNECTION_STATUS_CHANGE,
  SERVICES_CONNECTING,
  SERVICES_CONNECTED,
  SERVICES_DISCONNECTED,
} from './../constants';

const removeElementById = (id) => {
    const elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}


export default class Toolbar {

  constructor(serializedState) {
    if (!atom.config.get(ENV_LIST)) {
      atom.config.set(ENV_LIST, []);
    };

    this.element = document.createElement('div');
    this.element.classList.add('toolbar', 'topToolbar');

    this.selectContainer = document.createElement('div');
    this.selectContainer.classList.add('selectContainer');

    this.buttonsContainer = document.createElement('div');
    this.buttonsContainer.classList.add('buttonsContainer');

    // this.createWorkDirectorySelect();
    this.createButton('addEnv', '+', 'button add-env', 'Add new Environment');
    this.createButton('removeEnv', '-', 'button remove-env', 'Remove Environment');
    this.createControlButtons();
    this.initializeListeners();

    this.element.appendChild(this.selectContainer);
    this.element.appendChild(this.buttonsContainer);
    this.createEnvSelect('envId');
    this.updateDependentButtonStatus();
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement(content) {
    return this.element;
  }

  getTreeViewBackgroundColor() {
    const elem = document.getElementsByClassName('tool-panel')[0];
    if (elem) {
      const elementStyle = window.getComputedStyle(elem, null);
      return elementStyle.backgroundColor;
    }
    return DEAFULT_WINDOW_BACKGROUND_COLOR;
  }

  getTreeViewTitleColor() {
    const elem = document.getElementsByClassName('tab active')[0];
    if (elem) {
      const elementStyle = window.getComputedStyle(elem, null);
      return elementStyle.color;
    }
    return DEAFULT_WINDOW_TEXT_COLOR;
  }
  createEnvSelect(id) {
    const container = document.createElement('div');
    const select = document.createElement('select');

    select.addEventListener('change', (e) => {
      const newEnvironment = e.target.value;
      if (!atom.config.get('token')) {
        atom.config.set(ENV_SELECTED_KEY, newEnvironment);
        this.updateDependentButtonStatus();
      } else if (atom.config.get('token')) {
        changeEnvironmentHandler(newEnvironment);
      }

    });
    const list = atom.config.get(ENV_LIST) || [];
    // if environment is one, set it as current environment
    if (list.length === 1) {
      atom.config.set(ENV_SELECTED_KEY, list[0]);
    }
    list.unshift('Please select Environment...');

    list.forEach((env, ind) => {
      const option = document.createElement('option');
      if (ind === 0) {
        option.value = '';
        option.disabled = true;
        option.text = list.length === 1 ? 'Please create Environment...' : env;
        option.selected = true;
      } else {
        option.value = env;
        option.text = env;
        option.selected = (atom.config.get(ENV_SELECTED_KEY) === env);
      }
      select.appendChild(option);

    });
    select.id = id;
    container.id = 'selectContainerId';
    container.classList.add(CLS_ENV_SELECT);
    container.appendChild(select);

    const childEle = this.selectContainer.firstChild;
    this.selectContainer.insertBefore(container, childEle);
  }

  showAddEnvWindow() {
    CustomPrompt({
      title: 'Add new environment',
      label: 'URL:',
      value: '',
      inputAttrs: {
        type: 'url',
      },
      background: this.getTreeViewBackgroundColor(),
      color: this.getTreeViewTitleColor(),
      type: 'input',
    })
    .then((source) => {
      if (source) {
        this.addNewEnvironment(source);
      }
    })
    .catch(atomErrorHandler);
  }

  addNewEnvironment(source) {
    const list = atom.config.get(ENV_LIST);
    if (list.indexOf(source) === -1) {
      removeElementById('selectContainerId');
      atom.config.set(ENV_LIST, list.concat([source]));
      this.createEnvSelect('envId');
      this.updateDependentButtonStatus();
    }
  }

  showRemoveWindow() {
    CustomPrompt({
      title: 'Remove environment',
      label: `Are you sure you want to remove "${atom.config.get(ENV_SELECTED_KEY)}"?`,
      value: '',
      type: 'text',
      background: this.getTreeViewBackgroundColor(),
      color: this.getTreeViewTitleColor(),
      buttons: {
        ok: 'Remove',
        cancel: 'Cancel',
      },
    })
    .then((source) => {
      if (source) {
        this.removeEnvironment();
      }
    })
    .catch(atomErrorHandler);
  }

  removeEnvironment() {
    removeElementById('selectContainerId');
    const list = atom.config.get(ENV_LIST);
    const selected = atom.config.get(ENV_SELECTED_KEY);
    const newList = list.filter(item => item !== selected);
    atom.config.set(ENV_LIST, newList);
    atom.config.set(ENV_SELECTED_KEY, '');

    this.createEnvSelect('envId');
    this.updateDependentButtonStatus();
  }

  getPluginVersion() {
    const plugin = atom.packages.loadedPackages['dmp-atom-plugin'];
    return plugin.metadata.version;
  }

  createWorkDirectorySelect() {
    const container = document.createElement('div');
    const select = document.createElement('select');
    WORK_DIRECTORIES.forEach((dir) => {
      const option = document.createElement('option');
      option.value = dir.path;
      option.text = dir.name;
      select.appendChild(option);
    });
    container.classList.add(CLS_WORK_DIR_SELECT);
    container.appendChild(select);
    this.selectContainer.appendChild(container);
  }

  updateDependentButtonStatus() {
    const disabled = !atom.config.get(ENV_SELECTED_KEY);
    this.removeEnvButton.disabled = disabled;
    this.connectButton.disabled = disabled;
  }

  createControlButtons() {
    const pluginVersion = `plugin version ${this.getPluginVersion()}`;
    CONTROL_BUTTONS.forEach((button) => {
      this[`${button.id}Button`] = document.createElement('button');
      this[`${button.id}Button`].type = 'button';
      this[`${button.id}Button`].textContent = button.title;
      this[`${button.id}Button`].className = button.className;
      this[`${button.id}Button`].title = `${button.hint} \n ${button.id == 'help' ? pluginVersion : ''}`;
      this[`${button.container}Container`].appendChild(this[`${button.id}Button`]);
    });
  }

  createButton(id, text, className, hint) {
    this[`${id}Button`] = document.createElement('button');
    this[`${id}Button`].type = 'button';
    this[`${id}Button`].textContent = text;
    this[`${id}Button`].className = className;
    this[`${id}Button`].title = hint;
    this.selectContainer.appendChild(this[`${id}Button`]);
  }

  _onScriptExecStatusChange(status) {
    switch (status) {
      case SCRIPT_EXEC_READY:
        this.runProjectButton.classList.remove(CLS_HIDDEN);
        this.runProjectButton.removeAttribute('disabled');
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        break;
      case SCRIPT_EXEC_START:
        this.runProjectButton.classList.remove(CLS_HIDDEN);
        this.runProjectButton.setAttribute('disabled', true);
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        break;
      case SCRIPT_EXEC_RUN:
        this.runProjectButton.classList.add(CLS_HIDDEN);
        this.runProjectButton.removeAttribute('disabled');
        this.cancelScriptButton.classList.remove(CLS_HIDDEN);
        this.cancelScriptButton.removeAttribute('disabled');
        break;
      case SCRIPT_EXEC_SUCCESS:
      case SCRIPT_EXEC_FAIL:
        this.runProjectButton.classList.remove(CLS_HIDDEN);
        this.runProjectButton.removeAttribute('disabled');
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        break;
      case CANCEL_SCRIPT_EXEC_RUN:
        this.cancelScriptButton.setAttribute('disabled', true);
        break;
      case CANCEL_SCRIPT_EXEC_FAIL:
      case CANCEL_SCRIPT_EXEC_SUCCESS:
        this.cancelScriptButton.setAttribute('disabled', false);
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        break;
      default:
        break;
    }
  }

  _onConnectionStatusChange(status) {
    switch (status) {
      case SERVICES_CONNECTING:
        this.connectButton.setAttribute('disabled', true);
        this.connectButton.classList.remove(CLS_HIDDEN);
        this.disconnectButton.classList.add(CLS_HIDDEN);
        this.runProjectButton.classList.add(CLS_HIDDEN);
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        break;
      case SERVICES_CONNECTED:
        this.connectButton.classList.add(CLS_HIDDEN);
        this.disconnectButton.classList.remove(CLS_HIDDEN);
        break;
      case SERVICES_DISCONNECTED:
        this.connectButton.removeAttribute('disabled');
        this.connectButton.classList.remove(CLS_HIDDEN);
        this.runProjectButton.classList.add(CLS_HIDDEN);
        this.cancelScriptButton.classList.add(CLS_HIDDEN);
        this.disconnectButton.classList.add(CLS_HIDDEN);
        break;
      default:
        break;
    }
  }

  initializeListeners() {
    emitter.on(SCRIPT_STATUS_CHANGE, this._onScriptExecStatusChange.bind(this));
    emitter.on(CONNECTION_STATUS_CHANGE, this._onConnectionStatusChange.bind(this));

    this.connectButton.addEventListener('click', auth);
    this.disconnectButton.addEventListener('click', buttonDeleteSessionHandler);
    this.runProjectButton.addEventListener('click', runProject);
    this.cancelScriptButton.addEventListener('click', handleCancelScriptClick);
    this.addEnvButton.addEventListener('click', this.showAddEnvWindow.bind(this));
    this.removeEnvButton.addEventListener('click', this.showRemoveWindow.bind(this));
    this.helpButton.addEventListener('click', handleHelpButtonClick);
  }
}
