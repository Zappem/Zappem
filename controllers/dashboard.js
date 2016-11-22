var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');

router.use('/', function(req, res, next){
	res.locals.active = {page: "dashboard"};
	next();
});

router.get('/', function(req, res){
	// This is the dashboard for this current project.
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

	console.log(today);
	console.log(tomorrow);

	var project = Project.findById(res.locals.project);
	var exceptions = Exception.find({
		"last_occurred": {
			"$gte": today,
			"$lt": tomorrow
		},
		"project": res.locals.project,
		"resolved": false
	});
	var instances = Instance.find({
		"created_at": {
			"$gte": today, 
			"$lt": tomorrow
		},
		"project": res.locals.project
	});
	
	Promise.all([project, exceptions, instances]).then(function(values){

		var stats = {
			errors: values[2].length,
			unique: 0,
			users: 0,
			new: 0
		};

		var unique = {};
		var users = {};
		var created;

		values[1].forEach(function(exception){
			// Work out how many new exceptions today
			created = new Date(exception.created_at);
			if(created >= today && created < tomorrow) stats.new++;

		});

		values[2].forEach(function(instance){
			if(!instance.exception.resolved && instance.user) users[instance.user.user_id] = true;
		});

		stats.unique = values[1].length;
		stats.users = Object.keys(users).length;

		res.rendr('dashboard/index', {
			title: values[0].project_name,
			project: values[0],
			exceptions: values[1],
			stats: stats
		});
	});

});

module.exports = router;

