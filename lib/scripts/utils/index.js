'use babel';

import { Directory, File } from 'atom';
import fs from 'fs';
import os from 'os';
import nodepath from 'path';
import pathParse from 'path-parse';
import archiver from 'archiver';
import store from '../store';
import services from '../services';
import callbacks from '../connections/helpers/WSMessages';
import emitter from './../../Emitter';
import {
  CONNECTION_STATUS_CHANGE,
  CONSOLE_EXECUTED_DATA_URI,
  CONSOLE_EXECUTED_DATA_ERROR_URI,
  ENV_SELECTED_KEY,
  SCRIPT_DIR_CREATED,
  SERVICES_DISCONNECTED,
  status,
  taskStatus,
  TIME_FOR_CHECK_STATUS_TASK,
  WS_DISCONNECT,
  WS_STATUS_CHANGE,
  ZIP_CREATE_ERROR,
  ZIP_CREATE_START,
  ZIP_CREATE_END,
  ZIP_STATUS_CHANGE,
  SCRIPT_FILE_CREATED,
  SCRIPT_FILE_CHANGED,
} from '../../constants';
import { atomSuccessHandler, atomErrorHandler } from './handlers';
import removeDirWorkspace from './removeDirWorkspace';

export const buttonDeleteSessionHandler = () => {
  services.deleteCurrentSession()
    .then(res => {
      emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_DISCONNECTED);
      emitter.emit(WS_STATUS_CHANGE, WS_DISCONNECT);
      atom.config.set('token', '');
      removeDirWorkspace();
    })
    .catch(atomErrorHandler);
};

export const changeEnvironmentHandler = (newEnvironment) => {
  services.deleteCurrentSession()
    .then(res => {
      emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_DISCONNECTED);
      emitter.emit(WS_STATUS_CHANGE, WS_DISCONNECT);
      atom.config.set('token', '');
      atom.config.set(ENV_SELECTED_KEY, newEnvironment);
      removeDirWorkspace();
    })
    .catch(atomErrorHandler);
};

export const createZipHandler = (entryPoint) => {
  emitter.emit(ZIP_STATUS_CHANGE, { type: ZIP_CREATE_START });
  const pathToSelectedFolder = store.getItem('lastSelectedPath');
  const username = os.userInfo().username;
  // const [rootPath] = atom.project.getPaths();
  const rootPath = getPluginPath();
  const dirName = +new Date();
  const workspacePath = nodepath.join('Workspace', 'Atom', username, `${dirName}`);
  const workspaceRoot = nodepath.join(rootPath, workspacePath);
  const archiveName = pathParse(pathToSelectedFolder).base;
  const directory = new Directory(workspaceRoot, false);
  const zipFilePath = nodepath.join(workspaceRoot, `${archiveName}.zip`);
  directory
    .create()
    .then(
      res => {
        emitter.on(SCRIPT_DIR_CREATED, ({ dir, path }) => {
          if (path === workspaceRoot) {
            const output = fs.createWriteStream(zipFilePath);
            const archive = archiver('zip', {
              zlib: { level: 0 },
            });
            output.on('close', () => {
              emitter.on(SCRIPT_FILE_CREATED, ({ file, path }) => {
                if (path === zipFilePath) {
                  emitter.emit(ZIP_STATUS_CHANGE,
                    {
                      type: ZIP_CREATE_END,
                      payload: { parentDir: workspaceRoot, pathToFile: path, entryPoint },
                    }
                  );
                }
              });
            });

            archive.on('error', (err) => {
              emitter.emit(ZIP_STATUS_CHANGE, { type: ZIP_CREATE_ERROR });
            });

            archive.pipe(output);
            archive.directory(pathToSelectedFolder, false);
            archive.finalize();
          }
        });
      },
      atomErrorHandler,
    );

};

export const getPluginPath = () => {
  const plugin = atom.packages.loadedPackages['dsp-atom-plugin'];
  return (plugin && plugin.path) || atom.configDirPath;
};

export const isRunningOnWin = os.platform().toLowerCase().startsWith('win');
