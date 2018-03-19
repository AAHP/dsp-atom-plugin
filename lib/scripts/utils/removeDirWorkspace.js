'use babel';

import fs from 'fs';
import nodepath from 'path';
import rimraf from 'rimraf';
import { getPluginPath } from './../utils';

const removeOpenTextEditors = () => {
  const textEditors = atom.workspace.getTextEditors();

  textEditors.map((textEditor) => {
    if (!fs.existsSync(textEditor.getPath())) {
      textEditor.destroy();
    }
  });
};

const removeDirWorkspace = () => {
  const rootPath = getPluginPath();
  const workspaceDirPath = nodepath.join(rootPath, 'Workspace');

  if (fs.existsSync(workspaceDirPath)) {
    rimraf(workspaceDirPath, {}, removeOpenTextEditors);
  }
};

export default removeDirWorkspace;
