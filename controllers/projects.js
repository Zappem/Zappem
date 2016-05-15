var express = require('express');
var router = express.Router();
var Project = require('../models/project');

router.get('/', function(req, res){
	
	
	Project.find({}, function(err, projects){
		
		res.render('projects', {
			title: 'Projects',
			projects: projects
		});

	});

});

router.get('/new', function(req, res){

	res.render('projects/new', {
		title: 'Create Project'
	});

});

router.post('/new', function(req, res){

	req.checkBody("name", "Please enter a project name").notEmpty();
	req.checkBody("url", "Please enter a URL for this project").notEmpty();
	req.checkBody("lang", "Please select a programming language").notEmpty();

	var errors = req.validationErrors();
	if(errors){
		res.render('projects/new', {
			title: 'Create Project',
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
		created_by: req.user._id
	});

	newProject.save(function(err){
		if(err) throw err;
		console.log('Saved!!');
		res.redirect('/projects/'+newProject._id);
		return;
	});

});

router.get('/:id', function(req, res, next){

	console.log(req.params.id);

	Project.find({}, function(err, project){
		console.log(project);
	});

	Project.findOne({_id:req.params.id}, function(err, project){
		if(!project){
			var err = new Error('Not Found');
			err.status = 404;
			err.message = "Project Not Found";
			next(err);
			return;
		}

		res.render('projects/view', {
			title: project.name
		});
	});
	
});


module.exports = router;