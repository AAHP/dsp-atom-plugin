'use babel';

import electron from 'electron';
import url from 'url';
import path from 'path';
const BrowserWindow = electron.BrowserWindow || electron.remote.BrowserWindow;
const ipcMain = electron.ipcMain || electron.remote.ipcMain;

function electronPrompt(options, parentWindow) {
    return new Promise((resolve, reject) => {
      const id = `${new Date().getTime()}-${Math.random()}`;
      const opts = Object.assign({
        title: 'Prompt',
        label: 'Please input a value:',
        alwaysOnTop: false,
        value: null,
        type: 'input',
        selectOptions: null,
        buttons: {
          ok: 'Add',
          cancel: 'Cancel',
        },
        background: '#FFF',
        color: '#000',
      }, options || {});

      if (opts.type == 'select' && (opts.selectOptions === null || typeof(opts.selectOptions) !== 'object')) {
        return reject(new Error('"selectOptions" must be an object'));
      }

      let promptWindow = new BrowserWindow({
        width: 370, height: 130,
        resizable: true,
        parent: parentWindow ? (parentWindow instanceof BrowserWindow) : null,
        skipTaskbar: true,
        alwaysOnTop: opts.alwaysOnTop,
        useContentSize: true,
        modal: parentWindow ? true : false,
        title: opts.title,
      });

      promptWindow.setMenu(null);

      const getOptionsListener = (event) => {
        event.returnValue = JSON.stringify(opts);
      };

      const postDataListener = (event, value) => {
        resolve(value);
        event.returnValue = null;
        cleanup();
      };

      const unresponsiveListener = () => {
        reject(new Error('Window was unresponsive'));
        cleanup();
      };

      const errorListener = (event, message) => {
        reject(new Error(message));
        event.returnValue = null;
        cleanup();
      };

      const cleanup = () => {
        if (promptWindow) {
          promptWindow.close();
          promptWindow = null;
        }
      };

      ipcMain.on('prompt-get-options:' + id, getOptionsListener);
      ipcMain.on('prompt-post-data:' + id, postDataListener);
      ipcMain.on('prompt-error:' + id, errorListener);
      promptWindow.on('unresponsive', unresponsiveListener);

      promptWindow.on('closed', () => {
        ipcMain.removeListener('prompt-get-options:' + id, getOptionsListener);
        ipcMain.removeListener('prompt-post-data:' + id, postDataListener);
        ipcMain.removeListener('prompt-error:' + id, postDataListener);
        resolve(null);
      });

      const promptUrl = url.format({
        protocol: 'file',
        slashes: true,
        pathname: path.join(__dirname, 'prompt.html'),
        hash: id,
      });

      promptWindow.loadURL(promptUrl);
    });
}

module.exports = electronPrompt;