var express = require('express');
var router = express.Router();
var Instance = require('../models/exception-instance');
var Exception = require('../models/exception');

var mongoose = require('mongoose');

console.log(mongoose);

router.get('/', function(req, res){
	res.locals.active.dashboard = true;
	var last24 = 0;
	var instanceCounter = 0;
	var unresolvedCounter = 0;
	Exception.find({project: res.locals.project._id}).populate({path: 'instances', model: Instance}).exec(function(err, exceptions){

		console.log()
		exceptions.forEach(function(exception){
			exception.instances.forEach(function(instance){
				//These are all the instances for this one.
				if(instance.created_at >= new Date(new Date() - 24*60*60*1000)){
					instanceCounter++;
				}
			});

			if(exception.created_at >= new Date(new Date() - 24*60*60*1000)){
				last24++;
			}
			unresolvedCounter++;
		});



		res.render('dashboard', {
			title: res.locals.project.name+' Dashboard',
			last24: last24,
			instanceCounter: instanceCounter,
			unresolvedCounter: unresolvedCounter
		});

	});


});

module.exports = router;