import config from 'authConfig';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog')
    .plugin('aurelia-auth', (baseConfig)=>{
      baseConfig.configure(config);
    })
    .plugin('aurelia-validation',  (config) => { config.useLocale('pt-BR'); })
    .globalResources('../dist/custom-elements/keep')
    .globalResources('../dist/custom-elements/search-field')
    .globalResources('../dist/custom-elements/input-field')
    ;

  //Uncomment the line below to enable animation.
 // aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
