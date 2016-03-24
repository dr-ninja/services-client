import {BackupManager} from 'backup-manager';
import moment from 'moment';

export class Factory {

  clientsList = [];

  objHolderMapper = {
    client: { arrayName: 'clientsList', blankObj: {name: '', nif: null, phone: null, email: '', facebook: '', address: '', birthday: null, alert: false, alert_period: null} }
  };

  constructor() {}

  getIdxById(objType, id) {
    return this.getList(objType).findIndex(el => {return el.data.id == id;});
  }

  getItemById(objType, id) {
    return this.getList(objType).find(el => {return el.data.id == id;});
  }

  addNewItem(objType, item, id) {
    item.data.id = id;
    item.saveChanges();
    this.getList(objType).unshift(item);
  }

  deleteItem(objType, item) {
    let idx = this.getIdxById(objType, item.data.id);
    if (idx > -1) {
      this.getList(objType).splice(idx, 1);
    }
  }

  fillList(objType, data) {
    let arr = [];
    for (let d of data) {
      this.formatFields(d);
      arr.push(new BackupManager(d));
    }
    this[this.objHolderMapper[objType].arrayName] = arr;
    return this.getList(objType);
  }

  formatFields(row) {
    if (row.birthday) {
      row.birthday = moment(row.birthday).format('YYYY-MM-DD');
    }
  }

  arrHasLength(objType) {
    return !!this.getList(objType).length;
  }

  getList(objType) {
    return this[this.objHolderMapper[objType].arrayName];
  }

  getNewItem(objType) {
    return new BackupManager(this.objHolderMapper[objType].blankObj);
  }
}
