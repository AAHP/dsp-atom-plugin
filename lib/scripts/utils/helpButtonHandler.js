'use babel';

import { getHost } from './api';
import { notifyWarning } from './notification';
import services from './../services';

const handleHelpButtonClick = () => {
  services.checkStatusSession().then(
    res => atom.workspace.open(`${getHost()}/docs/dmp-sdk-python-docs/`),
    err => notifyWarning('You must be authorized to view this page'),
  );
};

export default handleHelpButtonClick;
