'use babel';

import emitter from '../../../../Emitter';
import store from '../../../store';
import { STATUS_MESSAGE, typesMessages, NOT_FOUND_OBJECT_ERROR_CODE } from '../../../../constants';
import cleanWorkspaceDirectory from './../../../utils/cleanWorkspaceDirectory';
import { atomErrorHandler } from './../../../utils/handlers';
import { CLIENT_RENEG_LIMIT } from 'tls';

export const outputResult = (viewExecutedData, list, fileName, status) => {
  list.objects.map((item) => {
    if (item.name === fileName) {
      const pathes = store.getItem('paths');
      store.getItem('workspace')
        .readFile(item.ID)
          .then(
            (data) => {
              viewExecutedData.outputResult(status, data);
              cleanWorkspaceDirectory();
            },
            (err) => {
              //if file was removed we don't show msg
              if (err && err.code !== NOT_FOUND_OBJECT_ERROR_CODE) {
                atomErrorHandler(err);
              }
            },
          );
    }
  });
};
