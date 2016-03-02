import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from './utils';
import {LocalStorageManager} from './local-storage-manager';

@inject(HttpClient, Router, Utils, LocalStorageManager)
export class ApiClient {

  constructor(http, router, utils, localStorage) {
    this.utils = utils;
    this.localStorageMgr = localStorage;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.utils.domain);
    });

    this.http = http;
    this.router = router;
  }

  fetchClients() {
    return this.http.fetch('clients', {
      method: 'get',
      credentials: 'include'
    })
      .then(
        response => response.json(),
        error => {throw error;});
  }

  newClient() {
    return this.http.fetch('clients', {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify({
        name: 'test',
        nif: 210444444,
        phone: 91121231231,
        email: 'test@mail.pt',
        facebook: 'facebook.com/client'
      })
    })
      .then(response => {
        response.json().then(data => {
          return data;
        });
      }, error => {
        this.localStorageMgr.store('auth', false);
        throw error;
      });
  }

}
