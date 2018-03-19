'use babel';

import os from 'os';

import emitter from './../../Emitter';
import { loadInitialTree } from './createTree';
import { atomErrorHandler } from './handlers';
import { addFolder, getObject, lookupObject } from './workspace';
import { SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_READY } from '../../constants';

const prepareWorkspace = async () => {
  const username = os.userInfo().username;
  let atomDir = null;
  let userDir = null;

  const workspaceDir = await getObject('');

  try {
    atomDir = await lookupObject(null, workspaceDir.ID, 'Atom');
    await getObject(atomDir.ID);
  } catch (e) {
    atomDir = await addFolder(workspaceDir.ID, 'Atom');
  } finally {
    workspaceDir.objects = [atomDir];
  }

  try {
    userDir = await lookupObject(null, atomDir.ID, username);
    await getObject(userDir.ID);
  } catch (e) {
    userDir = await addFolder(atomDir.ID, username);
  } finally {
    workspaceDir.objects[0].objects = [userDir];
    loadInitialTree(workspaceDir);
    emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_READY);
  }
};

export default prepareWorkspace;
