'use babel';

export const LOCKED_OBJECT_ERROR_CODE = 2426880;
export const NOT_FOUND_OBJECT_ERROR_CODE = 2490112;
export const NOT_FOUND_FOLDER = 2425088;

export const DEAFULT_WINDOW_TEXT_COLOR = '#000';
export const DEAFULT_WINDOW_BACKGROUND_COLOR = '#ddd';

export const SCRIPT_DIR_CREATED = 'SCRIPT_DIR_CREATED';
export const SCRIPT_FILE_CREATED = 'SCRIPT_FILE_CREATED';
export const SCRIPT_FILE_CHANGED = 'SCRIPT_FILE_CHANGED';

export const CLS_ENV_SELECT = 'env-select';
export const CLS_HIDDEN = 'hidden';
export const CLS_WORK_DIR_SELECT = 'work-dir-select';

export const CONSOLE_VIEW_MESSAGES_URI = 'atom://console-view-messages';
export const CONSOLE_VIEW_MESSAGES_TITLE = 'Console messages';

export const CONSOLE_EXECUTED_DATA_URI = 'atom://console-view-executed-data';
export const CONSOLE_EXECUTED_DATA_ERROR_URI = 'atom://console-view-executed-data-error';
export const CONSOLE_EXECUTED_DATA_TITLE = 'STDOUT.TXT';
export const CONSOLE_EXECUTED_DATA_ERROR_TITLE = 'ERROR.TXT';

export const ENV_SELECTED_KEY = 'selected_env';
export const ENV_LIST = 'list_env';

export const STATUS_MESSAGE = 'status-message';

export const SCRIPT_STATUS_CHANGE = 'SCRIPT_STATUS_CHANGE';
export const SCRIPT_EXEC_READY = 'SCRIPT_EXEC_READY';
export const SCRIPT_EXEC_START = 'SCRIPT_EXEC_START';
export const SCRIPT_EXEC_RUN = 'SCRIPT_EXEC_RUN';
export const SCRIPT_EXEC_SUCCESS = 'SCRIPT_EXEC_SUCCESS';
export const SCRIPT_EXEC_FAIL = 'SCRIPT_EXEC_FAIL';

export const CANCEL_SCRIPT_EXEC_RUN = 'CANCEL_SCRIPT_EXEC_RUN';
export const CANCEL_SCRIPT_EXEC_SUCCESS = 'CANCEL_SCRIPT_EXEC_SUCCESS';
export const CANCEL_SCRIPT_EXEC_FAIL = 'CANCEL_SCRIPT_EXEC_FAIL';

export const CONNECTION_STATUS_CHANGE = 'CONNECTION_STATUS_CHANGE';
export const SERVICES_CONNECTING = 'SERVICES_CONNECTING';
export const SERVICES_CONNECTED = 'SERVICES_CONNECTED';
export const SERVICES_DISCONNECTED = 'SERVICES_DISCONNECTED';

export const ZIP_STATUS_CHANGE = 'ZIP_STATUS_CHANGE';
export const ZIP_CREATE_START = 'ZIP_CREATE_START';
export const ZIP_CREATE_END = 'ZIP_CREATE_END';
export const ZIP_CREATE_ERROR = 'ZIP_CREATE_ERROR';

export const WS_STATUS_CHANGE = 'WS_STATUS_CHANGE';
export const WS_DISCONNECT = 'WS_DISCONNECT';

export const DEFAULT_WINDOW_WIDTH = 1000;
export const DEFAULT_WINDOW_HEIGHT = 800;

export const wsMsg = {
  MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_STARTED: 49,
  MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_SUCCESS: 45,
  MESSAGE_TYPE_SCRIPT_PYTHON_EXECUTE_FAIL: 46,
  MESSAGE_TYPE_FILE_IO_CREATED: 10,
  MESSAGE_TYPE_FILE_IO_COMPLETED: 12,
  MESSAGE_TYPE_FILE_IO_ERROR: 13,
  MESSAGE_TYPE_FILE_IO_DELETED: 14,
  MESSAGE_TYPE_FILE_IO_UPDATED: 15,
};

export const typesMessages = {
  error: 'error',
  info: 'info',
};

export const status = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
  CANCEL: 'cancel',
};

export const taskStatus = {
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
};

export const ext = {
  py: 'text/x-python',
  r: 'text/x-r',
  sql: 'application/sql',
};

export const colorLoader = '#70c542';

export const notificationType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const CONTROL_BUTTONS = [
    {
      id: 'disconnect',
      title: 'Disconnect',
      hint: 'Disconnect',
      className: 'control-button connection-button hidden',
      container: 'select',
    },
    {
      id: 'connect',
      title: 'Connect',
      hint: 'Connect',
      className: 'control-button connection-button',
      container: 'select',
    },
    {
      id: 'runProject',
      title: 'Run project',
      hint: 'Run project',
      className: 'control-button run-button hidden',
      container: 'buttons',
    },
    {
      id: 'cancelScript',
      title: 'Cancel script',
      hint: 'Cancel executed script',
      className: 'control-button cancel-button hidden',
      container: 'buttons',
    },
    {
      id: 'help',
      title: '?',
      hint: 'Help information',
      className: 'control-button help-button',
      container: 'buttons',
    },
];

export const WORK_DIRECTORIES = [
    {
        name: 'dir1',
        path: '/dir1',
    },
    {
        name: 'dir2',
        path: '/dir2',
    },
    {
        name: 'dir3',
        path: '/dir3',
    }
];

export const TIME_FOR_CHECK_STATUS_TASK = 10000;
