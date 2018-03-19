'use babel';

import fs from 'fs';
import { Base64 } from 'js-base64';
import { getListObject_paginated } from './helpers';

const mimeTypes = require('../../../../js-contracts/js-node/mime_types');

class Workspace {
  constructor(client) {
    this.client = client;
    // console.log(client, 'Workspace');
  }

  /**
  * @typedef {Object} List
  * @prop {Object} objects
  * @prop {Object} parent
  */
  /**
   * get all list of files and directories
   *
   * @return {List}
  */
  getContentFromDir(ID) {
    const listObject_paginated = getListObject_paginated(this.client)(ID)
    return listObject_paginated;
  }

  /**
   * create file in DMP
   *
   * @param {string} parentID
   * @param {string} name
   * @param {string} extension
   * @param {string} path
   *
   * @return {void}
  */
  createFile(parentID, name, mime, path, fileContent) {
    return this.client.addObject(null, parentID, name, mime, fileContent);
  }

  /**
   * create folder in DMP
   *
   * @param {string} parentID
   * @param {string} name
   * @param {string} path
   *
   * @return {void}
  */
  createFolder(parentID, name, path) {
    return this.client.addFolder(null, parentID, name);
  }

  /**
   * rewrite content file
   *
   * @param {string} ID
   * @param {string} content
   *
   * @return {void}
  */
  writeFile(ID, content) {
    return this.client.writeObjectContent(null, ID, content);
  }

  /**
   * read content file
   *
   * @param {string} ID
   *
   * @return {void}
  */
  readFile(ID) {
    return this.client.readObjectContent(null, ID);
  }

  /**
   * delete either folder or file
   * @param {array} ids
   * @return {void}
  */
  deleteObject(ids) {
    return this.client.deleteObject(null, ids);
  }

  /**
   * read stdout.txt and stderr.txt files
   *
   * @param {string} parentID
   * @param {string} name
   *
   * @return {void}
  */
  lookupObject(parentID, name) {
    return this.client.lookupObject(null, parentID, name);
  }
}

export default Workspace;
