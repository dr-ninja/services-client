import {inject} from 'aurelia-framework';
import {ApiClient} from './api-client';


@inject(ApiClient)
export class Home {
  heading = 'Home';
  clients = [];

  constructor(api, Cookie) {
    this.api = api;
  }

  activate() {
  }

  getAllClients() {
    this.api.fetchClients().then(data => {this.clients = data.results;},
    error => {});
  }

  newClient() {
    this.api.newClient().then(data => {console.log(data);});
  }
}
