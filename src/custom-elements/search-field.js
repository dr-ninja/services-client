import {inject, bindable} from 'aurelia-framework';

@bindable('value')
@inject(Element)
export class SearchField {
  @bindable label         = '';
  @bindable placeholder   = '';
  @bindable type          = 'text';

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.inputElm = this.element.querySelector('input');
  }

  onFocus(state) {
    this.focus = state;
  }

  resetValue() {
    this.value = '';
    this.inputElm.focus();
  }

}
