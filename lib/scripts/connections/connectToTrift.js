'use babel';

import Thrift from 'thrift';
import { port } from '../../config';
import { getHeaders } from './helpers'
import { getHost } from '../utils/api';
import { atomErrorHandler } from '../utils/handlers';

const connectedToTrift = (path, ws, name) => {
  return new Promise((res, rej) => {
    const transport = Thrift.TBufferedTransport;
    const protocol = Thrift.TJSONProtocol;
    const host = getHost().split('//')[1];
    const connection = Thrift.createHttpConnection(
      host,
      port,
      {
        https: true,
        path,
        headers: getHeaders(),
        transport,
        protocol,
      },
    );

    connection.on('error', (err) => {
      rej(err.message);
      atomErrorHandler(err);
    });
    connection.on('message', (data) => {
      console.log('message trift', data);
    });
    return res(Thrift.createHttpClient(ws, connection));
  });
};

export default connectedToTrift;
