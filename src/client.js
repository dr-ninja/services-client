import {inject} from 'aurelia-framework';
import {ApiClient} from 'api-client';

@inject(ApiClient)
export class Client {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  activate(data) {
    if (data && data.id && data.id !== 'new') {
      this.client = this.apiClient.fetchClient(data.id);
    } else {
      this.client = this.apiClient.getBlankClient();
    }
  }

  save() {
    if (this.client.data.id) {
      this.apiClient.editClient(this.client).then(data => {console.log('Edit client', data);}, error => {console.log(error.statusText, error.status);});
    } else {
      this.apiClient.newClient(this.client).then(data => {console.log('New client with id: ' + data);}, error => {console.log(error.statusText, error.status);});
    }
  }

  canDeactivate() {
    this.client.undoChanges();
  }

}
