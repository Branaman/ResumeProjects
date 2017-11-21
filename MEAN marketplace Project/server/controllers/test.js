var mongoose = require('mongoose')
var Test = mongoose.model('test')
var User = mongoose.model('user')

module.exports = {
  index: function(req, res){
    var tests = Test.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  usersTests: function(req, res){
    var tests = Test.find({user:req.user._id}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      Test.findOne({_id:req.params.id}, function(err, test){
        User.findOne({_id:test.user}, function(err, user){
          if (err) {
            res.json (err);
            return;
          }
          res.json({test:test, user:{email:user.email, first_name:user.first_name, last_name: user.last_name}});
        })
      });
  },
  create: function(req, res){
    var test = new Test(req.body);
    test.user = req.user.first_name;
    test.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Test.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Test.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
