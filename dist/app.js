System.register(['aurelia-router', './utils', 'aurelia-framework', './local-storage-manager'], function (_export) {
  'use strict';

  var Redirect, Utils, inject, LocalStorageManager, App, AuthorizeStep;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }, function (_utils) {
      Utils = _utils.Utils;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_localStorageManager) {
      LocalStorageManager = _localStorageManager.LocalStorageManager;
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'I Love Nails';
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: ['', 'login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' }, { route: 'clients', name: 'clients', moduleId: 'clients', nav: true, title: 'clients', settings: { auth: true } }, { route: 'appointments', name: 'appointments', moduleId: 'appointments', nav: true, title: 'appointments', settings: { auth: true } }, { route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'products', settings: { auth: true } }, { route: 'services', name: 'services', moduleId: 'services', nav: true, title: 'services', settings: { auth: true } }, { route: 'service-types', name: 'service-types', moduleId: 'service-types', nav: true, title: 'service-types', settings: { auth: false } }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);

      AuthorizeStep = (function () {
        function AuthorizeStep(utils, localStorage) {
          _classCallCheck(this, _AuthorizeStep);

          this.utils = utils;
          this.localStorageMgr = localStorage;
        }

        _createClass(AuthorizeStep, [{
          key: 'run',
          value: function run(navigationInstruction, next) {
            if (navigationInstruction.getAllInstructions().some(function (i) {
              return i.config.settings.auth === true;
            })) {
              var isAuth = this.localStorageMgr.getKey('auth') || false;
              this.utils.isAuthenticated = isAuth;
              if (!isAuth) {
                return next.cancel(new Redirect('login'));
              }
            }
            return next();
          }
        }]);

        var _AuthorizeStep = AuthorizeStep;
        AuthorizeStep = inject(Utils, LocalStorageManager)(AuthorizeStep) || AuthorizeStep;
        return AuthorizeStep;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QU8sQ0FBQyxDQUFDLENBQUM7ZUFDM0M7YUFDRjtBQUNELG1CQUFPLElBQUksRUFBRSxDQUFDO1dBQ2Y7Ozs2QkFoQkcsYUFBYTtBQUFiLHFCQUFhLEdBRGxCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0IsYUFBYSxLQUFiLGFBQWE7ZUFBYixhQUFhIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlTWFuYWdlcn0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLW1hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0kgTG92ZSBOYWlscyc7XG4gICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgnYXV0aG9yaXplJywgQXV0aG9yaXplU3RlcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICdsb2dpbiddLCBuYW1lOiAnbG9naW4nLCBtb2R1bGVJZDogJ2xvZ2luJywgbmF2OiBmYWxzZSwgdGl0bGU6ICdMb2dpbicgfSxcbiAgICAgIHsgcm91dGU6ICdjbGllbnRzJywgbmFtZTogJ2NsaWVudHMnLCBtb2R1bGVJZDogJ2NsaWVudHMnLCBuYXY6IHRydWUsIHRpdGxlOiAnY2xpZW50cycsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ2FwcG9pbnRtZW50cycsIG5hbWU6ICdhcHBvaW50bWVudHMnLCBtb2R1bGVJZDogJ2FwcG9pbnRtZW50cycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdhcHBvaW50bWVudHMnLCBzZXR0aW5nczogeyBhdXRoOiB0cnVlIH0gfSxcbiAgICAgIHsgcm91dGU6ICdwcm9kdWN0cycsIG5hbWU6ICdwcm9kdWN0cycsIG1vZHVsZUlkOiAncHJvZHVjdHMnLCBuYXY6IHRydWUsIHRpdGxlOiAncHJvZHVjdHMnLCBzZXR0aW5nczogeyBhdXRoOiB0cnVlIH0gfSxcbiAgICAgIHsgcm91dGU6ICdzZXJ2aWNlcycsIG5hbWU6ICdzZXJ2aWNlcycsIG1vZHVsZUlkOiAnc2VydmljZXMnLCBuYXY6IHRydWUsIHRpdGxlOiAnc2VydmljZXMnLCBzZXR0aW5nczogeyBhdXRoOiB0cnVlIH0gfSxcbiAgICAgIHsgcm91dGU6ICdzZXJ2aWNlLXR5cGVzJywgbmFtZTogJ3NlcnZpY2UtdHlwZXMnLCBtb2R1bGVJZDogJ3NlcnZpY2UtdHlwZXMnLCBuYXY6IHRydWUsIHRpdGxlOiAnc2VydmljZS10eXBlcycsIHNldHRpbmdzOiB7IGF1dGg6IGZhbHNlIH0gfVxuICAgICAgLyoseyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsICBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOiAnQ2hpbGQgUm91dGVyJywgc2V0dGluZ3M6IHsgYXV0aDogdHJ1ZSB9IH0qL1xuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cblxuXG5AaW5qZWN0KFV0aWxzLCBMb2NhbFN0b3JhZ2VNYW5hZ2VyKVxuY2xhc3MgQXV0aG9yaXplU3RlcCB7XG5cbiAgY29uc3RydWN0b3IodXRpbHMsIGxvY2FsU3RvcmFnZSkge1xuICAgIHRoaXMudXRpbHMgPSB1dGlscztcbiAgICB0aGlzLmxvY2FsU3RvcmFnZU1nciA9IGxvY2FsU3RvcmFnZTtcbiAgfVxuXG4gIHJ1bihuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24sIG5leHQpIHtcbiAgICBpZiAobmF2aWdhdGlvbkluc3RydWN0aW9uLmdldEFsbEluc3RydWN0aW9ucygpLnNvbWUoaSA9PiBpLmNvbmZpZy5zZXR0aW5ncy5hdXRoID09PSB0cnVlKSkge1xuICAgICAgbGV0IGlzQXV0aCA9IHRoaXMubG9jYWxTdG9yYWdlTWdyLmdldEtleSgnYXV0aCcpIHx8IGZhbHNlO1xuICAgICAgdGhpcy51dGlscy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGg7XG4gICAgICBpZiAoIWlzQXV0aCkge1xuICAgICAgICByZXR1cm4gbmV4dC5jYW5jZWwobmV3IFJlZGlyZWN0KCdsb2dpbicpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
