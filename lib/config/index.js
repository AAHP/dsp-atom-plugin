'use babel';

export const port = 443;
export const serverPcas = '/pcas';

export const clientName = 'dmp-atom';
export const redirectURL = 'atom://plugin';
export const nonce = '12345';

export const link = `/idp/auth?client_id=${clientName}&redirect_uri=${redirectURL}&response_type=id_token&scope=openid+profile+email+groups+offline_access&state=state1&nonce=${nonce}`;

export const pathTriftWorkspace = '/api/v2/workspace';
export const pathTriftTasks = '/api/v2/tasks';
export const perPage = 20;
