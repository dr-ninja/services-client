import {inject} from 'aurelia-framework';
import {AccountApi} from './account-api';

@inject(AccountApi)
export class Welcome {
  username = 'admin';
  password = 'admin';

  constructor(accountApi) {
    this.accountApi = accountApi;
  }

  logIn() {
    let postData = new FormData();
    postData.append( 'username', this.username );
    postData.append( 'password', this.password );
    this.accountApi.logIn(postData);
  }

  canDeactivate() {}

  attached() {}
}
