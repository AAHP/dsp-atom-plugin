'use babel';

import fs from 'fs';
import nodepath from 'path';
import mkdirp from 'mkdirp';
import touch from 'touch';
import store from '../store';
import { loadWatchTree } from './loadWatchTree';
import { getPluginPath } from './../utils';
import emitter from '../../Emitter';
import { STATUS_MESSAGE, typesMessages } from '../../constants';

export const createElement = (path, item) => {
  const fullPath = nodepath.join(path, item.name);

  if (fs.existsSync(fullPath)) {
    return;
  }

  const strg = store.getItem('paths');
  strg.set(fullPath, item);

  if (item.objectType === 1) {
    mkdirp.sync(fullPath);
  } else if (item.objectType === 2) {
    touch.sync(fullPath);
  }
};

export const loadInitialTree = (list) => {
  const rootPath = getPluginPath();
  const rootPathWorkspace = nodepath.join(rootPath, list.name);
  let nestedpath = `${rootPathWorkspace}`;

  emitter.emit(STATUS_MESSAGE, {
    sender: 'atom',
    type: typesMessages.info,
    message: 'Initializing work directory',
  });

  createElement(rootPath, list);

  const createNestedElements = (list) => {
    (list.objects || []).map(item => {
      createElement(nestedpath, item);
      if (item.objects && item.objects.length) {
        nestedpath = nodepath.join(nestedpath, item.name);
        return createNestedElements(item);
      }
    });
  }

  createNestedElements(list);
  loadWatchTree();

  emitter.emit(STATUS_MESSAGE, {
    sender: 'atom',
    type: typesMessages.info,
    message: 'Work directory has been initialized',
  });
};
