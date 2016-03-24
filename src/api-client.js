import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from 'utils';
import {LocalStorageManager} from 'local-storage-manager';
import {ClientFactory} from 'client-factory';
import {BackupManager} from 'backup-manager';
import {Router} from 'aurelia-router';
import moment from 'moment';

@inject(HttpClient, Utils, Router, LocalStorageManager, ClientFactory)
export class ApiClient {

  constructor(http, utils, router, localStorage, clientFactory) {
    this.utils = utils;
    this.localStorageMgr = localStorage;
    this.clientFactory = clientFactory;
    this.router = router;

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

  fetchClients() {
    return new Promise((resolve, reject)=>{
      if (this.clientFactory.clientsList.length) {
        resolve(this.clientFactory.clientsList);
      } else {
        this.http.fetch('clients', {
          method: 'get',
          headers: {
            Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')
          }
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
          }))
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
      }
    });
  }

  newClient(client) {
    return new Promise((resolve, reject)=>{
      this.http.fetch('clients', {
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')
        },
        body: JSON.stringify(client.data).replace(/""/ig, null)
      })
      .then(response => {
        response.json().then(data => {this.clientFactory.addNewClient(client, data.id); resolve(data);});
      })
      .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }

  editClient(client) {
    return new Promise((resolve, reject)=>{
      this.http.fetch('clients/' + client.data.id, {
        method: 'put',
        headers: {
          Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')
        },
        body: JSON.stringify(client.data).replace(/""/ig, null)
      })

        .then(response => {
          response.json().then(data => {client.saveChanges(); resolve(data);});
        })
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }

  deleteClient(client) {
    return new Promise((resolve, reject)=>{
      this.http.fetch('clients/' + client.data.id, {
        method: 'delete',
        headers: {
          Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')
        }
      })

        .then(response => {
          response.json().then(data => {this.clientFactory.deleteClient(client); resolve(data);});
        })
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }
}
