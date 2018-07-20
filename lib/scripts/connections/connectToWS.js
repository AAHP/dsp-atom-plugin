'use babel';

import WebSocket from 'websocket';
import emitter from '../../Emitter';
import { WS_CONNECTED, ENV_SELECTED_KEY, WS_STATUS_CHANGE } from '../../constants';
import { atomErrorHandler } from '../utils/handlers';
import { getHost } from '../utils/api';
import { getHeaders, onConnectedFailed, onClose, onMessage } from './helpers';
import Deferred from '../utils/Deferred';
import { URL } from 'url';

const url = getHost().split('//')[1];

let redirects = 0;
const maxRedirects = 5;

const deferred = new Deferred();
const ws = new WebSocket.client();

const connect = url => {
	console.log(`WS connecting to ${url}`);
	ws.connect(
		url,
		'',
		getHost(),
		getHeaders()
	);
};

ws.on('connectFailed', err => {
	console.log('ws connection error:', ws, ws._req);
	onConnectedFailed(err);
	deferred.reject(err);
});

ws.on('connect', connection => {
	console.log('WebSocket Client Connected');
	connection.on('error', atomErrorHandler);
	connection.on('close', onClose);
	connection.on('message', onMessage);
	emitter.on(WS_STATUS_CHANGE, status => {
		console.log('Trying to close WebSocket');
		connection.close();
	});
	deferred.resolve();
});

ws.on('httpResponse', (response, client) => {
	const { statusCode, headers } = response;
	
	if (statusCode === 301) {
		redirects++;

		if (redirects < maxRedirects) {
      const oldUrl = ws.url;
      const newUrl = new URL(headers.location, oldUrl.href);
      newUrl.protocol = oldUrl.protocol;
			console.log(`WS redirect to ${oldUrl.href} -> ${newUrl.href}`);
			connect(newUrl.href);
		} else {
			client.failHandshake('WS redirects limit reached.');
		}
	} else {
		client.failHandshake(
			`Websocket connect failed with statusCode ${statusCode}. Headers: ${JSON.stringify(headers)}`
		);
	}
});

const connectedToWS = () => {
	connect(`wss://${url}/ws`);
	return deferred;
};

export default connectedToWS;
