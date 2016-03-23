import {inject, bindable} from 'aurelia-framework';
import {MultiObserver} from 'multi-observer';

@inject(Element, MultiObserver)
export class ClientForm {
  @bindable save;
  @bindable client;
  @bindable readonly = true;
  backupString = '';
  hasChanges = false;

  constructor(element,  multiObserver) {
    this.element = element;
    this.multiObserver = multiObserver;
  }

  clientChanged() {
    if (this.client) {
      this.attachObserver();
      this.clientDataChanged();
      this.readonly = !!this.client.data.id;
    }
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
    this.client.check();
  }

  toggleEditMode() {
    this.readonly = !this.readonly;
  }

}
