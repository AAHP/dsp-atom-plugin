'use babel';

import os from 'os';

import emitter from '../../Emitter';
import ws from '../connections/connectToWS';
import trift from '../connections/connectToTrift';
import Workspace from '../trift/workspace';
import Tasks from '../trift/tasks';
import store from '../store';
import services from '../services';
import removeDirWorkspace from './removeDirWorkspace';
import { pathTriftWorkspace, pathTriftTasks } from '../../config';
import { loadInitialTree } from './createTree';
import checkSession from './checkSession';
import { notifyError } from './notification';
import {
  typesMessages,
  SCRIPT_STATUS_CHANGE,
  SCRIPT_EXEC_READY,
  STATUS_MESSAGE,
  CONNECTION_STATUS_CHANGE,
  SERVICES_CONNECTING,
  SERVICES_CONNECTED,
  SERVICES_DISCONNECTED
} from '../../constants';
import { atomErrorHandler } from './handlers';
import { addFolder, getObject, lookupObject } from './workspace';

import prepareWorkspace from './prepareWorkspace';

const PublicDmpWorkspace = require('../../../js-contracts/js-node/PublicDmpWorkspace');
const PublicTaskBrokerService = require('../../../js-contracts/js-node/PublicTaskBrokerService');

/**
 * connect to WebSocket and to Trift
 *
 * @return {void}
*/
const getConnection = () => {
  emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_CONNECTING);
  emitter.emit(STATUS_MESSAGE, {
    sender: 'atom',
    type: typesMessages.info,
    message: 'Setting up connections service',
  });

  removeDirWorkspace();

  Promise.all([
    ws(),
    trift(pathTriftWorkspace, PublicDmpWorkspace),
    trift(pathTriftTasks, PublicTaskBrokerService),
  ])
    .then((res) => {
      emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_CONNECTED);
      emitter.emit(STATUS_MESSAGE, {
        sender: 'atom',
        type: typesMessages.info,
        message: 'Connection has been established',
      });
      const [ ws, clientWorkspace, clientTasks ] = res;
      // add to store new api
      store.setNewItem({
        paths: new Map(),
        runnedFile: {},
        workspace: new Workspace(clientWorkspace),
        tasks: new Tasks(clientTasks),
      });
    })
    .then(() => {
      // get all list with files and folders
      emitter.emit(STATUS_MESSAGE, {
        sender: 'atom',
        type: typesMessages.info,
        message: 'Getting work directory',
      });

      prepareWorkspace();

      // let atomFolder = {};
      // getObject('')
      //   .then((workspaceDir) => {
      //     lookupObject(null, workspaceDir.ID, 'Atom')
      //       .then(
      //         atomDir => getObject(atomDir.ID),
      //         err => addFolder(workspaceDir.ID, 'Atom'),
      //       )
      //       .then(atomDir => {
      //         workspaceDir.objects = [atomDir];
      //         atomFolder = { ...atomDir };
      //         return lookupObject(null, atomDir.ID, os.userInfo().username);
      //       })
      //       .then(
      //         userDir => getObject(userDir.ID),
      //         err => addFolder(atomFolder.ID, os.userInfo().username),
      //       )
      //       .then(lastDir => {
      //         workspaceDir.objects[0].objects = [lastDir];
      //       })
      //       .finally(data => {
      //         loadInitialTree(workspaceDir);
      //         emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_READY);
      //       });
      //     })
      //     .catch((err) => {
      //       checkSession();
      //       atomErrorHandler(err);
      //     });
    })
    .then(() => {
      services.retainCurrentSession()
        .then(res => console.log(res))
        .catch(atomErrorHandler);
    })
    .catch((err) => {
      checkSession();
      emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_DISCONNECTED);
      emitter.emit(STATUS_MESSAGE, {
        sender: 'atom',
        type: typesMessages.error,
        message: err.message,
      });
      atomErrorHandler(err);
      notifyError(`connected failed cause: ${err.message}`);
    });
};

export default getConnection;
