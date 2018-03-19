'use babel';

import { ENV_SELECTED_KEY } from '../../constants';

export const getHost = () => (atom.config.get(ENV_SELECTED_KEY));
