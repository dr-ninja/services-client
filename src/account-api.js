import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Factory} from 'factory';
import {LocalStorageManager} from 'local-storage-manager';
import config from 'authConfig';

@inject(HttpClient, Router, Factory, LocalStorageManager, config)
export class AccountApi {

  constructor(http, router, factory, localStorage, config) {

    this.factory = factory;
    this.config = config;
    this.localStorageMgr = localStorage;
    this.router = router;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.config.serverDomain)
        .withInterceptor(this.tokenInterceptor);
    });

    this.http = http;
  }
  
  get tokenInterceptor() {
    let storage = this.localStorageMgr;
    let router = this.router;

    return {
      response(response) {
        if(response.headers.get('authorization')) {
          var parts = response.headers.get('authorization').split(' ');
          if (parts.length == 2) {
            var scheme      = parts[0]
              , credentials = parts[1];

            if (/^Bearer$/i.test(scheme)) {
              storage.store('aurelia_token', credentials );
            }
          }
        }
        console.log(`Received ${response.status} ${response.url}`);
        return response; // you can return a modified Response
      },
      responseError(error) {
        if (error.status && error.status === 401) {
          storage.store('aurelia_token', "");
          storage.store('aurelia_id_token', "");
          storage.store('google_state', "");
          router.navigate('login');
        }
        throw error;
      }
    };
  }

  logOut() {}
  
  resetFactoryData() {
    this.factory.reset();
  }

  fetchCalendars() {
    return this.http.fetch("/calendars", {method: 'get', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token')}})
      .then(
        response => response.json().then(data => {
         return data;
        })
      );
  }

  fetchProfile() {
    return this.http.fetch("/get-user", {method: 'get', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token')}})
      .then(
        response => response.json().then(data => {
          return data;
        })
      );
  }

}
