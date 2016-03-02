import {Redirect} from 'aurelia-router';
import {Utils} from './utils';
import {inject} from 'aurelia-framework';
import {LocalStorageManager} from './local-storage-manager';

export class App {
  configureRouter(config, router) {
    config.title = 'Service Client';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'login'], name: 'login',      moduleId: 'login',      nav: true, title: 'Login' },
      { route: 'home',         name: 'home',        moduleId: 'home',        nav: true, title: 'Home', settings: { auth: true } },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users', settings: { auth: true } },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: { auth: true } }
    ]);

    this.router = router;
  }
}


@inject(Utils, LocalStorageManager)
class AuthorizeStep {

  constructor(utils, localStorage) {
    this.utils = utils;
    this.localStorageMgr = localStorage;
  }

  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth === true)) {
      let isAuth = this.localStorageMgr.getKey('auth') || false;
      if (!isAuth) {
        return next.cancel(new Redirect('login'));
      }
    }
    return next();
  }
}

