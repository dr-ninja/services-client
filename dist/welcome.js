System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export) {
  'use strict';

  var computedFrom, inject, HttpClient, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_fetch) {}],
    execute: function () {
      Welcome = (function () {
        function Welcome(http) {
          _classCallCheck(this, _Welcome);

          this.heading = 'Welcome to the Aurelia Navigation App!';
          this.firstName = 'John';
          this.lastName = 'Doe';
          this.previousValue = this.fullName;

          this.http = http;
        }

        _createDecoratedClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'attached',
          value: function attached() {
            return this.http.fetch('//auth-services-api.herokuapp.com/hello', {
              method: 'get',
              headers: new Headers({
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
              })
            }).then(function (response) {
              return alert(response);
            });
          }
        }, {
          key: 'fullName',
          decorators: [computedFrom('firstName', 'lastName')],
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        var _Welcome = Welcome;
        Welcome = inject(HttpClient)(Welcome) || Welcome;
        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQU1hLE9BQU8sRUEwQ1AsbUJBQW1COzs7Ozs7Ozs7O3VDQWhEeEIsWUFBWTtpQ0FHWixNQUFNOzt1Q0FGTixVQUFVOzs7QUFLTCxhQUFPO0FBTVAsaUJBTkEsT0FBTyxDQU1OLElBQUksRUFBRTs7O2VBTGxCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLE1BQU07ZUFDbEIsUUFBUSxHQUFHLEtBQUs7ZUFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFROztBQUczQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7OEJBUlUsT0FBTzs7aUJBbUJaLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNuQyxpQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztXQUNyQzs7O2lCQUVZLHlCQUFHO0FBQ2QsZ0JBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3hDLHFCQUFPLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ25EO1dBQ0Y7OztpQkFFTyxvQkFBRztBQUNULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxFQUFFO0FBQ2hFLG9CQUFNLEVBQUUsS0FBSztBQUNiLHFCQUFPLEVBQUUsSUFBSSxPQUFPLENBQUM7QUFDbkIsOEJBQWMsRUFBRSxZQUFZO0FBQzVCLDZDQUE2QixFQUFFLEdBQUc7ZUFDbkMsQ0FBQzthQUNILENBQUMsQ0FDQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFBQSxDQUFDLENBQUM7V0FDdEM7Ozt1QkF6QkEsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7ZUFDMUIsZUFBRztBQUNiLG1CQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O3VCQWpCVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7OztBQTBDUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBRTtBQUNaLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICdmZXRjaCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xuICBmaXJzdE5hbWUgPSAnSm9obic7XG4gIGxhc3ROYW1lID0gJ0RvZSc7XG4gIHByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuXG4gIGNvbnN0cnVjdG9yKGh0dHApIHtcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICB9XG5cbiAgLy9HZXR0ZXJzIGNhbid0IGJlIGRpcmVjdGx5IG9ic2VydmVkLCBzbyB0aGV5IG11c3QgYmUgZGlydHkgY2hlY2tlZC5cbiAgLy9Ib3dldmVyLCBpZiB5b3UgdGVsbCBBdXJlbGlhIHRoZSBkZXBlbmRlbmNpZXMsIGl0IG5vIGxvbmdlciBuZWVkcyB0byBkaXJ0eSBjaGVjayB0aGUgcHJvcGVydHkuXG4gIC8vVG8gb3B0aW1pemUgYnkgZGVjbGFyaW5nIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhpcyBnZXR0ZXIgaXMgY29tcHV0ZWQgZnJvbSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93XG4gIC8vYXMgd2VsbCBhcyB0aGUgY29ycmVzcG9uZGluZyBpbXBvcnQgYWJvdmUuXG4gIEBjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXG4gIGdldCBmdWxsTmFtZSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuZnVsbE5hbWU7XG4gICAgYWxlcnQoYFdlbGNvbWUsICR7dGhpcy5mdWxsTmFtZX0hYCk7XG4gIH1cblxuICBjYW5EZWFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnLy9hdXRoLXNlcnZpY2VzLWFwaS5oZXJva3VhcHAuY29tL2hlbGxvJywge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gYWxlcnQocmVzcG9uc2UpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
