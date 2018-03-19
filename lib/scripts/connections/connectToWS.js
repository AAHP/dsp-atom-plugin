'use babel';

import WebSocket from 'websocket';
import emitter from '../../Emitter';
import { WS_CONNECTED, ENV_SELECTED_KEY, WS_STATUS_CHANGE } from '../../constants';
import { atomErrorHandler } from '../utils/handlers';
import { getHost } from '../utils/api';
import {
  getHeaders, onConnectedFailed, onClose, onMessage,
} from './helpers';

const connectedToWS = () => {
  return new Promise((res, rej) => {
    const WebSocketClient = WebSocket.client;
    const ws = new WebSocketClient();
    const url = getHost().split('//')[1];
    ws.connect(`wss://${url}/ws/`, '', getHost(), getHeaders());

    ws.on('connectFailed', (err) => {
      onConnectedFailed(err);
      rej(err);
    });

    ws.on('connect', (connection) => {
      console.log('WebSocket Client Connected');
      connection.on('error', atomErrorHandler);
      connection.on('close', onClose);
      connection.on('message', onMessage);
      emitter.on(WS_STATUS_CHANGE, (status) => {
        console.log('try to close WebSocket');
        connection.close();
      });
      res();
    });
  });
};

export default connectedToWS;
