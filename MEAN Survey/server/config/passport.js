const LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('user');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  // Local Strategy
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
  },
  function(username, password, done){
    // match email
    let query = {email:username.toLowerCase()};
    User.findOne(query, function(err, user){
      if (err) {
        throw err;
      }if (!user) {
        return done(null, false, {message:'No User Found'});
      }
      // Match password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if (err) {
          throw err;
        }if (isMatch) {
          return done(null, user);
        }else {
          return done(null, false, {message:'Wrong Password'});
        }
      });
    });
  }));
  passport.serializeUser(function(user, done){
    done(null, user);
  });
  passport.deserializeUser(function(user, done){
      done(null, user);
  });
}
