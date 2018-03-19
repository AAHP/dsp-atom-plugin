'use babel';

import store from '../../../store';
import { createElement } from '../../../utils/createTree';

const createIOFile = (data) => {
  const paths = store.getItem('paths');
  for (const [key, value] of paths.entries()) {
    if (value.ID === data.parentVfsID) {
      createElement(key, {
        name: data.fileName,
        objectType: data.objectType,
        parentID: data.parentVfsID,
        ID: data.vfsID,
        status: data.status,
      });
    }
  }
};

export default createIOFile;
