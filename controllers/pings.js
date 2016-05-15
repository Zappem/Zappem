var express 	= require('express');
var router 		= express.Router();
var Ping = require('../models/ping');
var Project = require('../models/project');

router.get('/', function(req, res){

	Ping.find({}, function(err, pings){
		res.render('pings', {
			title: 'Pings',
			pings: pings
		});
	});

});

router.get('/new', function(req, res){

	Project.find({}, function(err, projects){
		res.render('pings/new', {
			title: 'New Ping',
			projects: projects
		});
	});
});

router.post('/new', function(req, res){

	req.checkBody('name', 'Please give this ping a name').notEmpty();
	req.checkBody('url', 'Please provide a URL for us to ping').notEmpty();
	req.checkBody('expected_response', 'Please provide your expected response code').isInt();
	req.checkBody('frequency', 'Please provide the frequency of this ping').isInt();

	var errors = req.validationErrors();
	if(errors){
		res.render('pings/new', {
			title: 'Pings',
			formerror: true,
			errors: errors,
			old: req.body
		});
		return;
	}

	var newPing = Ping({
		name: req.body.name,
		url: req.body.url,
		expected_response: req.body.expected_response,
		frequency: req.body.frequency,
		notify: 1,
		created_by: req.user._id,
		project_id: req.body.project_id
	});

	newPing.save(function(err){
		if(err) throw err;
		console.log('Saved!!');
		res.redirect('/pings');
		return;
	});

});

module.exports = router;