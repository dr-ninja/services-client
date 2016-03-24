import {inject} from 'aurelia-framework';
import {AccountApi} from 'account-api';
import {Validation} from 'aurelia-validation';

@inject(AccountApi, Validation)
export class Welcome {
  username = 'admin';
  password = 'admin';

  constructor(accountApi, validation) {
    this.accountApi = accountApi;
    this.assignValidations(validation);
  }

  assignValidations(validation) {
    this.validation = validation.on(this)
      .ensure('username')
      .isNotEmpty()
      .hasMinLength(3)
      .hasMaxLength(10)
      .ensure('password')
      .isNotEmpty()
      .hasMinLength(3)
      .hasMaxLength(10);
  }

  logIn() {
    this.validation.validate()
      .then( () => {
        let postData = new FormData();
        postData.append( 'username', this.username );
        postData.append( 'password', this.password );
        this.accountApi.logIn(postData);
      }, () => {
      });
  }

  canDeactivate() {}

  attached() {}
}
