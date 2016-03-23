import {inject, bindable} from 'aurelia-framework';

@bindable('value')
@inject(Element)
export class InputField {
  @bindable label         = '';
  @bindable icon          = '';
  @bindable placeholder   = '';
  @bindable type          = 'text';
  @bindable readonly      = false;

  constructor(element) {
    this.element = element;
  }
  onFocus(state) {
    this.focus = state;
  }
}
