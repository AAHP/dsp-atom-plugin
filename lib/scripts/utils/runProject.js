'use babel';

import fs from 'fs';
import os from 'os';
import nodepath from 'path';
import mkdirp from 'mkdirp';
import archiver from 'archiver';
import pathParse from 'path-parse';
import { Directory, File } from 'atom';

import store from './../store';
import emitter from './../../Emitter';
import { getPluginPath } from './../utils';
import { atomErrorHandler } from './handlers';
import callbacks from './../connections/helpers/WSMessages';
import {
  taskStatus,
  typesMessages,
  CONSOLE_EXECUTED_DATA_URI,
  CONSOLE_EXECUTED_DATA_ERROR_URI,
  SCRIPT_DIR_CREATED,
  SCRIPT_EXEC_START,
  SCRIPT_EXEC_RUN,
  SCRIPT_FILE_CREATED,
  SCRIPT_FILE_CHANGED,
  SCRIPT_STATUS_CHANGE,
  STATUS_MESSAGE,
  TIME_FOR_CHECK_STATUS_TASK,
  ZIP_STATUS_CHANGE,
  ZIP_CREATE_ERROR,
} from './../../constants';

const verifyPythonScript = (fileName) => {
  if (!fileName) {
    return false;
  }
  const spl = fileName.split('.');
  return spl[spl.length - 1] === 'py';
};

const getStatusTask = () => {
  const runnedFile = store.getItem('runnedFile');

  if (!runnedFile.taskID) {
    return;
  }

  const viewExecutedDataError = store.getItem('viewExecutedDataError');
  const viewExecutedDataSuccess = store.getItem('viewExecutedDataSuccess');
  store.getItem('tasks').getTask(runnedFile.taskID).then(
      (res) => {
        if (res.taskStatus === taskStatus.FAILURE || res.taskStatus === taskStatus.SUCCESS) {
          callbacks.startExecutePythonScriptSuccess(viewExecutedDataSuccess, runnedFile);
          callbacks.startExecutePythonScriptFail(viewExecutedDataError, runnedFile);
          return;
        }
        setTimeout(() => getStatusTask(), TIME_FOR_CHECK_STATUS_TASK);
      },
      atomErrorHandler,
    );
};

const runScript = (pathToFile, pathToDirectory, entryPoint) => {
  const paths = store.getItem('paths');
  let item = paths && paths.get(`${pathToFile}`);
  let timeout;

  if (!item) {
    return timeout = setTimeout(() => runScript(pathToFile, pathToDirectory, entryPoint), 50);
  }

  clearTimeout(timeout);
  store.getItem('tasks').runScript(item.ID, item.parentID, entryPoint).then(
      (taskID) => {
        store.changeItem('runnedFile', { ...item, taskID, pathToFile, pathToDirectory, entryPoint, isCanceled: false });
        atom.workspace.open(CONSOLE_EXECUTED_DATA_URI);
        atom.workspace.open(CONSOLE_EXECUTED_DATA_ERROR_URI);
        emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_RUN);
        getStatusTask();
      },
      atomErrorHandler,
    );
};

const runAsFile = (uri, fileName) => {
  const writeScriptContentToCreatedFile = (pathToFile, pathToDirectory, data) => {
    fs.writeFile(pathToFile, data, (err, data) => {
      if (err) {
        throw err;
      }
      emitter.on(SCRIPT_FILE_CHANGED, ({ path }) => {
        if (path === pathToFile) {
          runScript(pathToFile, pathToDirectory);
        }
      });
    });
  };

  const readScriptContent = (uri, pathToFile, pathToDirectory) => {
    fs.readFile(uri, (err, data) => {
      if (err) {
        throw err;
      }
      writeScriptContentToCreatedFile(pathToFile, pathToDirectory, data);
    });
  };

  const createNewFile = (uri, fileName, pathToDirectory) => {
    const pathToFile = nodepath.join(pathToDirectory, fileName);
    const file = new File(pathToFile, false);
    file.create().then(
      res => {
        emitter.on(SCRIPT_FILE_CREATED, ({ file, path }) => {
          if (path === pathToFile) {
            readScriptContent(uri, pathToFile, pathToDirectory);
          }
        });
      },
      atomErrorHandler,
    );
  };

  const username = os.userInfo().username;
  const dirName = +new Date();
  const pathToDirectory = nodepath.join(getPluginPath(), 'Workspace', 'Atom', username, `${dirName}`);
  const directory = new Directory(pathToDirectory, false);
  emitter.emit(SCRIPT_STATUS_CHANGE, SCRIPT_EXEC_START);
  directory
    .create()
    .then(
      res => {
        emitter.on(SCRIPT_DIR_CREATED, ({ dir, path }) => {
          if (path === pathToDirectory) {
            createNewFile(uri, fileName, pathToDirectory);
          }
        });
      },
      atomErrorHandler,
    );
};

const runAsZip = (uri) => {
  // emitter.emit(ZIP_STATUS_CHANGE, { type: ZIP_CREATE_START });
  const pathToSelectedFolder = store.getItem('lastSelectedPath');

  if (!uri.includes(pathToSelectedFolder)) {
    return emitter.emit(STATUS_MESSAGE, {
      sender: 'atom',
      type: typesMessages.error,
      message: 'Current text editor is not in the selected directory',
    });
  }

  const entryPoint = uri.slice(pathToSelectedFolder.length + 1, uri.length);
  const username = os.userInfo().username;
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
                  runScript(path, workspaceRoot, entryPoint);
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

// main

const runProject = () => {
  const textEditor = store.getItem('currentTextEditor');
  const selectedPathType = store.getItem('lastSelectedPathType');

  if (!textEditor) {
    return console.log('no text editor');
  }

  const fileName = textEditor.getFileName();
  const uri = textEditor.getURI();
  const isPythonScript = verifyPythonScript(fileName);

  if (!isPythonScript) {
    return emitter.emit(STATUS_MESSAGE, {
      sender: 'atom',
      type: typesMessages.error,
      message: 'You are trying to execute a non .py script. The script was cancelled',
    });
  }

  // make sure '/${plugin_path}/Workspace/Atom/{username} does exist';
  const rootPath = getPluginPath();
  const username = os.userInfo().username;
  const fullPath = nodepath.join(rootPath, 'Workspace', 'Atom', username);
  mkdirp(fullPath, (err) => {
    if (err) {
      return atomErrorHandler(err);
    }
    selectedPathType === 'directory' ? runAsZip(uri) : runAsFile(uri, fileName);
  });
};

export default runProject;
