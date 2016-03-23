System.register(['aurelia-router', 'utils', 'aurelia-framework', 'local-storage-manager'], function (_export) {
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
//# sourceMappingURL=data:application/json;base64,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QU8sQ0FBQyxDQUFDLENBQUM7ZUFDM0M7YUFDRjtBQUNELG1CQUFPLElBQUksRUFBRSxDQUFDO1dBQ2Y7Ozs2QkFoQkcsYUFBYTtBQUFiLHFCQUFhLEdBRGxCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0IsYUFBYSxLQUFiLGFBQWE7ZUFBYixhQUFhIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7VXRpbHN9IGZyb20gJ3V0aWxzJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZU1hbmFnZXJ9IGZyb20gJ2xvY2FsLXN0b3JhZ2UtbWFuYWdlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnSSBMb3ZlIE5haWxzJztcbiAgICBjb25maWcuYWRkUGlwZWxpbmVTdGVwKCdhdXRob3JpemUnLCBBdXRob3JpemVTdGVwKTtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ2xvZ2luJ10sIG5hbWU6ICdsb2dpbicsIG1vZHVsZUlkOiAnbG9naW4nLCBuYXY6IGZhbHNlLCB0aXRsZTogJ0xvZ2luJyB9LFxuICAgICAgeyByb3V0ZTogJ2NsaWVudHMnLCBuYW1lOiAnY2xpZW50cycsIG1vZHVsZUlkOiAnY2xpZW50cycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdjbGllbnRzJywgc2V0dGluZ3M6IHsgYXV0aDogdHJ1ZSB9IH0sXG4gICAgICB7IHJvdXRlOiAnYXBwb2ludG1lbnRzJywgbmFtZTogJ2FwcG9pbnRtZW50cycsIG1vZHVsZUlkOiAnYXBwb2ludG1lbnRzJywgbmF2OiB0cnVlLCB0aXRsZTogJ2FwcG9pbnRtZW50cycsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ3Byb2R1Y3RzJywgbmFtZTogJ3Byb2R1Y3RzJywgbW9kdWxlSWQ6ICdwcm9kdWN0cycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdwcm9kdWN0cycsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ3NlcnZpY2VzJywgbmFtZTogJ3NlcnZpY2VzJywgbW9kdWxlSWQ6ICdzZXJ2aWNlcycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdzZXJ2aWNlcycsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ3NlcnZpY2UtdHlwZXMnLCBuYW1lOiAnc2VydmljZS10eXBlcycsIG1vZHVsZUlkOiAnc2VydmljZS10eXBlcycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdzZXJ2aWNlLXR5cGVzJywgc2V0dGluZ3M6IHsgYXV0aDogZmFsc2UgfSB9XG4gICAgICAvKix7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCBtb2R1bGVJZDogJ2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdDaGlsZCBSb3V0ZXInLCBzZXR0aW5nczogeyBhdXRoOiB0cnVlIH0gfSovXG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuXG5cbkBpbmplY3QoVXRpbHMsIExvY2FsU3RvcmFnZU1hbmFnZXIpXG5jbGFzcyBBdXRob3JpemVTdGVwIHtcblxuICBjb25zdHJ1Y3Rvcih1dGlscywgbG9jYWxTdG9yYWdlKSB7XG4gICAgdGhpcy51dGlscyA9IHV0aWxzO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlTWdyID0gbG9jYWxTdG9yYWdlO1xuICB9XG5cbiAgcnVuKG5hdmlnYXRpb25JbnN0cnVjdGlvbiwgbmV4dCkge1xuICAgIGlmIChuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uZ2V0QWxsSW5zdHJ1Y3Rpb25zKCkuc29tZShpID0+IGkuY29uZmlnLnNldHRpbmdzLmF1dGggPT09IHRydWUpKSB7XG4gICAgICBsZXQgaXNBdXRoID0gdGhpcy5sb2NhbFN0b3JhZ2VNZ3IuZ2V0S2V5KCdhdXRoJykgfHwgZmFsc2U7XG4gICAgICB0aGlzLnV0aWxzLmlzQXV0aGVudGljYXRlZCA9IGlzQXV0aDtcbiAgICAgIGlmICghaXNBdXRoKSB7XG4gICAgICAgIHJldHVybiBuZXh0LmNhbmNlbChuZXcgUmVkaXJlY3QoJ2xvZ2luJykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
