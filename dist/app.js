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
            config.title = 'Service Client';
            config.addPipelineStep('authorize', AuthorizeStep);
            config.map([{ route: ['', 'login'], name: 'login', moduleId: 'login', nav: true, title: 'Login' }, { route: 'home', name: 'home', moduleId: 'home', nav: true, title: 'Home', settings: { auth: true } }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users', settings: { auth: true } }, { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router', settings: { auth: true } }]);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0RBS2EsR0FBRyxFQWlCVixhQUFhOzs7Ozs7OztnQ0F0QlgsUUFBUTs7cUJBQ1IsS0FBSzs7aUNBQ0wsTUFBTTs7aURBQ04sbUJBQW1COzs7QUFFZCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7QUFDaEMsa0JBQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ25ELGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBTyxRQUFRLEVBQUUsT0FBTyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUMvRixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxFQUFFLE1BQU0sRUFBUyxRQUFRLEVBQUUsTUFBTSxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFDM0gsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVMsUUFBUSxFQUFFLE9BQU8sRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQ3RJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUN2SSxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFaVSxHQUFHOzs7OztBQWlCVixtQkFBYTtBQUVOLGlCQUZQLGFBQWEsQ0FFTCxLQUFLLEVBQUUsWUFBWSxFQUFFOzs7QUFDL0IsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsY0FBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUM7U0FDckM7O3FCQUxHLGFBQWE7O2lCQU9kLGFBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFO0FBQy9CLGdCQUFJLHFCQUFxQixDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztxQkFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSTthQUFBLENBQUMsRUFBRTtBQUN6RixrQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQzFELGtCQUFJLENBQUMsTUFBTSxFQUFFO0FBQ1gsdUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2VBQzNDO2FBQ0Y7QUFDRCxtQkFBTyxJQUFJLEVBQUUsQ0FBQztXQUNmOzs7NkJBZkcsYUFBYTtBQUFiLHFCQUFhLEdBRGxCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0IsYUFBYSxLQUFiLGFBQWE7ZUFBYixhQUFhIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVkaXJlY3R9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlTWFuYWdlcn0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLW1hbmFnZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ1NlcnZpY2UgQ2xpZW50JztcbiAgICBjb25maWcuYWRkUGlwZWxpbmVTdGVwKCdhdXRob3JpemUnLCBBdXRob3JpemVTdGVwKTtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ2xvZ2luJ10sIG5hbWU6ICdsb2dpbicsICAgICAgbW9kdWxlSWQ6ICdsb2dpbicsICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0xvZ2luJyB9LFxuICAgICAgeyByb3V0ZTogJ2hvbWUnLCAgICAgICAgIG5hbWU6ICdob21lJywgICAgICAgIG1vZHVsZUlkOiAnaG9tZScsICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnSG9tZScsIHNldHRpbmdzOiB7IGF1dGg6IHRydWUgfSB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgICAgICAgICBuYW1lOiAndXNlcnMnLCAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnR2l0aHViIFVzZXJzJywgc2V0dGluZ3M6IHsgYXV0aDogdHJ1ZSB9IH0sXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCBtb2R1bGVJZDogJ2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdDaGlsZCBSb3V0ZXInLCBzZXR0aW5nczogeyBhdXRoOiB0cnVlIH0gfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cblxuXG5AaW5qZWN0KFV0aWxzLCBMb2NhbFN0b3JhZ2VNYW5hZ2VyKVxuY2xhc3MgQXV0aG9yaXplU3RlcCB7XG5cbiAgY29uc3RydWN0b3IodXRpbHMsIGxvY2FsU3RvcmFnZSkge1xuICAgIHRoaXMudXRpbHMgPSB1dGlscztcbiAgICB0aGlzLmxvY2FsU3RvcmFnZU1nciA9IGxvY2FsU3RvcmFnZTtcbiAgfVxuXG4gIHJ1bihuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24sIG5leHQpIHtcbiAgICBpZiAobmF2aWdhdGlvbkluc3RydWN0aW9uLmdldEFsbEluc3RydWN0aW9ucygpLnNvbWUoaSA9PiBpLmNvbmZpZy5zZXR0aW5ncy5hdXRoID09PSB0cnVlKSkge1xuICAgICAgbGV0IGlzQXV0aCA9IHRoaXMubG9jYWxTdG9yYWdlTWdyLmdldEtleSgnYXV0aCcpIHx8IGZhbHNlO1xuICAgICAgaWYgKCFpc0F1dGgpIHtcbiAgICAgICAgcmV0dXJuIG5leHQuY2FuY2VsKG5ldyBSZWRpcmVjdCgnbG9naW4nKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
