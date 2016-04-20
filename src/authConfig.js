var configForDevelopment = {
  providers: {
    google: {
      clientId: '931548715504-e2kd313efq5s9fhnqv4d7vt0msoj7lld.apps.googleusercontent.com',
      name: 'google',
      url: 'auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      display: 'popup',
      type: '2.0'
    }

  }
};

var configForProduction = {
  providers: {
    google: {
      clientId: '931548715504-e2kd313efq5s9fhnqv4d7vt0msoj7lld.apps.googleusercontent.com',
      name: 'google',
      url: 'auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      display: 'popup',
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
