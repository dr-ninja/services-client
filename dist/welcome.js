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
          this.firstName = 'daniel';
          this.lastName = 'reis';
          this.previousValue = this.fullName;
          this.data = {};

          this.http = http;
        }

        _createDecoratedClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;

            var postData = new FormData();
            postData.append('username', this.firstName);
            postData.append('password', this.lastName);
            return this.http.fetch('//auth-services-api.herokuapp.com/login', {
              method: 'post',
              credentials: 'include',
              body: postData
            }).then(function (response) {
              response.json();
            }).then(function (data) {
              console.log(data);
            });
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'checkDb',
          value: function checkDb() {
            var _this = this;

            return this.http.fetch('//auth-services-api.herokuapp.com/db', {
              method: 'get',
              credentials: 'include'
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              _this.data = data;console.log(data);
            });
          }
        }, {
          key: 'attached',
          value: function attached() {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQU1hLE9BQU8sRUFxRVAsbUJBQW1COzs7Ozs7Ozs7O3VDQTNFeEIsWUFBWTtpQ0FHWixNQUFNOzt1Q0FGTixVQUFVOzs7QUFLTCxhQUFPO0FBT1AsaUJBUEEsT0FBTyxDQU9OLElBQUksRUFBRTs7O2VBTmxCLE9BQU8sR0FBRyx3Q0FBd0M7ZUFDbEQsU0FBUyxHQUFHLFFBQVE7ZUFDcEIsUUFBUSxHQUFHLE1BQU07ZUFDakIsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRO2VBQzdCLElBQUksR0FBRyxFQUFFOztBQUdQLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs4QkFUVSxPQUFPOztpQkFvQlosa0JBQUc7QUFDUCxnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztBQUVuQyxnQkFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUM5QixvQkFBUSxDQUFDLE1BQU0sQ0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO0FBQzlDLG9CQUFRLENBQUMsTUFBTSxDQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7QUFDN0MsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUU7QUFDaEUsb0JBQU0sRUFBRSxNQUFNO0FBQ2QseUJBQVcsRUFBRSxTQUFTO0FBQ3RCLGtCQUFJLEVBQUUsUUFBUTthQUNmLENBQUMsQ0FFQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsc0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqQixDQUFDLENBRUQsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ1oscUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkIsQ0FBQyxDQUFDO1dBR047OztpQkFFWSx5QkFBRztBQUNkLGdCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN4QyxxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDtXQUNGOzs7aUJBRU0sbUJBQUc7OztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFO0FBQzdELG9CQUFNLEVBQUUsS0FBSztBQUNiLHlCQUFXLEVBQUUsU0FBUzthQUN2QixDQUFDLENBQ0MsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFBQyxvQkFBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEFBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFDLENBQUMsQ0FBQztXQUN6RDs7O2lCQUVPLG9CQUFHLEVBTVY7Ozt1QkFqREEsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7ZUFDMUIsZUFBRztBQUNiLG1CQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O3VCQWxCVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7OztBQXFFUCx5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLEtBQUssRUFBRTtBQUNaLG1CQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDckM7OztlQUhVLG1CQUFtQiIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0ICdmZXRjaCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XG4gIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xuICBmaXJzdE5hbWUgPSAnZGFuaWVsJztcbiAgbGFzdE5hbWUgPSAncmVpcyc7XG4gIHByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuICBkYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IoaHR0cCkge1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICAvL0dldHRlcnMgY2FuJ3QgYmUgZGlyZWN0bHkgb2JzZXJ2ZWQsIHNvIHRoZXkgbXVzdCBiZSBkaXJ0eSBjaGVja2VkLlxuICAvL0hvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cbiAgLy9UbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3dcbiAgLy9hcyB3ZWxsIGFzIHRoZSBjb3JyZXNwb25kaW5nIGltcG9ydCBhYm92ZS5cbiAgQGNvbXB1dGVkRnJvbSgnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJylcbiAgZ2V0IGZ1bGxOYW1lKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcblxuICAgIGxldCBwb3N0RGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHBvc3REYXRhLmFwcGVuZCggJ3VzZXJuYW1lJywgdGhpcy5maXJzdE5hbWUgKTtcbiAgICBwb3N0RGF0YS5hcHBlbmQoICdwYXNzd29yZCcsIHRoaXMubGFzdE5hbWUgKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCcvL2F1dGgtc2VydmljZXMtYXBpLmhlcm9rdWFwcC5jb20vbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBib2R5OiBwb3N0RGF0YVxuICAgIH0pXG5cbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcblxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSk7XG5cbiAgICAvL2FsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xuICB9XG5cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPycpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRGIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnLy9hdXRoLXNlcnZpY2VzLWFwaS5oZXJva3VhcHAuY29tL2RiJywge1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7dGhpcy5kYXRhID0gZGF0YTsgY29uc29sZS5sb2coZGF0YSk7fSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgIC8qIHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJy8vYXV0aC1zZXJ2aWNlcy1hcGkuaGVyb2t1YXBwLmNvbS9kYicsIHtcbiAgICAgIG1ldGhvZDogJ2dldCdcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7dGhpcy5kYXRhID0gZGF0YTsgY29uc29sZS5sb2coZGF0YSk7fSk7Ki9cbiAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIFVwcGVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
