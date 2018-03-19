'use babel';

import emitter from '../../../../Emitter';
import store from '../../../store';
import { outputResult } from './helpers';
import { STATUS_MESSAGE, typesMessages, status, NOT_FOUND_FOLDER } from '../../../../constants';

const startExecutePythonScriptFail = (viewExecutedData, file) => {
  const runnedFile = store.getItem('runnedFile');

  if (!viewExecutedData) {
    return;
  }

  viewExecutedData.hideLoader();
  if (runnedFile.isCanceled) {
    store.changeItem('runnedFile', {});
    return;
  }

  store.getItem('workspace')
    .getContentFromDir(file.parentID)
      .then((list) => {
        outputResult(viewExecutedData, list, 'error.txt', status.ERROR)
      })
      .catch((err) => {
        if (err && err.code !== NOT_FOUND_FOLDER) {
          emitter.emit(STATUS_MESSAGE, {
            sender: 'atom',
            type: typesMessages.error,
            message: err.cause || err.message,
          });
        }
      });
};

export default startExecutePythonScriptFail;
