var mongoose = require('mongoose');
var User = mongoose.model('user');
var bcrypt = require('bcryptjs');

module.exports = {
  index: function(req, res){
    var users = User.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      var users = User.findOne({email:req.params.id}, function(err,data){
        if (err) {
          res.json (err);
          return;
        }
        res.json(data);
      });
  },
  create: function(req, res){
    var user = new User(req.body);
    if (req.body.password !== req.body.passwordC){
      let errors = "Passwords do not match";
      res.json(errors);
    }else{
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
          if(err){
            console.log(err);
          }
          user.password = hash;
          user.email = user.email.toLowerCase();
          user.save(function (err, data){
            if (err) {
              res.json(err);
              return;
            }else {
              res.json(data);
            }
          });
        });
      });
    }
  },
  destroy: function(req, res) {
    User.remove({id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    User.update({email:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
