var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var maggotConf = {};
var noDB = false;

function checkDBConnection(){
  try{
    maggotConf = require('./maggotConfig');
  }catch(err){
    
    //Now check if the env is set.
    if(process.env.MONGODB_URI){
      maggotConf.dburl = process.env.MONGODB_URI;
      console.log(maggotConf);
    }else{
      noDB = true;
    }
  }

  if(!noDB){
    //Let's just double check it works.
    MongoClient.connect(maggotConf.dburl, function(err, db){
      if(err){
        console.log(err);
        noDB = true;
        return;
      }
      db.close();
    });
  }
  return maggotConf;
}

maggotConf = checkDBConnection();

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('layout', 'layouts/default');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    MongoClient.connect(maggotConf.dburl, function(err, db){
      var users = db.collection('users');
      users.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        bcrypt.compare(password, user.password, function(err, res) {
            if(!res){
              return done(null, false);
            }
            return done(null, user);
        });
      });

    });
  }
));



//app.use('/', routes);


//app.use(passport.authenticate('local', { failureRedirect: '/login'}), function(req, res, next){
//app.use(isAuthenticated, function(req, res){
app.use(function(req, res, next){


  if(noDB && req.path != '/setup-db'){
    console.log('NO DB');
    res.redirect('/setup-db');
    return next();
  }

  console.log(req.path);

  if ( req.path == '/login' || req.path == '/forgotten-password' || req.path == '/sign-up' || req.path == '/setup-db') return next();

  passport.authenticate('local', {failureRedirect: '/login'});
  //res.redirect('/login');

  return next();
});

app.get('/login', function(req, res){
  res.render('login', {
    layout: 'layouts/login',
    login_error: req.flash('error')[0]
  });
});

app.post('/login', passport.authenticate('local', {failureRedirect: '/login', failureFlash: "Invalid username or password"}), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/dashboard');
});

app.get('/sign-up', function(req, res){
  res.render('signup', {
    layout: 'layouts/login'
  });
});

app.post('/sign-up', function(req, res){

  var inputs = req.body,
      formerror = null;

  //Let's ensure the inputs are correct.
  if(inputs.first == ""){
    formerror = "Please enter your first name";
  }
  if(inputs.last == ""){
    formerror = "Please enter your last name";
  }
  if(inputs.email == ""){
    formerror = "Please provide a valid email address";
  }
  if(inputs.password == ""){
    formerror = "Please enter a password";
  }
  if(inputs.confirmpassword != inputs.password){
    formerror = "Your passwords did not match";
  }

  if(formerror){
    res.render('signup', {
      formerror: formerror,
      oldfirst: inputs.first,
      oldlast: inputs.last,
      oldemail: inputs.email,
      layout: 'layouts/login'
    });
    return;
  }

console.log(maggotConf.dburl);
  //Looks legit.
  MongoClient.connect(maggotConf.dburl, function(err, db){
    if(err){
      return;
    }

    bcrypt.hash(inputs.password, 10, function(err, hash){
      var users = db.collection('users');

      users.insertMany([
        {
          first_name: inputs.first,
          last_name: inputs.last,
          email: inputs.email,
          password: hash,
          created_at: new Date().getTime()
        }
      ]);
      db.close();

      //Now take them to a success page.
      res.redirect('/dashboard');

    });
  });

});

app.get('/dashboard', function(req, res){
  res.render('dashboard', {
    title: 'Dashboard'
  });
});


app.get('/', function(req, res){
  res.render('index', {
    'title': 'Getting Started'
  });
});

app.get('/setup-db', function(req, res){
  res.render('setup-db', {
    'title': 'Database Connection'
  });
});

var url = null;

app.post('/setup-db', function(req, res){
  console.log(req.body);
  //Now let's see if we can connect.
  //url = 'mongodb://'+req.body.host+':'+req.body.port+'/'+req.body.name;
  
    // MongoClient.connect(maggotConf.dburl, function(err, db){
    //   if(err){
    //     console.log(err);
    //     res.render('setup-db', {
    //       title: 'Database Connection',
    //       failure: 'We couldn\'t connect to your database. Are you sure you entered the right details and it\'s running?'
    //     });
    //   }else{
    //     res.redirect('/create-user');
    //   }
    // });
  
});

app.get('/create-user', function(req, res){
  
  if(!url){
    res.redirect('/');
    return;
  }

  res.render('done', {
          title: 'OMG!'
        });
});

app.post('/create-user', function(req, res){
  //Let's just make sure the DB connection still works.
  console.log(url);
  if(!url){
    res.redirect('/');
    return;
  }

  MongoClient.connect(url, function(err, db){
    if(err){
      res.redirect('/');
      return;
    }

    var errormsg = null;
    if(req.body.password != req.body.confirmpassword){
      errormsg = "Your passwords did not match";
    }

    if(req.body.name == ""){
      errormsg = "Please enter a name";
    }

    if(req.body.email == ""){
      errormsg = "Please enter an email";
    }

    if(errormsg){
      res.render('done', {
        title: 'OMG!',
        formerror: errormsg,
        oldname: req.body.name,
        oldemail: req.body.email
      });
      return;
    }

    var users = db.collection('users');
    users.insertMany([
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      ], function(err, result){
        if(err){
          console.log('ERROR');
          console.log(err);
        }else{
          console.log('SUCCESS');
        }
        });
  });

});

app.get('/users', function(req, res){
  if(!url){
    res.redirect('/');
    return;
  }

  MongoClient.connect(url, function(err, db){
    if(err){
      res.redirect('/');
      return;
    }
    var users = db.collection('users');

    users.find({}).toArray(function(err, docs){
      if(err){
        console.log('none');
      }else{
        console.log(docs);
        res.render('users', {
          title: "Users",
          users: docs
        });
      }
    })
  })
});

app.get('/exceptions', function(req, res){
  if(!url){
    res.redirect('/');
    return;
  }

  MongoClient.connect(url, function(err, db){
    if(err){
      res.redirect('/');
      return;
    }
    var exceptions = db.collection('exceptions');

    exceptions.find({}).toArray(function(err, docs){
      if(err){
        console.log('none');
      }else{
        res.render('exceptions', {
          title: "Exceptions",
          exceptions: docs
        });
      }
    })
  })
});


app.post('/api/v1/exception', function(req, res){

  MongoClient.connect(url, function(err, db){
    //console.log(req.body);
    var exceptions = db.collection('exceptions');
    exceptions.insertMany([
      {
        exception: req.body.exception,
        message: req.body.message,
        status: req.body.status,
        code: req.body.code,
        file: req.body.file,
        line: req.body.line,
        trace: req.body.trace
      }
    ], function(err, result){
      if(err){
        console.log(err);
      }else{
        console.log('lol');
      }
      db.close();

      });

      
    });
  

});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: err.message,
    error: {}
  });
});


module.exports = app;
