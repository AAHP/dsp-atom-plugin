'use babel';

import store from './../store';
import emitter from './../../Emitter';
import cleanWorkspaceDirectory from './cleanWorkspaceDirectory';
import { atomErrorHandler } from './handlers';
import { status } from './../../constants';
import {
  CANCEL_SCRIPT_EXEC_RUN,
  CANCEL_SCRIPT_EXEC_SUCCESS,
  CANCEL_SCRIPT_EXEC_FAIL,
  SCRIPT_STATUS_CHANGE
} from './../../constants';

const handleCancelScriptClick = () => {
  const task = store.getItem('runnedFile');

  if (!Object.keys(task).length || !task.taskID) {
    return;
  }
  emitter.emit(SCRIPT_STATUS_CHANGE, CANCEL_SCRIPT_EXEC_RUN);
  store
    .getItem('tasks')
    .cancelScript(task.taskID)
    .then(
      res => {
        // in other case stdout.txt would be empty
        // store.changeItem('runnedFile', { ...task, isCanceled: true });
        // store.getItem('viewExecutedData').outputResult(status.CANCEL);
        cleanWorkspaceDirectory();
        emitter.emit(SCRIPT_STATUS_CHANGE, CANCEL_SCRIPT_EXEC_SUCCESS);
      },
      (error) => {
        atomErrorHandler(error);
        emitter.emit(SCRIPT_STATUS_CHANGE, CANCEL_SCRIPT_EXEC_FAIL);
      },
    );
};

export default handleCancelScriptClick;
