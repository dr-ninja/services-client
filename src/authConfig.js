var configForDevelopment = {
  serverDomain: '//localhost:5000',
  providers: {
    google: {
      clientId: '400465532626-i2u1o5rpnc7m7teh2keo9naqu6gv95n0.apps.googleusercontent.com',
      name: 'google',
      url: 'auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display', 'access_type'],
      display: 'popup',
      accessType: 'offline',
      type: '2.0'
    }
  }
};

var configForProduction = {
  serverDomain: '//api-ilovenails.herokuapp.com',
  providers: {
    google: {
      clientId: '400465532626-sip4u4621nagqtmom5s00dr4l5gl5sek.apps.googleusercontent.com',
      name: 'google',
      url: 'auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display', 'access_type'],
      display: 'popup',
      accessType: 'offline',
      type: '2.0'
    }
  }
};
var config ;
if (window.location.hostname==='localhost') {
  config = configForDevelopment;
}
else{
  config = configForProduction;
}

export default config;
