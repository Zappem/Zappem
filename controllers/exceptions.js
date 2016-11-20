var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');
var Comment = require('../models/Comment.js');

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

router.get('/:id/instances', function(req, res){
	Instance.find({exception: req.params.id}, function(err, instances){
		res.rendr('exceptions/instances', {
			instances: instances
		});
	});
});

router.get('/:id/trace', function(req, res){
	Exception.findById(req.params.id, function(err, exception){
		res.rendr('exceptions/trace', {
			exception: exception
		});
	});
});

router.get('/:id/comments', function(req, res){
	Comment.find({exception: req.params.id}, function(err, comments){
		res.rendr('exceptions/comments', {
			comments: comments
		});
	});
});

router.post('/:id/comments', function(req, res){
	newComment = new Comment({
		comment: req.body.comment,
		exception: req.params.id,
		user: {
			user_id: req.user._id,
			name: req.user.name,
			img: req.user.img
		}
	});

	newComment.save(function(e){
		// Now send all the comments back.
		Comment.find({exception: req.params.id}, function(err, comments){
			res.rendr('exceptions/comments', {
				comments: comments
			});
		});
	});
});

module.exports = router;

