var mongoose = require('mongoose')
var Question = mongoose.model('question')
var User = mongoose.model('user')

module.exports = {
  index: function(req, res){
    var questions = Question.find({}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  usersQuestions: function(req, res){
    var questions = Question.find({user:req.user._id}, function (err,data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  show: function(req,res){
      Question.findOne({_id:req.params.id}, function(err, question){
        User.findOne({_id:question.user}, function(err, user){
          if (err) {
            res.json (err);
            return;
          }
          res.json({question:question, user:{email:user.email, first_name:user.first_name, last_name: user.last_name}});
        })
      });
  },
  create: function(req, res){
    var question = new Question(req.body);
    question.user = req.user._id;
    question.save(function (err, data){
      if (err) {
        res.json(err);
        return;
      }
      res.json(data);
    });
  },
  destroy: function(req, res) {
    Question.remove({_id:req.params.id}, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
  update: function(req, res) {
    Question.update({_id:req.params.id}, req.body, function(err, data){
      if (err) {
        res.json (err);
        return;
      }
      res.json(data);
    });
  },
}
