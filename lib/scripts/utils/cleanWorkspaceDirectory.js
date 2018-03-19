'use babel';

import fs from 'fs';
import rimraf from 'rimraf';
import { atomErrorHandler } from './handlers';
import store from './../store';
import { LOCKED_OBJECT_ERROR_CODE } from '../../constants';

const removeOpenTextEditors = () => {
  const textEditors = atom.workspace.getTextEditors();

  textEditors.map(textEditor => {
    if (!fs.existsSync(textEditor.getPath())) {
      textEditor.destroy();
    }
  });
};

const removeDirWorkspace = path => {
  if (fs.existsSync(path)) {
    rimraf(path, {}, removeOpenTextEditors);
  }
};

const cleanWorkspaceDirectory = () => {
  const runnedFile = store.getItem('runnedFile');
  if (!runnedFile || !Object.keys(runnedFile).length) {
    return;
  }
  // to prevent double request for removing folder
  if (store.getItem('removedPath')) {
    return;
  }
  store.setNewItem({ removedPath: runnedFile.pathToDirectory });

  const directory = store.getItem('paths').get(`${runnedFile.pathToDirectory}`);
  store
    .getItem('workspace')
    .client.deleteObject(null, [directory.ID])
    .then(
      res => {
        removeDirWorkspace(runnedFile.pathToDirectory);
        store.changeItem('runnedFile', {});
        store.changeItem('removedPath', '');
      },
      (err) => {
        if (err && err.code === LOCKED_OBJECT_ERROR_CODE) {
          setTimeout(() => {
            store.changeItem('removedPath', '');
            cleanWorkspaceDirectory();
          }, 2000);
        } else {
          atomErrorHandler(err);
        }
      }
    );
};

export default cleanWorkspaceDirectory;
