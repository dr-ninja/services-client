import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from './utils';
import {LocalStorageManager} from './local-storage-manager';

@inject(HttpClient, Router, Utils, LocalStorageManager)
export class Welcome {
  username = 'daniel';
  password = 'reis';

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

  submit() {
    let postData = new FormData();
    postData.append( 'username', this.username );
    postData.append( 'password', this.password );
    return this.http.fetch('login', {
      method: 'post',
      credentials: 'include',
      body: postData
    })
    .then(response => {
      response.json().then(data => {
        this.utils.isAuthenticated = true;
        this.localStorageMgr.store('auth', true);


        this.utils.username = data.username;
        this.router.navigate('home');
      });
    })

    .then(error => {
      this.utils.isAuthenticated = false;
      this.utils.username = '';
    });
  }

  canDeactivate() {}

  attached() {}
}
