import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {inject} from 'aurelia-framework';
import {Utils} from 'utils';
import {LocalStorageManager} from 'local-storage-manager';
import {Factory} from 'factory';
import {Router} from 'aurelia-router';

@inject(HttpClient, Utils, Router, LocalStorageManager, Factory)
export class Api {

  constructor(http, utils, router, localStorage, factory) {
    this.utils = utils;
    this.localStorageMgr = localStorage;
    this.factory = factory;
    this.router = router;

    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl(this.utils.domain);
    });
    this.http = http;
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
        this.http.fetch(config.resourceName, {method: 'get', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')}})
          .then(
            response => response.json().then(data => {
              let result = this.factory.fillList(config.objType, data.results);
              resolve(result);
            })
        )
          .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
      }
    });
  }

  newItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch(config.resourceName, {method: 'post', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')}, body: JSON.stringify(item.data).replace(/""/ig, null)})
        .then(response => {
          response.json().then(data => {this.factory.addNewItem(config.objType, item, data.id); resolve(data);});
        })
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }

  editItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch(config.resourceName + '/' + item.data.id, {method: 'put', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')}, body: JSON.stringify(item.data).replace(/""/ig, null)})
        .then(response => {
          response.json().then(data => {item.saveChanges(); resolve(data);});
        })
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }

  deleteItem(item, config) {
    return new Promise((resolve, reject)=>{
      this.http.fetch(config.resourceName + '/' + item.data.id, {method: 'delete', headers: {Authorization: 'Bearer ' + this.localStorageMgr.getKey('auth')}})
        .then(response => {
          response.json().then(data => {this.factory.deleteItem(config.objType, item); resolve(data);});
        })
        .catch(error => {if (error.status === 401) {this.localStorageMgr.store('auth', ''); this.router.navigate('login');} reject(error);});
    });
  }
}
