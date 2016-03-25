import {Redirect} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {LocalStorageManager} from 'local-storage-manager';

export class App {
  configureRouter(config, router) {
    config.title = 'I Love Nails';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' },
      { route: 'clients', name: 'clients', moduleId: './pages/clients/clients', nav: true, title: 'clients', settings: { auth: true } },
      { route: 'appointments', name: 'appointments', moduleId: 'appointments', nav: true, title: 'appointments', settings: { auth: true } },
      { route: 'services', name: 'services', moduleId: 'services', nav: true, title: 'services', settings: { auth: true } },
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
      let isAuth = this.localStorageMgr.getKey('auth') || false;
      if (!isAuth) {
        return next.cancel(new Redirect('login'));
      }
    }
    return next();
  }
}

