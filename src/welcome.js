import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'daniel';
  lastName = 'reis';
  previousValue = this.fullName;
  data = {};

  constructor(http) {
    this.http = http;
  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;

    let postData = new FormData();
    postData.append( 'username', this.firstName );
    postData.append( 'password', this.lastName );
    return this.http.fetch('//auth-services-api.herokuapp.com/login', {
      method: 'post',
      credentials: 'include',
      body: postData
    })

      .then(response => {
        response.json();
      })

      .then(data => {
        console.log(data);
      });

    //alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }

  checkDb() {
    return this.http.fetch('//auth-services-api.herokuapp.com/db', {
      method: 'get',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {this.data = data; console.log(data);});
  }

  attached() {
   /* return this.http.fetch('//auth-services-api.herokuapp.com/db', {
      method: 'get'
    })
      .then(response => response.json())
      .then(data => {this.data = data; console.log(data);});*/
  }


}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
