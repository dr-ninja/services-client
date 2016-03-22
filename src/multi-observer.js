import {inject} from 'aurelia-framework'; // or 'aurelia-binding'
import {BindingEngine} from 'aurelia-binding';

@inject(BindingEngine)
export class MultiObserver {

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  observe(properties, callback) {
    let subscriptions = [];
    let i = properties.length;
    let object;
    let propertyName;

    while (i--) {
      object = properties[i][0];
      propertyName = properties[i][1];
      let subscription = this.bindingEngine.propertyObserver(object, propertyName).subscribe(callback);
      subscriptions.push(subscription);
    }

    return () => {
      while (subscriptions.length) {
        let subscription = subscriptions.pop();
        subscription.dispose();
      }
    };
  }
}
