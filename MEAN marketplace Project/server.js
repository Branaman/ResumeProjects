var express=require('express'),
app = express(),
path = require('path'),
session = require('express-session'),
passport = require('passport');
app.use(express.static(path.join(__dirname, '/public/dist')));
var bodyparser = require('body-parser');
app.use(session({ secret:'Blackbelt Buddah'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
require('./server/config/mongoose.js');
require('./server/config/passport.js')(passport);
require('./server/config/routes.js')(app);

app.listen(8147, function() {});
