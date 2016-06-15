var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res){
	res.render('signup', {
    	layout: 'layouts/login'
  	});
});

router.post('/', function(req, res){

  console.log(maggotConf);
  
	var inputs = req.body;

	req.checkBody("first", "Please enter your first name").notEmpty();
	req.checkBody("last", "Please enter your last name").notEmpty();
	req.checkBody("email", "Please provide a valid email address").isEmail();
	req.checkBody("password", "Your password must be at least 8 characters").isLength({min:8});
	req.checkBody("confirmpassword", "Your passwords did not match").equals(req.body.password);

	var errors = req.validationErrors();
	if(errors){
	    res.render('signup', {
	      formerror: true,
	      errors: errors,
	      old: inputs,
	      layout: 'layouts/login'
	    });
	    return;
  	}

  //Looks legit.
  MongoClient.connect(maggotConf.dburl, function(err, db){

    // bcrypt.hash(inputs.password, 10, function(err, hash){
    //   var users = db.collection('users');

    //   users.insertMany([
    //     {
    //       first_name: inputs.first,
    //       last_name: inputs.last,
    //       email: inputs.email,
    //       password: hash,
    //       created_at: new Date().getTime()
    //     }
    //   ]);
    //   db.close();

    //   //Now take them to a success page.
    //   res.redirect('/dashboard');

    // });
  });

});

module.exports = router;