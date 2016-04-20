import {inject, bindable} from 'aurelia-framework';
import {MultiObserver} from 'multi-observer';
import {Validation} from 'aurelia-validation';

@inject(Element, MultiObserver, Validation)
export class ClientForm {
  @bindable save;
  @bindable item;
  @bindable readonly = true;
  hasChanges = false;

  constructor(element,  multiObserver, validation) {
    this.element = element;
    this.multiObserver = multiObserver;
    this.assignValidations(validation);
  }

  itemChanged() {
    if (this.item) {
      this.attachObserver();
      this.itemDataChanged();
      this.readonly = !!this.item.data._id;
    }
  }

  assignValidations(validation) {
    this.validation = validation.on(this)
      .ensure('item.data.name')
      .hasMinLength(3)
      .hasMaxLength(20)
      .isNotEmpty()
      .ensure('item.data.phone')
      .isNotEmpty()
      .isBetween(0, 999999999)
      .containsOnlyDigits();
  }

  attachObserver() {
    this.disposeClient = this.multiObserver.observe([
      [this.item.data, 'name'],
      [this.item.data, 'nif'],
      [this.item.data, 'email'],
      [this.item.data, 'phone'],
      [this.item.data, 'facebook'],
      [this.item.data, 'address'],
      [this.item.data, 'birthday']
    ], () => this.itemDataChanged());
  }

  detached() {
    if (this.disposeClient) {
      this.disposeClient();
    }
  }

  itemDataChanged() {
    this.validation.validate()
      .then( () => {
        this.item.check();
      }, () => {
      });
  }

  toggleEditMode() {
    this.readonly = !this.readonly;
  }

}
