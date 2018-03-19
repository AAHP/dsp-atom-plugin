'use babel';

import auth from './auth';
import services from '../services';
import emitter from './../../Emitter';
import {
  CONNECTION_STATUS_CHANGE,
  SERVICES_CONNECTED,
  SERVICES_DISCONNECTED,
} from './../../constants';
import { notifyWarning, notifyError } from './notification';

const checkSession = (func = () => {}) => {
  services.checkStatusSession()
    .then(res => {
      emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_CONNECTED);
      func();
    })
    .catch((err) => {
      if (err && err.response && err.response.status === 401) {
        emitter.emit(CONNECTION_STATUS_CHANGE, SERVICES_DISCONNECTED);
      }
      if (err && !err.response) {
        console.error(err);
      }

    });
};

export default checkSession;
