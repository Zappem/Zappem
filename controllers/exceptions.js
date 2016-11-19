var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');

router.get('/', function(req, res){
	// This is the dashboard for this current project.

	var project = Project.findById(res.locals.project);
	var exceptions = Exception.find({project: res.locals.project});
	
	Promise.all([project, exceptions]).then(function(values){

		res.rendr('exceptions/index', {
			title: values[0].project_name,
			project: values[0],
			exceptions: values[1]
		});
	});

});

router.get('/:id', function(req, res){

	var exception = Exception.findById(req.params.id);
	var instances = Instance.find({exception: req.params.id});

	Promise.all([exception, instances]).then(function(values){

		res.rendr('exceptions/view', {
			title: values[0].message,
			exception: values[0],
			instances: values[1]
		});

	});


});

module.exports = router;

