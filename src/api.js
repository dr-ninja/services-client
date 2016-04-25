import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {inject} from 'aurelia-framework';
import config from 'authConfig';
import {LocalStorageManager} from 'local-storage-manager';
import {Factory} from 'factory';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router, LocalStorageManager, Factory, config)
export class Api {

  constructor(http, router, localStorage, factory, config) {

    this.config = config;
    this.localStorageMgr = localStorage;
    this.factory = factory;
    this.router = router;
    this.http = http;

    this.http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.config.serverDomain)
        .withInterceptor(this.tokenInterceptor);
    });

  }

  getBlankItem(config) {
    return this.factory.getNewItem(config.objType);
  }

  fetchRow(id, config) {
    return this.factory.getItemById(config.objType, id);
  }

  fetchData(config) {
    return new Promise((resolve, reject)=>{
      if (this.factory.arrHasLength(config.objType)) {
        resolve(this.factory.getList(config.objType));
      } else {
        this.http.fetch("/" + config.resourceName, {method: 'get', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token')}})
          .then(
            response => response.json().then(data => {
              console.log(data);
              let result = this.factory.fillList(config.objType, data);
              resolve(result);
            })
        )
          .catch(error => reject(error));
      }
    });
  }

  newItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch("/" +config.resourceName, {method: 'post', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token'), 'Content-Type': 'application/json'}, body: JSON.stringify(item.data).replace(/""/ig, null)})
        .then(response => {
          response.json().then(data => {this.factory.addNewItem(config.objType, item, data); resolve(data);});
        })
        .catch(error => reject(error));
    });
  }

  editItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch("/" +config.resourceName + '/' + item.data._id, {method: 'put', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token'), 'Content-Type': 'application/json'}, body: JSON.stringify(item.data).replace(/""/ig, null)})
        .then(response => {
          response.json().then(data => {if(data.ok && data.nModified === 1) {item.saveChanges(); resolve(data);} else {reject({error: "Something unexpected occurred"})}});
        })
        .catch(error => reject(error));
    });
  }

  deleteItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch("/" + config.resourceName + '/' + item.data._id, {method: 'delete', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('aurelia_token')}})
        .then(response => {
          response.json().then(data => {this.factory.deleteItem(config.objType, item); resolve(data);});
        })
        .catch(error => reject(error));
    });
  }

  get tokenInterceptor() {
    let storage = this.localStorageMgr;
    let router = this.router;
    let http = this.http;

    return {
      /*request(request) {
       request.headers.append("Authorization", 'Bearer ' + storage.getKey('aurelia_token'));
       return request;
       },*/
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
      responseError(error, req) {
       
        if (error.status && error.status === 401) {
          storage.store('aurelia_token', "");
          storage.store('aurelia_id_token', "");
          storage.store('google_state', "");
          router.navigate('login');
        }

        if(error.status && error.status === 503) {


          setTimeout(() =>{
           
            return http.fetch(req);

          }, 5000);

        }
        throw error;
      }
    };
  }
}
