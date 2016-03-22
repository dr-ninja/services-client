import {inject, bindable} from 'aurelia-framework';
import {AccountApi} from './account-api';
import {Utils} from './utils';

@inject(AccountApi, Utils)
export class NavBar {
  @bindable router;
  @bindable isAuth = null;

  constructor(accountApi, utils) {
    this.accountApi = accountApi;
    this.utils = utils;
  }

  logOut() {
    this.accountApi.logOut();
  }

  canDeactivate() {}

  attached() {}
}
