'use babel';

import store from '../store';

export const addFolder = (parentID, name) => {
  const client = store.getItem('workspace').client;
  return client.addFolder(null, parentID, name);
};

export const getObject = (ID) => {
  const client = store.getItem('workspace').client;
  return client.getObject(null, ID);
};

export const lookupObject = (parentDirID, dirName) => {
  const client = store.getItem('workspace').client;
  return client.lookupObject(null, parentDirID, dirName);
};

export const handleTextEditorChange = () => {
  store.changeItem('currentTextEditor', atom.workspace.getActiveTextEditor());
  atom.workspace.onDidChangeActiveTextEditor((editor) => {
    store.changeItem('currentTextEditor', editor);
  });
};
