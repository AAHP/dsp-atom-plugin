'use babel';

import { atomErrorHandler } from './handlers';
import store from './../store';

let readingFile = false;

const updateView = async (data) => {
  const file = store.getItem('runnedFile');
  const { parentVfsID, vfsID } = data.content.header;

  if (parentVfsID !== file.parentID || readingFile) {
    return;
  }

  readingFile = true;
  const view = store.getItem('viewExecutedDataSuccess');
  try {
    const content = await store.getItem('workspace').readFile(vfsID);
    view && view.outputResult('success', content, 'update');
  } catch (e) {
    // Clear console if error reading file
    view && view.outputResult('success', '');
  } finally {
    readingFile = false;
  }
};

export default updateView;
