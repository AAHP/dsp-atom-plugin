'use babel';

class Store {
  constructor() {
    this.storage = {};
  }

  setNewItem(newItems) {
    this.storage = {
      ...this.storage,
      ...newItems,
    };
  }

  getItem(item) {
    return this.storage[item];
  }

  getAllStorage() {
    return this.storage;
  }

  changeItem(name, newData) {
    this.storage = {
      ...this.storage,
      [name]: newData,
    };
  }

  removeItem(item) {
    const { [item]: removed, ...rest } = this.storage;
    this.storage = rest;
  }
}

export default new Store();
