var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./User');

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_CALLBACK) {
  var configuration = require('./configuration');
}

/* Passport session setup.
*   To support persistent login sessions, Passport needs to be able to
*   serialize users into and deserialize users out of the session. Here
*   we store the user's google id when serializing, and find the user by
*   google id when deserializing.
*/
passport.serializeUser(function(user, done) {
  console.log('Serializing:', user);
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  console.log('Deserializing: ', user.profile.id);
  done(null, user.id);
});

/* Use the Google within Passport.
*   Strategies in Passport require a `verify` function, which accept
*   credentials (in this case, an accessToken, refreshToken, and GitHub
*   profile), and invoke a callback with a user object.
*/
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || configuration.google_client_id,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || configuration.google_client_secret,
    callbackURL: process.env.GOOGLE_CALLBACK || configuration.google_callback,
    scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar']
  },
  function(accessToken, refreshToken, profile, done) {
    if ( !User ) {
      //Create User
      console.log('Creating User');
      return done(null, profile);
    } else {
      console.log('Found User', profile);
      User.name = profile.name;
      User.googleId = profile.id;
      User.refreshToken = refreshToken;
      User.accessToken = accessToken;
      return done(null, profile);
    }
  }
));

module.exports = passport;
