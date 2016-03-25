import {inject} from 'aurelia-framework';
import {Api} from 'api';

@inject(Api)
export class Client {

  apiConfig = {
    objType: 'serviceType',
    resourceName: 'stypes'
  };

  constructor(api) {
    this.api = api;
  }

  activate(data) {
    if (data && data.id && data.id !== 'new') {
      this.item = this.api.fetchRow(data.id, this.apiConfig);
    } else {
      this.item = this.api.getBlankItem(this.apiConfig);
    }
  }

  save() {
    if (this.item.data.id) {
      this.api.editItem(this.item, this.apiConfig).then(data => {console.log('Edit stype', data);}, error => {console.log(error.statusText, error.status);});
    } else {
      this.api.newItem(this.item, this.apiConfig).then(data => {console.log('New stype with id: ' + data);}, error => {console.log(error.statusText, error.status);});
    }
  }

  canDeactivate() {
    this.item.undoChanges();
  }

}
