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
      this.apiClient.editClient(this.client).then(data => {console.log('SUCCESS');});
    } else {
      this.apiClient.newClient(this.client).then(data => {console.log('SUCCESS');});
    }
  }

  canDeactivate() {
    if (this.client) {
      this.client.undoChanges();
    }
  }

}
