var express = require('express');
var router = express.Router();
var Project = require('../models/project');

router.get('/', function(req, res){

	res.render('projects/new', {
		title: 'Create Project',
		hideNav: true
	});

});

router.post('/', function(req, res){

	req.checkBody("name", "Please enter a project name").notEmpty();
	req.checkBody("url", "Please enter a URL for this project").notEmpty();
	req.checkBody("lang", "Please select a programming language").notEmpty();

	var errors = req.validationErrors();
	if(errors){
		res.render('projects/new', {
			title: 'Create Project',
			hideNav: true,
			formerror: true,
			errors: errors,
			old: req.body
		});
		return;
	}

	var newProject = Project({
		name: req.body.name,
		url: req.body.url,
		lang: req.body.lang,
		created_by: req.user._id,
		members: [req.user._id]
	});

	newProject.save(function(err){
		if(err) throw err;
		console.log('Saved!!');
		res.redirect('/project/'+newProject._id+'/dashboard');
		return;
	});

});

module.exports = router;