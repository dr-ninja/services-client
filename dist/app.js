'use strict';

System.register(['aurelia-router', 'aurelia-framework', 'local-storage-manager'], function (_export, _context) {
  var Redirect, inject, LocalStorageManager, _dec, _class, App, AuthorizeStep;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_localStorageManager) {
      LocalStorageManager = _localStorageManager.LocalStorageManager;
    }],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'I Love Nails';
          config.addPipelineStep('authorize', AuthorizeStep);
          config.map([{ route: ['', 'login'], name: 'login', moduleId: 'login', nav: false, title: 'Login' }, { route: 'clients', name: 'clients', moduleId: 'clients', nav: true, title: 'clients', settings: { auth: true } }, { route: 'appointments', name: 'appointments', moduleId: 'appointments', nav: true, title: 'appointments', settings: { auth: true } }, { route: 'products', name: 'products', moduleId: 'products', nav: true, title: 'products', settings: { auth: true } }, { route: 'services', name: 'services', moduleId: 'services', nav: true, title: 'services', settings: { auth: true } }, { route: 'service-types', name: 'service-types', moduleId: 'service-types', nav: true, title: 'service-types', settings: { auth: false } }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);

      AuthorizeStep = (_dec = inject(LocalStorageManager), _dec(_class = function () {
        function AuthorizeStep(localStorage) {
          _classCallCheck(this, AuthorizeStep);

          this.localStorageMgr = localStorage;
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {
          if (navigationInstruction.getAllInstructions().some(function (i) {
            return i.config.settings.auth === true;
          })) {
            var isAuth = this.localStorageMgr.getKey('auth') || false;
            if (!isAuth) {
              return next.cancel(new Redirect('login'));
            }
          }
          return next();
        };

        return AuthorizeStep;
      }()) || _class);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7O0FBQ0E7OztxQkFFSzs7Ozs7c0JBQ1gsMkNBQWdCLFFBQVEsUUFBUTtBQUM5QixpQkFBTyxLQUFQLEdBQWUsY0FBZixDQUQ4QjtBQUU5QixpQkFBTyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DLGFBQXBDLEVBRjhCO0FBRzlCLGlCQUFPLEdBQVAsQ0FBVyxDQUNULEVBQUUsT0FBTyxDQUFDLEVBQUQsRUFBSyxPQUFMLENBQVAsRUFBc0IsTUFBTSxPQUFOLEVBQWUsVUFBVSxPQUFWLEVBQW1CLEtBQUssS0FBTCxFQUFZLE9BQU8sT0FBUCxFQUQ3RCxFQUVULEVBQUUsT0FBTyxTQUFQLEVBQWtCLE1BQU0sU0FBTixFQUFpQixVQUFVLFNBQVYsRUFBcUIsS0FBSyxJQUFMLEVBQVcsT0FBTyxTQUFQLEVBQWtCLFVBQVUsRUFBRSxNQUFNLElBQU4sRUFBWixFQUY5RSxFQUdULEVBQUUsT0FBTyxjQUFQLEVBQXVCLE1BQU0sY0FBTixFQUFzQixVQUFVLGNBQVYsRUFBMEIsS0FBSyxJQUFMLEVBQVcsT0FBTyxjQUFQLEVBQXVCLFVBQVUsRUFBRSxNQUFNLElBQU4sRUFBWixFQUhsRyxFQUlULEVBQUUsT0FBTyxVQUFQLEVBQW1CLE1BQU0sVUFBTixFQUFrQixVQUFVLFVBQVYsRUFBc0IsS0FBSyxJQUFMLEVBQVcsT0FBTyxVQUFQLEVBQW1CLFVBQVUsRUFBRSxNQUFNLElBQU4sRUFBWixFQUpsRixFQUtULEVBQUUsT0FBTyxVQUFQLEVBQW1CLE1BQU0sVUFBTixFQUFrQixVQUFVLFVBQVYsRUFBc0IsS0FBSyxJQUFMLEVBQVcsT0FBTyxVQUFQLEVBQW1CLFVBQVUsRUFBRSxNQUFNLElBQU4sRUFBWixFQUxsRixFQU1ULEVBQUUsT0FBTyxlQUFQLEVBQXdCLE1BQU0sZUFBTixFQUF1QixVQUFVLGVBQVYsRUFBMkIsS0FBSyxJQUFMLEVBQVcsT0FBTyxlQUFQLEVBQXdCLFVBQVUsRUFBRSxNQUFNLEtBQU4sRUFBWixFQU50RyxDQUFYLEVBSDhCOztBQWE5QixlQUFLLE1BQUwsR0FBYyxNQUFkLENBYjhCOzs7ZUFEckI7Ozs7O0FBb0JQLDhCQURMLE9BQU8sbUJBQVA7QUFHQyxpQkFGSSxhQUVKLENBQVksWUFBWixFQUEwQjtnQ0FGdEIsZUFFc0I7O0FBQ3hCLGVBQUssZUFBTCxHQUF1QixZQUF2QixDQUR3QjtTQUExQjs7QUFGSSxnQ0FNSixtQkFBSSx1QkFBdUIsTUFBTTtBQUMvQixjQUFJLHNCQUFzQixrQkFBdEIsR0FBMkMsSUFBM0MsQ0FBZ0Q7bUJBQUssRUFBRSxNQUFGLENBQVMsUUFBVCxDQUFrQixJQUFsQixLQUEyQixJQUEzQjtXQUFMLENBQXBELEVBQTJGO0FBQ3pGLGdCQUFJLFNBQVMsS0FBSyxlQUFMLENBQXFCLE1BQXJCLENBQTRCLE1BQTVCLEtBQXVDLEtBQXZDLENBRDRFO0FBRXpGLGdCQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1gscUJBQU8sS0FBSyxNQUFMLENBQVksSUFBSSxRQUFKLENBQWEsT0FBYixDQUFaLENBQVAsQ0FEVzthQUFiO1dBRkY7QUFNQSxpQkFBTyxNQUFQLENBUCtCOzs7ZUFON0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
