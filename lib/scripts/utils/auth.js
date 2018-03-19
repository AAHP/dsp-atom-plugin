'use babel';

import { remote } from 'electron';
import emitter from '../../Emitter';
import services from '../services';
import { link } from '../../config';
import { STATUS_MESSAGE, typesMessages } from '../../constants';
import getConnection from './getConnection';
import { atomErrorHandler } from './handlers';
import { getHost } from './api';

/**
 * authenticate with PCAS
 *
 * @return {void}
*/
const auth = () => {
  let window = new remote.BrowserWindow({ width: 1000, height: 800 });
  window.on('closed', () => window = null);
  const source = `${getHost()}${link}`;
  window.loadURL(source);

  // window.webContents.openDevTools(); // if needed chrome DevTools in auth window

  const ua = window.webContents.getUserAgent();
  atom.config.set('ua', ua);

  window.webContents.on('did-get-redirect-request', (...params) => {
    if (!params[7].location.length) {
      return;
    }

    let IDtoken = params[7].location[0].match(/&id_token=(.*)&state=state1/);
    if (IDtoken) {
      services.getSessionKey(IDtoken[1])
        .then((res) => {
          window.hide();
          emitter.emit(STATUS_MESSAGE, {
            sender: 'atom',
            type: typesMessages.info,
            message: 'Congratulations! You are authorized',
          });
          atom.config.set('token', res.data.ID);
          getConnection();
        })
        .catch(atomErrorHandler);
    }
  });
};

export default auth;
