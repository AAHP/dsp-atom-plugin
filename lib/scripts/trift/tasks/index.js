'use babel';

const pythonTypes = require('../../../../js-contracts/js-node/connector-python_types');

class Tasks {
  constructor(client) {
    this.client = client;
  }

  /**
   * run script in DMP
   *
   * @param {string} ID
   * @param {string} parentID
   * @param {string} entryPoint for zip
   *
   * @return {void}
  */
  runScript(ID, parentID, entryPoint) {
    const taskName = pythonTypes.TASK_NAME;
    const taskPayload = (
      JSON.stringify({
        scriptID: ID,
        workingDirID: parentID,
        envVars: {},
        entryPoint: entryPoint,
      }));

    // const taskComment = ''; // optional argument
    return this.client.sendTask(null, taskName, taskPayload);
  }

  /**
   * cancel script in DMP
   *
   * @param {string} taskID
   *
   * @return {void}
  */
  cancelScript(taskID) {
    return this.client.cancelTask(null, taskID);
  }

  /**
   * get task in DMP
   *
   * @param {string} taskID
   *
   * @return {void}
  */
  getTask(taskID) {
    return this.client.getTask(null, taskID);
  }
}

export default Tasks;
