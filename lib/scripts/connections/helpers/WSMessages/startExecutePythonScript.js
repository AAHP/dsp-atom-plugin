'use babel';

import emitter from '../../../../Emitter';
import store from '../../../store';
import { STATUS_MESSAGE, typesMessages, status } from '../../../../constants';

const startExecutePythonScript = (viewExecutedDataSucces, viewExecutedDataError, file) => {
  if (!viewExecutedDataSucces || !viewExecutedDataError) {
    return;
  }

  viewExecutedDataSucces.clearConsole();
  viewExecutedDataSucces.showLoader();

  viewExecutedDataError.clearConsole();
  viewExecutedDataError.showLoader();

  emitter.emit(STATUS_MESSAGE, {
    sender: 'dmp',
    type: typesMessages.info,
    message: `Python script from file ${file.name} execute started`,
  });
};

export default startExecutePythonScript;
