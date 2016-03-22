import {inject} from 'aurelia-framework';

@inject(Element)
export class KeepCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    if (!newValue) {
      this.element.remove();
    }
  }
}
