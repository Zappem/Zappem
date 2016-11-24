var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');
var hogan = require('hogan.js');

router.use('/', function(req, res, next){
	res.locals.active = {page: "dashboard"};
	res.locals.activeStr = "dashboard";
	next();
});

router.getDashboardStats = function(project_id, callback){
	var now = new Date();
	// TODO: Make these user specifiable
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

	var project = Project.findById(project_id);
	var exceptions = Exception.find({
		"last_occurred": {
			"$gte": today,
			"$lt": tomorrow
		},
		"project": project_id,
		"resolved.state": false
	});
	var instances = Instance.find({
		"created_at": {
			"$gte": today, 
			"$lt": tomorrow
		},
		"project": project_id,
		"exception.resolved": false
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
			if(instance.user) users[instance.user.user_id] = true;
		});

		stats.unique = values[1].length;
		stats.users = Object.keys(users).length;

		values[2] = stats;

		router.getDashboardTable(values[1], function(table){
			values[3] = table;
			callback(values);
		});

	});
};

router.getDashboardTable = function(exceptions, callback){
	var fs = require('fs');
	fs.readFile('./views/dashboard/table.html', 'utf8', function(err, template){
		var out = hogan.compile(template).render({
			exceptions: exceptions
		});
		callback(out);
	});
};

router.get('/', function(req, res){
	// This is the dashboard for this current project.
	router.getDashboardStats(res.locals.project._id, function(values){
		res.rendr('dashboard/index', {
			title: values[0].project_name,
			project: values[0],
			exceptions: values[1],
			stats: values[2],
			tableview: values[3]
		});
	})

});

module.exports = router;

