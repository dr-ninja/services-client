import {inject, bindable} from 'aurelia-framework';
import {MultiObserver} from 'multi-observer';
import {Validation} from 'aurelia-validation';

@inject(Element, MultiObserver, Validation)
export class StypeForm {
  @bindable save;
  @bindable item;
  @bindable readonly = true;
  backupString = '';
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
      this.readonly = !!this.item.data.id;
    }
  }

  assignValidations(validation) {
    this.validation = validation.on(this)
      .ensure('item.data.name')
      .hasMinLength(3)
      .hasMaxLength(20)
      .isNotEmpty();
  }

  attachObserver() {
    this.disposeClient = this.multiObserver.observe([
      [this.item.data, 'name'],
      [this.item.data, 'default_duration'],
      [this.item.data, 'default_price'],
      [this.item.data, 'cost']
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
