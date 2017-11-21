var mongoose = require('mongoose');
var passport = require('passport');
var path = require('path');
var questionCrontroller = require('../controllers/question.js');
var testCrontroller = require('../controllers/test.js');
var userCrontroller = require('../controllers/user.js');
module.exports = (function(app){
  app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
  });
  // questions
  app.get('/myquestions', (req, res, next)=>{
    questionCrontroller.usersQuestions(req, res);
  });
  app.get('/questions', (req, res, next)=>{
    questionCrontroller.index(req, res);
  });
  app.post('/questions', (req, res, next)=>{
    questionCrontroller.create(req, res);
  });
  app.get('/questions/:id', (req, res, next)=>{
    questionCrontroller.show(req, res);
  });
  app.delete('/questions/:id', (req, res, next)=>{
    questionCrontroller.destroy(req, res);
  });
  app.put('/questions/:id', (req, res, next)=>{
    questionCrontroller.update(req, res);
  });
  // tests
  app.get('/mytests', (req, res, next)=>{
    testCrontroller.usersQuestions(req, res);
  });
  app.get('/tests', (req, res, next)=>{
    testCrontroller.index(req, res);
  });
  app.post('/tests', (req, res, next)=>{
    testCrontroller.create(req, res);
  });
  app.get('/tests/:id', (req, res, next)=>{
    testCrontroller.show(req, res);
  });
  app.delete('/tests/:id', (req, res, next)=>{
    testCrontroller.destroy(req, res);
  });
  app.put('/tests/:id', (req, res, next)=>{
    testCrontroller.update(req, res);
  });
  // users
  app.post('/users', (req, res, next)=>{
    userCrontroller.create(req, res);
  });
  // login
  app.post('/login', (req,res,next)=>{
    passport.authenticate('local', function(err, user, info) {
      if (err) { return res.json(err); }
      if (!user) { return res.json(info); }
      req.logIn (user, function(err){
        if (err) {
          return res.json(err);
        }return res.json(req.user.first_name);
      });
    })(req, res, next);
  });
  app.get('/logout', (req,res,next)=>{
    req.logout();
    res.redirect('/');
  });
  app.get('/checkLogIn', (req, res, next)=>{
    if (req.user) {
      res.json(req.user.first_name);
    }else{
      res.json(false);
    }
  });
  // Unused CRUD functionality
  // app.get('/users', (req, res, next)=>{
  //   userCrontroller.index(req, res);
  // });
  // app.get('/users/:id', (req, res, next)=>{
  //   userCrontroller.show(req, res);
  // });
  // app.delete('/users/:id', (req, res, next)=>{
  //   userCrontroller.destroy(req, res);
  // });
  // app.put('/users/:id', (req, res, next)=>{
  //   userCrontroller.update(req, res);
  // });
  // app.get('/dashboard', (req, res, next)=>{
  //   res.sendFile(path.resolve("./public/dist/index.html"));
  // })
  app.all("*", (req, res, next) => {
    if (!req.user) {
      res.redirect('/');
    }
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
});
