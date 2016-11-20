var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');

router.use('/', function(req, res, next){
	res.locals.active = {page: "dashboard"};
	next();
});

router.get('/', function(req, res){
	// This is the dashboard for this current project.

	var project = Project.findById(res.locals.project);
	var exceptions = Exception.find({project: res.locals.project});
	
	Promise.all([project, exceptions]).then(function(values){

		res.rendr('dashboard/index', {
			title: values[0].project_name,
			project: values[0],
			exceptions: values[1]
		});
	});

});

module.exports = router;

