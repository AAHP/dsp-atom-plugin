'use babel';

import { CompositeDisposable, Disposable } from 'atom';
import emitter from './Emitter';
import TopToolbar from './view/TopToolbar';
import ViewMessages from './view/console/ViewMessages';
import ViewExecutedData from './view/console/ViewExecutedData';
import store from './scripts/store';
import removeDirWorkspace from './scripts/utils/removeDirWorkspace';
import auth from './scripts/utils/auth';
import { registerHandleClickTreeView } from './scripts/utils/treeView';
import { handleTextEditorChange } from './scripts/utils/workspace';
import {
  CONSOLE_VIEW_MESSAGES_URI,
  CONSOLE_EXECUTED_DATA_URI,
  CONSOLE_EXECUTED_DATA_ERROR_URI,
  STATUS_MESSAGE,
} from './constants';

let subscriptions = null;

function activate(state) {
  let viewMessages;
  let viewExecutedDataSuccess;
  let viewExecutedDataError;

  removeDirWorkspace();
  registerHandleClickTreeView();
  handleTextEditorChange();

  const topToolbar = atom.workspace.addHeaderPanel({
    item: new TopToolbar(),
    visible: true,
  });

  subscriptions = new CompositeDisposable(
    atom.commands.add('atom-workspace', {
      'plugin:auth': () => auth(),
    }),
    atom.workspace.addOpener((uri) => {
      if (uri === CONSOLE_VIEW_MESSAGES_URI) {
        viewMessages = new ViewMessages();
        store.setNewItem({ viewMessages: viewMessages });
        return viewMessages;
      } else if (uri === CONSOLE_EXECUTED_DATA_URI) {
        viewExecutedDataSuccess = new ViewExecutedData();
        store.setNewItem({ viewExecutedDataSuccess: viewExecutedDataSuccess });
        return viewExecutedDataSuccess;
      } else if (uri === CONSOLE_EXECUTED_DATA_ERROR_URI) {
        viewExecutedDataError = new ViewExecutedData(true);
        store.setNewItem({ viewExecutedDataError: viewExecutedDataError });
        return viewExecutedDataError;
      }
    }),
    new Disposable(() => {
      atom.workspace.getActivePaneItem().forEach((item) => {
        if (item instanceof ViewConsole) {
          item.destroy();
        }
      });
    }),
  );

  // show console and topToolbar when plugin started
  topToolbar.show();
  atom.workspace.toggle(CONSOLE_VIEW_MESSAGES_URI);

  // callback for output process messages to console
  const outStatus = (data) => {
    viewMessages.addNewItem(data);
  };
  emitter.on(STATUS_MESSAGE, outStatus);
}

function deactivate() {
  subscriptions.dispose();
}

function serialize() {
  return {};
}

export {
  activate,
  deactivate,
  serialize,
};
