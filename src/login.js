import {inject} from 'aurelia-framework';
import {AccountApi} from 'account-api';
import {AuthService} from 'aurelia-auth';

@inject(AccountApi, AuthService)
export class Login {

  constructor(accountApi, auth) {
    this.accountApi = accountApi;
    this.auth = auth;
  }

  activate() {
    this.accountApi.resetFactoryData();
    this.auth.isAuthenticated = false;
  }

  authenticate(name){
    return this.auth.authenticate(name, false, null)
      .then(()=>{this.auth.isAuthenticated = true;});
  }
  
  canDeactivate() {}

  attached() {}
}
