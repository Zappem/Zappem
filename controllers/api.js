var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');
var md5 = require('md5');

router.post('/exception', function(req, res){
	// An exception happened.
	// Does it already exist?

	var hash = md5(req.body.message+""+req.body.file);
	var newInstance = new Instance({
		user: req.body.instance.user,
		browser: req.body.instance.browser,
		os: req.body.instance.os,
		method: req.body.method,
  		url: req.body.instance.url,
		ip: req.body.instance.ip,
		location: req.body.instance.location,
		useragent: req.body.instance.useragent,
		project: req.body.project
	})

	Exception.findOne({hash: hash}, function(err, exception){
		if(exception){
			console.log('exception is apparently found!!!');
			console.log('here it is: ');
			console.log(exception);
			// Just add a new instance
			newInstance.exception = exception._id;
			newInstance.save(function(err, instance){
				console.log(err);
				console.log(instance);
				console.log('saved?');
				res.send('done');
			});
		}else{
			// It's never been seen before
			// Add the exception,
			var newException = new Exception({
				message: req.body.message,
				class: req.body.class,
				file: req.body.file,
				line: req.body.line,
				trace: req.body.trace,
				hash: md5(req.body.message+""+req.body.file),
				project: req.body.project
			});

			newException.save(function(err, exception){
				console.log(err);
				console.log(exception);
				console.log('saved? exception');
				newInstance.exception = exception._id;
				newInstance.save(function(err, instance){
					console.log('saved? instance');

					res.send('done');
				});
			});

			// And the instance
		}
	})

	

});



module.exports = router;

