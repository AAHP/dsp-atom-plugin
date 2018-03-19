'use babel';

import fs from 'fs';
import os from 'os';
import nodepath from 'path';
import pathParse from 'path-parse';
import chokidar from 'chokidar';

import store from '../store';
import { ext } from '../../constants';
import emitter from '../../Emitter';
import { atomErrorHandler } from './handlers';
import { getPluginPath } from './../utils';
import {
  SCRIPT_DIR_CREATED,
  SCRIPT_FILE_CREATED,
  SCRIPT_FILE_CHANGED,
  CONNECTION_STATUS_CHANGE,
  SERVICES_DISCONNECTED,
} from './../../constants';

const mimeTypes = require('../../../js-contracts/js-node/mime_types');

const username = os.userInfo().username;
const rootPath = getPluginPath();
const workspaceRoot = nodepath.join(rootPath, 'Workspace', 'Atom', username);

const encodeZipFile = (parentDirID, fileName, filepath) => {
  fs.readFile(filepath, {}, function(err, data) {
    if (err) {
      throw err;
    }

    store
      .getItem('workspace')
      .createFile(parentDirID, fileName, mimeTypes.MIME_ZIP, filepath, data)
      .then(
        file => {
          store.getItem('paths').set(filepath, file);
          emitter.emit(SCRIPT_FILE_CREATED, { file, path: filepath });
        },
        atomErrorHandler,
      );
  });
}

export const loadWatchTree = () => {
  return new Promise((res, rej) => {
    const watcher = chokidar.watch(workspaceRoot, {
      // TODO: remove ignored when project will be ready
      // ignored: /[\/\\]\./,
      // ignored: /(README.md|\.git|js-contracts|_project|.gitignore|data.js|package.json|yarn.lock|node_modules|keymaps|lib|menus|spec|styles)/,
      persistent: true,
    });

    emitter.on(CONNECTION_STATUS_CHANGE, (status) => {
      if (status === SERVICES_DISCONNECTED) {
        watcher.close();
      }
    });

    watcher
      .on('addDir', (path) => {
        const paths = store.getItem('paths');

        if (paths.has(path)) {
          return;
        }

        const pluginPath = getPluginPath();
        const parentDirRoute = nodepath.join(pluginPath, 'Workspace', 'Atom', username);
        const parentDir = paths && paths.get(`${parentDirRoute}`);

        if (!parentDir || !Object.keys(parentDir).length) {
          return;
        }

        const name = pathParse(path).base;
        store
          .getItem('workspace')
          .createFolder(parentDir.ID, name, path)
          .then(
            dir => {
              emitter.emit(SCRIPT_DIR_CREATED, { dir, path });
              paths.set(path, dir);
            },
            atomErrorHandler,
          );
      })
      /**
       *
      */
      .on('add', (path) => {
        const paths = store.getItem('paths');

        if (paths.has(path)) {
          return;
        }

        const parsed = pathParse(path);
        const fileName = parsed.base;
        const fileExtension = parsed.ext.slice(1);
        const parentDirRoute = parsed.dir;
        const parentDir = paths && paths.get(`${parentDirRoute}`);

        if (!parentDir || !Object.keys(parentDir).length) {
          return;
        }

        if (fileExtension === 'zip') {
          encodeZipFile(parentDir.ID, fileName, path);

        } else {
          store
            .getItem('workspace')
            .createFile(parentDir.ID, fileName, fileExtension, path)
            .then(
              file => {
                emitter.emit(SCRIPT_FILE_CREATED, { file, path });
                paths.set(path, file);
              },
              atomErrorHandler,
            );
        }
      })
      /**
       *
      */
      .on('change', (path) => {
        const item = store.getItem('paths').get(path);
        const content = fs.readFileSync(path);

        if (item) {
          store.getItem('workspace').writeFile(item.ID, content).then(
            res => {
              emitter.emit(SCRIPT_FILE_CHANGED, { path });
            },
            atomErrorHandler,
          );
        }
        // console.log(`File ${path} has been changed`);
      })
      .on('unlink', (path) => {
        // console.log(`File ${path} has been removed`);
      })
      .on('unlinkDir', (path) => {
        // console.log(`Directory ${path} has been removed`);
      })
      .on('error', (error) => {
        // console.log(`Error happened ${error.message}`);
        atomErrorHandler(error);
        return rej();
      })
      .on('ready', () => {
        console.log('Initial scan complete. Ready for changes. From chokidar watcher');
        return res();
      });
  });
};
