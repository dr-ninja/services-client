import {HttpClient} from 'aurelia-fetch-client';

import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from './utils';
import {LocalStorageManager} from './local-storage-manager';
import {ClientFactory} from './client-factory';
import {BackupManager} from './backupManager';
import moment from 'moment';

@inject(HttpClient, Utils, LocalStorageManager, ClientFactory)
export class ApiClient {

  constructor(http, utils, localStorage, clientFactory) {
    this.utils = utils;
    this.localStorageMgr = localStorage;
    this.clientFactory = clientFactory;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.utils.domain);
    });

    this.http = http;
  }

  fetchClient(id) {
    return this.clientFactory.clientsList.length ? this.clientFactory.getClientById(id) : {};
  }

  fetchClients() {
    return new Promise((resolve, reject)=>{
      if (this.clientFactory.clientsList.length) {
        resolve(this.clientFactory.clientsList);
      } else {
        this.http.fetch('clients', {
          method: 'get',
          credentials: 'include'
        })
          .then(
            response => response.json().then(data => {
              let arr = [];
              for (let d of data.results) {
                if (d.birthday) {
                  d.birthday = moment(d.birthday).format('YYYY-MM-DD');
                }
                arr.push(new BackupManager(d));
              }
              this.clientFactory.clientsList = arr;
              resolve(this.clientFactory.clientsList);
            }),
            error => {reject(error);});
      }
    });
  }

  getBlankClient() {
    return new BackupManager({
      name: '',
      nif: null,
      phone: null,
      email: '',
      facebook: '',
      address: '',
      birthday: null,
      alert: false,
      alert_period: null
    });
  }

  newClient(client) {
    return new Promise((resolve, reject)=>{
      return this.http.fetch('clients', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(client.data).replace(/""/ig, null)
      })
        .then(response => {
          response.json().then(data => {
            this.clientFactory.addNewClient(client, data.id);
            resolve(data.id);
          });
        }, error => {
          this.localStorageMgr.store('auth', false);
          throw error;
        });
    });
  }

  editClient(client) {
    return this.http.fetch('clients/' + client.data.id, {
      method: 'put',
      credentials: 'include',
      header: {},
      body: JSON.stringify(client.data).replace(/""/ig, null)
    })
      .then(response => {
        client.saveChanges();
      }, error => {
        this.localStorageMgr.store('auth', false);
        throw error;
      });
  }

  deleteClient(client) {
    return this.http.fetch('clients/' + client.data.id, {
      method: 'delete',
      credentials: 'include',
      header: {}
    })
      .then(response => {
        this.clientFactory.deleteClient(client);
      }, error => {
        this.localStorageMgr.store('auth', false);
        throw error;
      });
  }
}
