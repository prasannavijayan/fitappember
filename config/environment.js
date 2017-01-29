/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fitapp',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      // a 'session' property will be injected on routes and controllers
      sessionServiceName: 'session',
      providers: {
        'google-oauth2-bearer': {
          apiKey:      process.env.OAUTH_CLIENT_ID,
          redirectUri: process.env.OAUTH_CALLBACK, // default is the current URL
          scope: "https://www.googleapis.com/auth/fitness.activity.read email"
        }
      }
    }
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'index',
    routeAfterAuthentication: "validate"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
