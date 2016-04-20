import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from 'utils';
import {Factory} from 'factory';
import {LocalStorageManager} from 'local-storage-manager';

@inject(HttpClient, Router, Factory, Utils, LocalStorageManager)
export class AccountApi {

  constructor(http, router, factory, utils, localStorage) {
    this.utils = utils;
    this.factory = factory;
    this.localStorageMgr = localStorage;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.utils.domain)
    });

    this.http = http;
    this.router = router;
  }

  logOut() {
   /* this.localStorageMgr.store('auth', '');
    this.utils.isAuthenticated = false;
    this.router.navigate('login');*/
  }
  
  resetFactoryData() {
    this.factory.reset();
  }

  /*logIn(username, password) {
    this.http.fetch('/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
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
  }*/

  fetchCals() {
    return this.http.fetch("/cals", {method: 'get',headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token')}})
      .then(
        response => response.json().then(data => {
         return data;
        })
      );

  }

}
