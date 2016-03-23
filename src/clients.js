import {inject, bindable} from 'aurelia-framework';
import {ApiClient} from 'api-client';
import {Router} from 'aurelia-router';
import {BindingEngine} from 'aurelia-binding';

@inject(ApiClient, Router, BindingEngine)
export class Clients {
  heading = 'Clients';
  clients = [];
  filteredClients = [];
  selectedIdx = null;
  isUpdate = false;
  showDeleteBtn = false;
  @bindable filterExpr = '';

  configureRouter(config, router) {
    config.map([
      { route: ':id', name: 'client', moduleId: 'client', nav: false, title: 'Client' },
      { route: [''], name: 'clients-statistics', moduleId: 'clients-statistics', nav: false, title: 'clients-statistics' }
    ]);
    this.router = router;
  }

  constructor(api, router, bindingEngine) {
    this.api = api;
    this.router = router;
    this.bindingEngine = bindingEngine;
    this.clientsChanges = this.clientsChanges.bind(this);
  }

  activate() {
    return this.getAllClients();
  }

  deactivate() {
    if (this.dispose) {
      this.dispose();
    }
  }

  // Selects the first item in list after being created
  clientsChanges(info) {
    if (info[0].addedCount > 0) {
      this.selectClient(this.clients[info[0].index], info[0].index);
    }
  }

  // Displays client info if id is available in the url, otherwise displays form to create new
  attached() {
    let id = (this.router.currentInstruction.params.id) || null;
    let idx = this.clients.findIndex(el => {return el.data.id == id;});

    if (idx > -1) {
      this.selectClient(this.clients[idx], idx);
    } else {
      this.newForm();
    }
  }

  getAllClients() {
    return this.api.fetchClients().then(data => {
      this.clients = data;
      this.filteredClients = data;
      this.dispose = this.bindingEngine.collectionObserver(this.clients).subscribe(this.clientsChanges).dispose;
    },
      error => {console.log(error);});
  }

  newForm() {
    this.router.navigateToRoute('client', { id: 'new'});
    this.selectedIdx = null;
  }

  selectClient(client, idx) {
    this.router.navigateToRoute('client', { id: client.data.id});
    this.selectedIdx = idx;
  }

  filterExprChanged(newVal) {
    let pattern = '';
    for (let i = 0; i < newVal.length; i++) {
      pattern += newVal[i] + '.*';
    }
    let re = new RegExp(pattern, 'ig');

    this.filteredClients = this.clients.filter(function(client) {
      return client.data.name.match(re);
    });
  }

  deleteRow(client) {
    if (confirm('Queres mesmo eliminar este cliente?')) {
      this.api.deleteClient(client).then(data => {
        this.router.navigateToRoute('clients-statistics');
      }, error => {
        console.log('error removing client ', error);
      });
    }
  }

}
