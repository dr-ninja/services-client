import {inject, bindable} from 'aurelia-framework';
import {Api} from 'api';
import {Router} from 'aurelia-router';
import {BindingEngine} from 'aurelia-binding';

@inject(Api, Router, BindingEngine)
export class Clients {

  heading = 'Clients';
  deleteConfirmMessage = 'Queres mesmo eliminar este cliente?';
  subModules = [
    { route: ':id', name: 'client', moduleId: './client', nav: false, title: 'Client' },
    { route: [''], name: 'clients-statistics', moduleId: './clients-statistics', nav: false, title: 'clients-statistics' }
  ];

  apiConfig = {
    objType: 'client',
    resourceName: 'clients'
  };

  list = [];
  filteredList = [];
  selectedIdx = null;
  isUpdate = false;
  showDeleteBtn = false;
  @bindable filterExpr = '';

  configureRouter(config, router) {config.map(this.subModules); this.router = router;}

  constructor(api, router, bindingEngine) {
    this.api = api;
    this.router = router;
    this.bindingEngine = bindingEngine;
    this.listChanges = this.listChanges.bind(this);
  }

  activate() {
    return this.fetchData();
  }

  deactivate() {
    if (this.dispose) {
      this.dispose();
    }
  }

  listChanges(info) {
    if (info[0].addedCount > 0) {
      this.selectItem(this.list[info[0].index], info[0].index);
    }
  }

  attached() {
    let id = (this.router.currentInstruction.params.id) || null;
    let idx = this.list.findIndex(el => {return el.data.id == id;});

    if (idx > -1) {
      this.selectItem(this.list[idx], idx);
    } else {
      this.newForm();
    }
  }

  fetchData() {
    return this.api.fetchData(this.apiConfig).then(data => {
      this.list = data;
      this.filteredList = data;
      this.dispose = this.bindingEngine.collectionObserver(this.list).subscribe(this.listChanges).dispose;
    },
      error => {console.log(error);});
  }

  newForm() {
    this.router.navigateToRoute(this.subModules[0].name, { id: 'new'});
    this.selectedIdx = null;
  }

  selectItem(item, idx) {
    this.router.navigateToRoute(this.subModules[0].name, { id: item.data.id});
    this.selectedIdx = idx;
  }

  filterExprChanged(newVal) {
    let pattern = '';
    for (let i = 0; i < newVal.length; i++) {
      pattern += newVal[i] + '.*';
    }
    let re = new RegExp(pattern, 'ig');

    this.filteredList = this.list.filter(function(item) {
      return item.data.name.match(re);
    });
  }

  deleteRow(item) {
    if (confirm(this.deleteConfirmMessage)) {
      this.api.deleteItem(item, this.apiConfig).then(data => {
        this.router.navigateToRoute(this.subModules[1].name);
      }, error => {
        console.log('error removing ', error);
      });
    }
  }

}
