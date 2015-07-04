var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configuration = require('./configuration');

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
    clientID: process.env.google_ID || configuration.google_clientID,
    clientSecret: process.env.google_clientSecret || configuration.google_clientSecret,
    callbackURL: process.env.google_CB || configuration.google_CB,
    scope: process.env.google_scope || configuration.google_scope
  },
  function(accessToken, refreshToken, profile, done) {
      console.log('Found User', profile);
      return done(profile, accessToken, refreshToken);
    }
));

module.exports = passport;
