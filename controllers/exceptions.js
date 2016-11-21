var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');
var Comment = require('../models/Comment.js');

router.use('/', function(req, res, next){
	res.locals.active = {page: "exceptions"};
	next();
});

router.get('/', function(req, res){
	// This is the dashboard for this current project.

	var project = Project.findById(res.locals.project);
	var exceptions = Exception.find({project: res.locals.project}).sort('-created_at');
	
	Promise.all([project, exceptions]).then(function(values){
		res.rendr('exceptions/index', {
			title: values[0].project_name,
			project: values[0],
			exceptions: values[1]
		});
	});

});

renderView = function(req, res, type){
	page = {};
	page[type] = true;
	console.log(type);
	Exception.findById(req.params.id, function(err, exception){
		res.rendr('exceptions/view', {
			title: exception.message,
			exception: exception,
			type: page,
			typeStr: type
		});
	});
}

router.get('/:id', function(req, res){
	renderView(req, res, 'instances');
});

router.get('/:id/instances', function(req, res){
	if(req.xhr){
		Instance.find({exception: req.params.id}).sort('-created_at').exec(function(err, instances){
			res.rendr('exceptions/instances', {
				instances: instances
			});
		});
	}else{
		renderView(req, res, 'instances');
	}
});

// router.get('/:id/trace', function(req, res){
// 	if(req.xhr){
// 		Exception.findById(req.params.id, function(err, exception){
// 			res.rendr('exceptions/trace', {
// 				exception: exception
// 			});
// 		});
// 	}else{
// 		renderView(req, res, 'trace');
// 	}
// });

router.get('/:id/comments', function(req, res){
	if(req.xhr){
		Comment.find({exception: req.params.id}).sort('-created_at').exec(function(err, comments){
			res.rendr('exceptions/comments', {
				comments: comments
			});
		});
	}else{
		renderView(req, res, 'comments');
	}
});

router.get('/:id/instances/:instance', function(req, res){
	if(req.xhr){
		Instance.findById(req.params.instance, function(err, instance){
			sourcehtml = "<pre>";
			Object.keys(instance.source).forEach(function(key){
				sourcehtml += "<li data-line='"+key+"' "+(key==instance.trace[0].line?'data-error':'')+">";
				sourcehtml += instance.source[key];
				sourcehtml += "</li>";
			});
			console.log(instance.env);
			sourcehtml += "</pre>";
			instance.source = sourcehtml;
			res.rendr('exceptions/inspect', {
				instance: instance
			});
		});
	}else{
		var exception = Exception.findById(req.params.id);
		var instance = Instance.findById(req.params.instance);
		Promise.all([exception, instance]).then(function(values){
			res.rendr('exceptions/view', {
				title: values[0].message,
				exception: values[0],
				instance: values[1],
				partials: {
					instance: 'exceptions/inspect'
				}
			})
		});
	}
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

