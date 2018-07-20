'use babel';

import { Base64 } from 'js-base64';
import emitter from '../../../Emitter';
import store from '../../store';
import callbacks from './WSMessages';
import {
	CONNECTION_STATUS_CHANGE,
	SERVICES_DISCONNECTED,
	STATUS_MESSAGE,
	SCRIPT_STATUS_CHANGE,
	SCRIPT_EXEC_SUCCESS,
	SCRIPT_EXEC_FAIL,
	typesMessages,
	wsMsg,
} from '../../../constants';
import { notifySuccess, notifyError, notifyInfo } from '../../utils/notification';
import { atomErrorHandler } from '../../utils/handlers';
import updateView from './../../utils/updateView';

const messagesTypes = require('../../../../js-contracts/js-node/dmp_messages_types');

let readingFile = false;

const decode = s => {
	let z;

	try {
		z = JSON.parse(Base64.decode(s));
	} catch (err) {
		console.error('cannot decode WS message', s);
	}

	if (typeof z === 'string') {
		console.warn('WS message content decoded to string. Is it doubly-encoded?');
		return decodeByteString(z);
	}

	return z;
};

export const getHeaders = () => ({
	Cookie: `X-Auth-Token=${atom.config.get('token')}`,
	'User-Agent': atom.config.get('ua'),
});

export const onConnectedFailed = error => {
	emitter.emit(STATUS_MESSAGE, {
		sender: 'atom',
		type: typesMessages.error,
		message: error.message,
	});
};

export const onClose = () => {
	emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_DISCONNECTED);
	emitter.emit(STATUS_MESSAGE, {
		sender: 'atom',
		type: typesMessages.info,
		message: 'WS connection was closed',
	});
};

const executedScriptResult = (viewExecutedDataSuccess, viewExecutedDataError, file) => {
	callbacks.startExecutePythonScriptSuccess(viewExecutedDataSuccess, file);
	callbacks.startExecutePythonScriptFail(viewExecutedDataError, file);
};

export const onMessage = e => {
	const parsedData = JSON.parse(e.utf8Data);
	if (parsedData.encodedContent === null) return;

	parsedData.content = decode(parsedData.encodedContent);
	delete parsedData.encodedContent;

	emitter.emit(STATUS_MESSAGE, {
		sender: 'dmp',
		type: typesMessages.info,
		message: parsedData.content.text,
	});

	// TODO: in future use eventEmitter from atom API

	const file = store.getItem('runnedFile');
	const viewExecutedDataSuccess = store.getItem('viewExecutedDataSuccess');
	const viewExecutedDataError = store.getItem('viewExecutedDataError');

	switch (parsedData.type) {
		case wsMsg.MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_STARTED: {
			if (file.ID === parsedData.content.script.vfsID) {
				callbacks.startExecutePythonScript(viewExecutedDataSuccess, viewExecutedDataError, file);
			}
			break;
		}
		case wsMsg.MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_SUCCESS: {
			if (file.ID === parsedData.content.script.vfsID) {
				emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_SUCCESS);
				executedScriptResult(viewExecutedDataSuccess, viewExecutedDataError, file);
			}
			break;
		}
		case wsMsg.MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_FAIL: {
			if (file.ID === parsedData.content.script.vfsID) {
				emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_FAIL);
				executedScriptResult(viewExecutedDataSuccess, viewExecutedDataError, file);
			}
			break;
		}
		case wsMsg.MESSAGE_TYPE_FILE_IO_CREATED:
			callbacks.createIOFile(parsedData.content.header);
			console.log(10, parsedData);
			break;
		case wsMsg.MESSAGE_TYPE_FILE_IO_COMPLETED:
			console.log(12, parsedData);
			break;
		case wsMsg.MESSAGE_TYPE_FILE_IO_DELETED:
			console.log(14, parsedData);
			break;
		case wsMsg.MESSAGE_TYPE_FILE_IO_UPDATED: {
			updateView(parsedData);
			break;
		}
		default:
			return;
	}
};
