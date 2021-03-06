//const User = require('mongoose').model('User');
const db = require('../models')
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    password: password.trim(),
  };

  const newUser = new db.User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
