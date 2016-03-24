'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-validation', function (config) {
          config.useLocale('pt-BR');
        }).globalResources('../dist/custom-elements/keep').globalResources('../dist/custom-elements/search-field').globalResources('../dist/custom-elements/input-field');

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZILEdBR0csTUFISCxDQUdVLG9CQUhWLEVBR2lDLFVBQUMsTUFBRCxFQUFZO0FBQUUsaUJBQU8sU0FBUCxDQUFpQixPQUFqQixFQUFGO1NBQVosQ0FIakMsQ0FJRyxlQUpILENBSW1CLDhCQUpuQixFQUtHLGVBTEgsQ0FLbUIsc0NBTG5CLEVBTUcsZUFOSCxDQU1tQixxQ0FObkIsRUFEaUM7O0FBaUJqQyxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO2lCQUFNLFFBQVEsT0FBUjtTQUFOLENBQXJCLENBakJpQztPQUE1QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
