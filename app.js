var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);

app.use(function(req, res, next){
  //Is this request coming from Heroku?
  //If so, let them log in if they haven't already.

  //Is this request not from Heroku?
  //Check their database is configured.
  //If it's not, make them configure it.
  //If it is, make sure they're logged in.

  console.log('User logged in?');
  if ( req.path == '/login') return next();
  res.redirect('/login');
  //next();
});

app.get('/login', function(req, res){
  res.render('index', {
    layout: 'layouts/login'
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
  url = 'mongodb://'+req.body.host+':'+req.body.port+'/'+req.body.name;
  console.log(url);
  
    MongoClient.connect(url, function(err, db){
      if(err){
        console.log(err);
        res.render('setup-db', {
          title: 'Database Connection',
          failure: 'We couldn\'t connect to your database. Are you sure you entered the right details and it\'s running?'
        });
      }else{
        res.redirect('/create-user');
      }
    });
  
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
