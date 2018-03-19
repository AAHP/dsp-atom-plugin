'use babel';

import { STATUS_MESSAGE, typesMessages } from '../../constants';
import emitter from '../../Emitter';

export const atomErrorHandler = (err) => {
  emitter.emit(STATUS_MESSAGE, {
    sender: 'atom',
    type: typesMessages.error,
    message: err.cause || err.message,
  });
};
export const atomSuccessHandler = (msg) => {
  emitter.emit(STATUS_MESSAGE, {
    sender: 'atom',
    type: typesMessages.info,
    message: msg,
  });
};
