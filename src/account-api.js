import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from 'utils';
import {LocalStorageManager} from 'local-storage-manager';

@inject(HttpClient, Router, Utils, LocalStorageManager)
export class AccountApi {

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

  logOut() {
    this.localStorageMgr.store('auth', '');
  }


  logIn(loginData) {
    this.http.fetch('login', {
      method: 'post',
      body: loginData
    })
      .then(response => {
        response.json().then(data => {
          this.utils.isAuthenticated = true;
          this.localStorageMgr.store('auth', data.token);
          this.router.navigate('clients');
        });
      }, error => {
        console.log(error);
        this.utils.isAuthenticated = false;
        this.localStorageMgr.store('auth', '');
      });
  }
}
