System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.1.2",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.6",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "moment": "npm:moment@2.12.0",
    "pikaday": "github:dbushell/Pikaday@1.4.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:dbushell/Pikaday@1.4.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.1.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.6",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.4": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.6": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build.js": [
      "account-api.js",
      "api-client.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "appointments.html!github:systemjs/plugin-text@0.0.3.js",
      "appointments.js",
      "backupManager.js",
      "blur-image.js",
      "child-router.html!github:systemjs/plugin-text@0.0.3.js",
      "child-router.js",
      "client-factory.js",
      "client.html!github:systemjs/plugin-text@0.0.3.js",
      "client.js",
      "clients-statistics.html!github:systemjs/plugin-text@0.0.3.js",
      "clients-statistics.js",
      "clients.html!github:systemjs/plugin-text@0.0.3.js",
      "clients.js",
      "custom-elements/input-field.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/input-field.js",
      "custom-elements/keep.js",
      "custom-elements/pickadate.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/pickadate.js",
      "custom-elements/search-field.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/search-field.js",
      "custom-elements/svg-icons.html!github:systemjs/plugin-text@0.0.3.js",
      "local-storage-manager.js",
      "login.html!github:systemjs/plugin-text@0.0.3.js",
      "login.js",
      "main.js",
      "multi-observer.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "nav-bar.js",
      "npm:moment@2.12.0.js",
      "npm:moment@2.12.0/moment.js",
      "products.html!github:systemjs/plugin-text@0.0.3.js",
      "products.js",
      "service-types.html!github:systemjs/plugin-text@0.0.3.js",
      "service-types.js",
      "services.html!github:systemjs/plugin-text@0.0.3.js",
      "services.js",
      "styles.css!github:systemjs/plugin-text@0.0.3.js",
      "utils.js",
      "widgets/client-form.html!github:systemjs/plugin-text@0.0.3.js",
      "widgets/client-form.js"
    ],
    "aurelia.js": [
      "github:github/fetch@0.10.1.js",
      "github:github/fetch@0.10.1/fetch.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.1.2/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.1.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.4.js",
      "npm:aurelia-framework@1.0.0-beta.1.1.4/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.1.4/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1.js",
      "npm:aurelia-history@1.0.0-beta.1.1.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.1.3/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1.js",
      "npm:aurelia-loader@1.0.0-beta.1.1.1/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.1.4/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.2.js",
      "npm:aurelia-logging@1.0.0-beta.1.1.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6.js",
      "npm:aurelia-metadata@1.0.0-beta.1.1.6/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.1.4/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1.js",
      "npm:aurelia-pal@1.0.0-beta.1.1.1/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.1.1.js",
      "npm:aurelia-path@1.0.0-beta.1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.6.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.0.6/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.1.3.js",
      "npm:aurelia-router@1.0.0-beta.1.1.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.1.2/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.1.3/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.1.2/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.4.js",
      "npm:aurelia-templating@1.0.0-beta.1.1.4/aurelia-templating.js"
    ]
  },
  depCache: {
    "npm:moment@2.12.0.js": [
      "npm:moment@2.12.0/moment"
    ],
    "account-api.js": [
      "aurelia-fetch-client",
      "aurelia-router",
      "fetch",
      "aurelia-framework",
      "utils",
      "local-storage-manager"
    ],
    "api-client.js": [
      "aurelia-fetch-client",
      "fetch",
      "aurelia-framework",
      "utils",
      "local-storage-manager",
      "client-factory",
      "backupManager",
      "aurelia-router",
      "moment"
    ],
    "app.js": [
      "aurelia-router",
      "utils",
      "aurelia-framework",
      "local-storage-manager"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "client.js": [
      "aurelia-framework",
      "api-client"
    ],
    "clients.js": [
      "aurelia-framework",
      "api-client",
      "aurelia-router",
      "aurelia-binding"
    ],
    "custom-elements/input-field.js": [
      "aurelia-framework"
    ],
    "custom-elements/keep.js": [
      "aurelia-framework"
    ],
    "custom-elements/pickadate.js": [
      "aurelia-framework",
      "pikaday"
    ],
    "custom-elements/search-field.js": [
      "aurelia-framework"
    ],
    "login.js": [
      "aurelia-framework",
      "account-api"
    ],
    "multi-observer.js": [
      "aurelia-framework",
      "aurelia-binding"
    ],
    "nav-bar.js": [
      "aurelia-framework",
      "account-api",
      "utils"
    ],
    "widgets/client-form.js": [
      "aurelia-framework",
      "multi-observer"
    ]
  }
});