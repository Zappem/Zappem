var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var validator = require('express-validator');
var routes = require('./routes');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var noDB = false;

function checkDBConnection(){
  var maggotConf = {};
  try{
    maggotConf = require('./maggotConfig');
  }catch(err){
    
    //Now check if the env is set.
    if(process.env.MONGODB_URI){
      maggotConf.dburl = process.env.MONGODB_URI;
    }else{
      noDB = true;
    }
  }

  if(!noDB){
    //Let's just double check it works
    mongoose.connect(maggotConf.dburl);

    mongoose.connection.on('error', function(err){
      noDB = true;
      return maggotConf;
    }).on('open', function(){
      return maggotConf;
    });
  }
}

maggotConf = checkDBConnection();

// var User = require('./models/user');

// User.find({}, function(err, users){
//   if(err) throw err;
//   console.log(users);
// });
// var newUser = User({
//   first_name: "Dan"
// });

// newUser.save(function(err){
// if(err) throw err;
//   console.log('Done!!!');
// });


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('layout', 'layouts/default');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(validator());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//app.use(express.static(maggotConf));

app.use('/', routes);


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    var User = require('./models/user');
    User.findOne({email: username}, function(err, user){
      if(err) return done(err);
      if(!user) return done(null, false);
      bcrypt.compare(password, user.password, function(err, res){
        if(!res) return done(null, false);
        return done(null, user);
      });
    });
  }
));

// Error Handlers!

// The route wasn't found so let's set the status as 404.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  err.message = "Page Not Found";
  next(err);
});

// If it's development, let's output the stack.
// If it's production, don't show it.
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      title: err.status+" Error",
      error: (app.get('env') === 'development' ? err : {}),
      layout: 'layouts/login'
    });
  });
}



module.exports = app;
