import {inject} from 'aurelia-framework';
import {Redirect, Router} from 'aurelia-router';
import {LocalStorageManager} from 'local-storage-manager';
import {FetchConfig} from 'aurelia-auth';

@inject(Router,FetchConfig)
export class App {

  constructor(router, fetchConfig){
    this.router = router;
    this.fetchConfig = fetchConfig;
  }

  activate(){
    this.fetchConfig.configure();
  }

  configureRouter(config, router) {
    config.title = 'I Love Nails';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' },
      { route: ['', 'profile'], name: 'profile', moduleId: './pages/profile/profile', nav: true, title: 'profile', settings: { auth: true } },
      { route: 'clients', name: 'clients', moduleId: './pages/clients/clients', nav: true, title: 'clients', settings: { auth: true } },
      { route: 'appointments', name: 'appointments', moduleId: './pages/appointments/appointments', nav: true, title: 'appointments', settings: { auth: true } },
      { route: 'services', name: 'services', moduleId: './pages/services/services', nav: true, title: 'services', settings: { auth: false } },
      { route: 'service-types', name: 'service-types', moduleId: './pages/stypes/service-types', nav: true, title: 'service-types', settings: { auth: false } }
    ]);

    this.router = router;
  }
}


@inject(LocalStorageManager)
class AuthorizeStep {

  constructor(localStorage) {
    this.localStorageMgr = localStorage;
  }
  run(navigationInstruction, next) {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth === true)) {
      let isAuth = this.localStorageMgr.getKey('aurelia_token') || false;
      if (!isAuth) {
        return next.cancel(new Redirect('login'));
      }
    }
    return next();
  }
}

