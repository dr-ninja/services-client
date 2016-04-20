'use strict';

System.register(['authConfig'], function (_export, _context) {
  var config;
  return {
    setters: [function (_authConfig) {
      config = _authConfig.default;
    }],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-dialog').plugin('aurelia-auth', function (baseConfig) {
          baseConfig.configure(config);
        }).plugin('aurelia-validation', function (config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87OztBQUVBLGVBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUNqQyxnQkFBUSxHQUFSLENBQ0cscUJBREgsR0FFRyxrQkFGSCxHQUdHLE1BSEgsQ0FHVSxnQkFIVixFQUlHLE1BSkgsQ0FJVSxjQUpWLEVBSTBCLFVBQUMsVUFBRCxFQUFjO0FBQ3BDLHFCQUFXLFNBQVgsQ0FBcUIsTUFBckIsRUFEb0M7U0FBZCxDQUoxQixDQU9HLE1BUEgsQ0FPVSxvQkFQVixFQU9pQyxVQUFDLE1BQUQsRUFBWTtBQUFFLGlCQUFPLFNBQVAsQ0FBaUIsT0FBakIsRUFBRjtTQUFaLENBUGpDLENBUUcsZUFSSCxDQVFtQiw4QkFSbkIsRUFTRyxlQVRILENBU21CLHNDQVRuQixFQVVHLGVBVkgsQ0FVbUIscUNBVm5CLEVBRGlDOztBQXFCakMsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtpQkFBTSxRQUFRLE9BQVI7U0FBTixDQUFyQixDQXJCaUM7T0FBNUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
