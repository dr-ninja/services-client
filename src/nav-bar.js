import {inject, bindable} from 'aurelia-framework';
import {AccountApi} from 'account-api';

@inject(AccountApi)
export class NavBar {
  @bindable router;


  constructor(accountApi) {
    this.accountApi = accountApi;
  }

  logOut() {
    this.accountApi.logOut();
  }

  canDeactivate() {}

  attached() {

  }
}
