'use strict';

System.register(['aurelia-framework', 'aurelia-router', 'local-storage-manager', 'aurelia-auth'], function (_export, _context) {
  var inject, Redirect, Router, LocalStorageManager, FetchConfig, _dec, _class, _dec2, _class2, App, AuthorizeStep;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
      Router = _aureliaRouter.Router;
    }, function (_localStorageManager) {
      LocalStorageManager = _localStorageManager.LocalStorageManager;
    }, function (_aureliaAuth) {
      FetchConfig = _aureliaAuth.FetchConfig;
    }],
    execute: function () {
      _export('App', App = (_dec = inject(Router, FetchConfig), _dec(_class = function () {
        function App(router, fetchConfig) {
          _classCallCheck(this, App);

          this.router = router;
          this.fetchConfig = fetchConfig;
        }

        App.prototype.activate = function activate() {
          this.fetchConfig.configure();
        };

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'I Love Nails';
          config.addPipelineStep('authorize', AuthorizeStep);
          config.map([{ route: ['login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' }, { route: ['', 'profile'], name: 'profile', moduleId: './pages/profile/profile', nav: true, title: 'profile', settings: { auth: true } }, { route: 'clients', name: 'clients', moduleId: './pages/clients/clients', nav: true, title: 'clients', settings: { auth: true } }, { route: 'appointments', name: 'appointments', moduleId: './pages/appointments/appointments', nav: true, title: 'appointments', settings: { auth: true } }, { route: 'services', name: 'services', moduleId: './pages/services/services', nav: true, title: 'services', settings: { auth: false } }, { route: 'service-types', name: 'service-types', moduleId: './pages/stypes/service-types', nav: true, title: 'service-types', settings: { auth: false } }]);

          this.router = router;
        };

        return App;
      }()) || _class));

      _export('App', App);

      AuthorizeStep = (_dec2 = inject(LocalStorageManager), _dec2(_class2 = function () {
        function AuthorizeStep(localStorage) {
          _classCallCheck(this, AuthorizeStep);

          this.localStorageMgr = localStorage;
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {
          if (navigationInstruction.getAllInstructions().some(function (i) {
            return i.config.settings.auth === true;
          })) {
            var isAuth = this.localStorageMgr.getKey('aurelia_token') || false;
            if (!isAuth) {
              return next.cancel(new Redirect('login'));
            }
          }
          return next();
        };

        return AuthorizeStep;
      }()) || _class2);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
