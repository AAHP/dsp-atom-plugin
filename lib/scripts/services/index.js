'use babel';

import Axios from 'axios';
import { serverPcas } from '../../config';
import { ENV_SELECTED_KEY } from '../../constants';
import { getHost } from '../utils/api';

const getPcasLink = () => `${getHost()}${serverPcas}`;

export default {

  getSessionKey(token) {
    return Axios({
      url: getPcasLink() + "/session",
      method: "POST",
      data: JSON.stringify({ "idToken": token }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  },

  retainCurrentSession() {
    return Axios.get(`${getPcasLink()}/session/current`, {
      retain: true,
    });
  },

  checkStatusSession() {
    return Axios.get(`${getPcasLink()}/session/current`);
  },

  deleteCurrentSession() {
    return Axios.delete(`${getPcasLink()}/session/current`);
  },
};
