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
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
    "aurelia-auth": "npm:aurelia-auth@2.1.3",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-dialog": "npm:aurelia-dialog@0.5.10",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "aurelia-validation": "npm:aurelia-validation@0.6.7",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.6.1",
    "fullcalendar": "npm:fullcalendar@2.7.0-beta",
    "jquery-ui": "github:components/jqueryui@1.11.4",
    "jquery-ui-touch-punch": "npm:jquery-ui-touch-punch@0.2.3",
    "moment": "npm:moment@2.13.0",
    "pikaday": "github:dbushell/Pikaday@1.4.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:components/jqueryui@1.11.4": {
      "jquery": "npm:jquery@2.2.3"
    },
    "github:dbushell/Pikaday@1.4.0": {
      "css": "github:systemjs/plugin-css@0.1.21"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-auth@2.1.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.2",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dialog@0.5.10": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-http-client@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-validation@0.6.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:font-awesome@4.6.1": {
      "css": "github:systemjs/plugin-css@0.1.21"
    },
    "npm:fullcalendar@2.7.0-beta": {
      "jquery": "npm:jquery@2.2.3",
      "moment": "npm:moment@2.13.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.11.0"
    },
    "npm:node-fetch@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "inline-process-browser": "npm:inline-process-browser@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.16",
      "esprima": "npm:esprima@2.7.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.34"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.11.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build.js": [
      "account-api.js",
      "api.js",
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "appointments.html!github:systemjs/plugin-text@0.0.3.js",
      "appointments.js",
      "authConfig.js",
      "backup-manager.js",
      "custom-elements/input-field.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/input-field.js",
      "custom-elements/keep.js",
      "custom-elements/pickadate.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/pickadate.js",
      "custom-elements/search-field.html!github:systemjs/plugin-text@0.0.3.js",
      "custom-elements/search-field.js",
      "custom-elements/svg-icons.html!github:systemjs/plugin-text@0.0.3.js",
      "factory.js",
      "local-storage-manager.js",
      "login.html!github:systemjs/plugin-text@0.0.3.js",
      "login.js",
      "main.js",
      "multi-observer.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "nav-bar.js",
      "npm:moment@2.13.0.js",
      "npm:moment@2.13.0/moment.js",
      "pages/clients/client-form.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/clients/client-form.js",
      "pages/clients/client.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/clients/client.js",
      "pages/clients/clients-statistics.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/clients/clients-statistics.js",
      "pages/clients/clients.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/clients/clients.js",
      "pages/modal/my-modal.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/modal/my-modal.js",
      "pages/stypes/service-type-statistics.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/stypes/service-type-statistics.js",
      "pages/stypes/service-type.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/stypes/service-type.js",
      "pages/stypes/service-types.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/stypes/service-types.js",
      "pages/stypes/stype-form.html!github:systemjs/plugin-text@0.0.3.js",
      "pages/stypes/stype-form.js",
      "services.html!github:systemjs/plugin-text@0.0.3.js",
      "services.js",
      "styles.css!github:systemjs/plugin-text@0.0.3.js",
      "utils.js"
    ],
    "aurelia.js": [
      "github:github/fetch@0.11.0.js",
      "github:github/fetch@0.11.0/fetch.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css.js",
      "npm:aurelia-auth@2.1.3.js",
      "npm:aurelia-auth@2.1.3/aurelia-auth.js",
      "npm:aurelia-auth@2.1.3/auth-fetch-config.js",
      "npm:aurelia-auth@2.1.3/auth-service.js",
      "npm:aurelia-auth@2.1.3/auth-utilities.js",
      "npm:aurelia-auth@2.1.3/authentication.js",
      "npm:aurelia-auth@2.1.3/authorize-step.js",
      "npm:aurelia-auth@2.1.3/base-config.js",
      "npm:aurelia-auth@2.1.3/oAuth1.js",
      "npm:aurelia-auth@2.1.3/oAuth2.js",
      "npm:aurelia-auth@2.1.3/popup.js",
      "npm:aurelia-auth@2.1.3/storage.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.2.2/aurelia-binding.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@0.5.10.js",
      "npm:aurelia-dialog@0.5.10/aurelia-dialog.js",
      "npm:aurelia-dialog@0.5.10/dialog-configuration.js",
      "npm:aurelia-dialog@0.5.10/dialog-controller.js",
      "npm:aurelia-dialog@0.5.10/dialog-options.js",
      "npm:aurelia-dialog@0.5.10/dialog-service.js",
      "npm:aurelia-dialog@0.5.10/lifecycle.js",
      "npm:aurelia-dialog@0.5.10/renderers/dialog-renderer.js",
      "npm:aurelia-dialog@0.5.10/renderers/renderer.js",
      "npm:aurelia-dialog@0.5.10/resources/ai-dialog-body.js",
      "npm:aurelia-dialog@0.5.10/resources/ai-dialog-footer.js",
      "npm:aurelia-dialog@0.5.10/resources/ai-dialog-header.js",
      "npm:aurelia-dialog@0.5.10/resources/ai-dialog.js",
      "npm:aurelia-dialog@0.5.10/resources/attach-focus.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.1.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1.js",
      "npm:aurelia-path@1.0.0-beta.1.2.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-router@1.0.0-beta.1.2.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.1.1/aurelia-task-queue.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.2/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.2.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.2/aurelia-templating.js",
      "npm:aurelia-validation@0.6.7.js",
      "npm:aurelia-validation@0.6.7/debouncer.js",
      "npm:aurelia-validation@0.6.7/decorators.js",
      "npm:aurelia-validation@0.6.7/index.js",
      "npm:aurelia-validation@0.6.7/path-observer.js",
      "npm:aurelia-validation@0.6.7/strategies/twbootstrap-view-strategy.js",
      "npm:aurelia-validation@0.6.7/utilities.js",
      "npm:aurelia-validation@0.6.7/validate-custom-attribute.js",
      "npm:aurelia-validation@0.6.7/validation-config.js",
      "npm:aurelia-validation@0.6.7/validation-group-builder.js",
      "npm:aurelia-validation@0.6.7/validation-group.js",
      "npm:aurelia-validation@0.6.7/validation-locale.js",
      "npm:aurelia-validation@0.6.7/validation-property.js",
      "npm:aurelia-validation@0.6.7/validation-result.js",
      "npm:aurelia-validation@0.6.7/validation-rules-collection.js",
      "npm:aurelia-validation@0.6.7/validation-rules.js",
      "npm:aurelia-validation@0.6.7/validation-view-strategy.js",
      "npm:aurelia-validation@0.6.7/validation.js",
      "npm:isomorphic-fetch@2.2.1.js",
      "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js",
      "npm:whatwg-fetch@0.11.0.js",
      "npm:whatwg-fetch@0.11.0/fetch.js"
    ]
  },
  depCache: {
    "npm:moment@2.13.0.js": [
      "npm:moment@2.13.0/moment"
    ],
    "account-api.js": [
      "aurelia-fetch-client",
      "aurelia-router",
      "fetch",
      "aurelia-framework",
      "utils",
      "factory",
      "local-storage-manager"
    ],
    "api.js": [
      "aurelia-fetch-client",
      "fetch",
      "aurelia-framework",
      "utils",
      "local-storage-manager",
      "factory",
      "aurelia-router"
    ],
    "app.js": [
      "aurelia-router",
      "aurelia-framework",
      "local-storage-manager",
      "aurelia-auth"
    ],
    "appointments.js": [
      "./pages/modal/my-modal",
      "aurelia-dialog",
      "aurelia-framework"
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
    "factory.js": [
      "backup-manager",
      "moment"
    ],
    "login.js": [
      "aurelia-framework",
      "account-api",
      "aurelia-validation",
      "aurelia-auth"
    ],
    "main.js": [
      "authConfig"
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
    "pages/clients/client-form.js": [
      "aurelia-framework",
      "multi-observer",
      "aurelia-validation"
    ],
    "pages/clients/client.js": [
      "aurelia-framework",
      "api"
    ],
    "pages/clients/clients.js": [
      "aurelia-framework",
      "api",
      "aurelia-router",
      "aurelia-binding"
    ],
    "pages/modal/my-modal.js": [
      "aurelia-dialog"
    ],
    "pages/stypes/service-type.js": [
      "aurelia-framework",
      "api"
    ],
    "pages/stypes/service-types.js": [
      "aurelia-framework",
      "api",
      "aurelia-router",
      "aurelia-binding"
    ],
    "pages/stypes/stype-form.js": [
      "aurelia-framework",
      "multi-observer",
      "aurelia-validation"
    ],
    "services.js": [
      "aurelia-framework",
      "fullcalendar",
      "jquery-ui",
      "jquery-ui-touch-punch"
    ]
  }
});