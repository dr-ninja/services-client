System.register(['bootstrap'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  return {
    setters: [function (_bootstrap) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUFDOztBQVN4QixXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQU0sT0FBTyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUMvQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG5cbiAgLy9VbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cbiAgLy9hdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJyk7XG4gIC8vaWYgdGhlIGNzcyBhbmltYXRvciBpcyBlbmFibGVkLCBhZGQgc3dhcC1vcmRlcj1cImFmdGVyXCIgdG8gYWxsIHJvdXRlci12aWV3IGVsZW1lbnRzXG5cbiAgLy9BbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXG4gIC8vYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWh0bWwtaW1wb3J0LXRlbXBsYXRlLWxvYWRlcicpXG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
