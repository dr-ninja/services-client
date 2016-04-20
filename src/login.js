import {inject} from 'aurelia-framework';
import {AccountApi} from 'account-api';
import {Validation} from 'aurelia-validation';
import {AuthService} from 'aurelia-auth';


@inject(AccountApi, Validation, AuthService)
export class Login {
  username = 'admin';
  password = 'admin';
  
  calData = "";

  constructor(accountApi, validation, auth, ) {
    this.accountApi = accountApi;
    this.auth = auth;
   
    this.assignValidations(validation);
  }

  activate() {
    this.accountApi.resetFactoryData();
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

 /* logIn() {
    this.validation.validate()
      .then( () => {
        this.accountApi.logIn(this.username, this.password);
      }, () => {
      });
  }*/
  
  authenticate(name){
    return this.auth.authenticate(name, false, null)
      .then((response)=>{
        console.log("auth response ", response);
      });
  }
  
  fetchCals() {
    this.accountApi.fetchCals().then(
      (data) => {this.calData = JSON.stringify(data);},
      (error) => {
        console.log(error);
      }
    );
      

  }
  
  
  canDeactivate() {}

  attached() {

  }
}
