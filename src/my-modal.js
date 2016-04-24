import {DialogController} from 'aurelia-dialog';

export class MyModal {
  static inject = [DialogController];
         event = {};
  constructor(controller){
    this.controller = controller;
  }
  activate(event){

      this.event = event;
      console.log(event);
  }
  
  attached() {
    
  }
  
  
}
