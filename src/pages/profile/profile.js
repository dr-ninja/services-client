import {inject, bindable} from 'aurelia-framework';
import {LocalStorageManager} from 'local-storage-manager';
import {AccountApi} from 'account-api';

@inject(AccountApi, LocalStorageManager)
export class Profile {
  
  profile = null;
  accessToken = null;
  showDetails = false;
  
  constructor(accountApi, localStorage) {
    this.accountApi = accountApi;
    this.localStorageMgr = localStorage;
  }
  
  activate() {
    this.fetchProfile();
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    if(this.showDetails) {
      this.getAccessToken();
    }
  }

  getAccessToken() {
    this.accessToken = this.localStorageMgr.getKey('aurelia_token');
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
    this.localStorageMgr.store('aurelia_token', accessToken );
  }

  fetchProfile() {
    this.accountApi.fetchProfile().then(
      (data) => {this.profile = data;},
      (error) => {console.log(error);}
    );
  }

}
