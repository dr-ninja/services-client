import {inject, bindable} from 'aurelia-framework';
import {MultiObserver} from 'multi-observer';
import {Validation} from 'aurelia-validation';

@inject(Element, MultiObserver, Validation)
export class ClientForm {
  @bindable save;
  @bindable client;
  @bindable readonly = true;
  backupString = '';
  hasChanges = false;

  constructor(element,  multiObserver, validation) {
    this.element = element;
    this.multiObserver = multiObserver;
    this.assignValidations(validation);
  }

  clientChanged() {
    if (this.client) {
      this.attachObserver();
      this.clientDataChanged();
      this.readonly = !!this.client.data.id;
    }
  }

  assignValidations(validation) {
    this.validation = validation.on(this)
      .ensure('client.data.name')
      .hasMinLength(3)
      .hasMaxLength(20)
      .isNotEmpty()
      .ensure('client.data.phone')
      .isNotEmpty()
      .isBetween(0, 999999999)
      .containsOnlyDigits();
  }

  attachObserver() {
    this.disposeClient = this.multiObserver.observe([
      [this.client.data, 'name'],
      [this.client.data, 'nif'],
      [this.client.data, 'email'],
      [this.client.data, 'phone'],
      [this.client.data, 'facebook'],
      [this.client.data, 'address'],
      [this.client.data, 'birthday'],
      [this.client.data, 'alert'],
      [this.client.data, 'alert_period']
    ], () => this.clientDataChanged());
  }

  detached() {
    if (this.disposeClient) {
      this.disposeClient();
    }
  }

  clientDataChanged() {
    this.validation.validate()
      .then( () => {
        this.client.check();
      }, () => {
      });
  }

  toggleEditMode() {
    this.readonly = !this.readonly;
  }

}
