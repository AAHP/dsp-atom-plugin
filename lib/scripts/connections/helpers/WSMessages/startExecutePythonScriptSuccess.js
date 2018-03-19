'use babel';

import emitter from '../../../../Emitter';
import store from '../../../store';
import { outputResult } from './helpers';
import { STATUS_MESSAGE, typesMessages, status, NOT_FOUND_FOLDER } from '../../../../constants';

const startExecutePythonScriptSuccess = (viewExecutedData, file) => {
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
        outputResult(viewExecutedData, list, 'stdout.txt', status.SUCCESS);
      })
      .catch((err) => {
        if (err && err.code !== NOT_FOUND_FOLDER) {
          emitter.emit(STATUS_MESSAGE, {
            sender: 'atom',
            type: typesMessages.error,
            message: err.cause || err.message,
          });
        } else {
          console.log('NOT_FOUND_FOLDER startExecutePythonScriptFail', runnedFile, err);
        }
      });
};

export default startExecutePythonScriptSuccess;
