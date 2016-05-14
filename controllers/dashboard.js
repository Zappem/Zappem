var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//Have they got any projects?
	//If not they should add one.
	//If so we should list them.
	var Project = require('../models/project');
	Project.find({}, function(err, projects){
		console.log(err);
		console.log(projects);
	});

	res.render('dashboard', {
		title: 'Dashboard'
	});

});

module.exports = router;