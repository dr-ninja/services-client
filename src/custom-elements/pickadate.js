import {inject} from 'aurelia-framework';
import {} from 'pikaday';

@inject(Element)
export class Pickadate {

  constructor(element) {
    this.element = element;
  }

  attached() {
    let input = this.element.querySelector('.input');
    let trigger = this.element.querySelector('.trigger');

    let pkaday = new Pikaday({field: input, trigger: trigger, minDate: new Date(2000, 0, 1), maxDate: new Date(2020, 12, 31), yearRange: [2010, 2020]});
    console.log(pkaday);
  }
}
