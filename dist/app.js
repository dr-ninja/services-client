'use strict';

System.register(['aurelia-router', 'aurelia-framework', 'local-storage-manager', 'aurelia-auth'], function (_export, _context) {
  var Redirect, inject, LocalStorageManager, Router, FetchConfig, _dec, _class, _dec2, _class2, App, AuthorizeStep;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
      Router = _aureliaRouter.Router;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
          config.map([{ route: ['', 'login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' }, { route: 'clients', name: 'clients', moduleId: './pages/clients/clients', nav: true, title: 'clients', settings: { auth: true } }, { route: 'appointments', name: 'appointments', moduleId: 'appointments', nav: true, title: 'appointments', settings: { auth: true } }, { route: 'services', name: 'services', moduleId: 'services', nav: true, title: 'services', settings: { auth: false } }, { route: 'service-types', name: 'service-types', moduleId: './pages/stypes/service-types', nav: true, title: 'service-types', settings: { auth: false } }]);

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
