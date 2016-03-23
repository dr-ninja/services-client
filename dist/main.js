'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().globalResources('../dist/custom-elements/keep').globalResources('../dist/custom-elements/search-field').globalResources('../dist/custom-elements/input-field');

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZILEdBR0csZUFISCxDQUdtQiw4QkFIbkIsRUFJRyxlQUpILENBSW1CLHNDQUpuQixFQUtHLGVBTEgsQ0FLbUIscUNBTG5CLEVBRGlDOztBQWdCakMsZ0JBQVEsS0FBUixHQUFnQixJQUFoQixDQUFxQjtpQkFBTSxRQUFRLE9BQVI7U0FBTixDQUFyQixDQWhCaUM7T0FBNUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
