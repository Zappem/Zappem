var express = require('express');
var router = express.Router();
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');
var Comment = require('../models/Comment.js');
var User = require('../models/User.js');

router.use('/', function(req, res, next){
	res.locals.active = {page: "exceptions"};
	res.locals.activeStr = "exceptions";

	if(!res.locals.project.set_up){
		res.rendr('exceptions/setup', {
			title: res.locals.project.project_name,
			project: res.locals.project
		});
	}else{
		next();
	}
	
});

router.get('/', function(req, res){
	// This is the dashboard for this current project.
	var exceptions = Exception.find({project: res.locals.project._id}).sort('-created_at');
	
	Promise.all([exceptions]).then(function(values){
		res.rendr('exceptions/index', {
			title: res.locals.project.project_name,
			project: res.locals.project,
			exceptions: values[0]
		});
	});

});

renderView = function(req, res, type){
	page = {};
	page[type] = true;
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

router.get('/:id/users-affected', function(req, res){
	Instance.find({"exception.exception_id": req.params.id}, function(err, instances){
		var users = [];
		instances.forEach(function(instance){
			if(instance.user) users[instance.user.user_id] = true;
		});
		res.send(JSON.stringify({"users":Object.keys(users).length}));
	});
});

router.post('/:id/resolve', function(req, res){
	Exception.findById(req.params.id, function(err, exception){
		if(exception.resolved.state){
			exception.resolved.state = false;
			exception.save(function(err){
				exception.updateInstances(function(){
					res.send(false);	
				});
				
			});
		}else{
			exception.resolved.state = true;
			exception.resolved.by_user = req.user._id;
			exception.resolved.by_user_name = req.user.name;
			exception.resolved.created_at = new Date();
			exception.save(function(err){
				exception.updateInstances(function(){
					res.send(true);	
				});
			});
		}
	});
});

router.get('/:id/instances', function(req, res){
	if(req.xhr){
		Instance.find({"exception.exception_id": req.params.id}).sort('-created_at').exec(function(err, instances){
			res.rendr('exceptions/instances', {
				instances: instances
			});
		});
	}else{
		renderView(req, res, 'instances');
	}
});

router.get('/:id/members', function(req, res){
	res.rendr('exceptions/members', {
		'members': res.locals.project.members
	}, function(err, view){
		res.send(JSON.stringify({
			'html': view
		}));
	});
});

router.post('/:id/assign-to/:member', function(req, res){
	// We're assigning this exception to this member.
	// Remove whoever is assigned to it at the moment,
	// and then add this user to it.
	Exception.findById(req.params.id, function(err, exception){
		// Now just make sure the user exists.
		User.findById(req.params.member, function(err, member){
			if(member){
				exception.assigned_to = {
					user_id: member._id,
					name: member.name,
					email: member.email,
					img: member.img,
					created_at: new Date();
				};
				exception.save(function(){
					res.send(201);
				});
			}
		});
	});
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
		Comment.find({"exception.exception_id": req.params.id}).sort('-created_at').exec(function(err, comments){
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
				sourcehtml += "<li data-line='"+key+"' "+(key==instance.line?'data-error':'')+">";
				sourcehtml += instance.source[key];
				sourcehtml += "</li>";
			});
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
			sourcehtml = "<pre>";
			Object.keys(values[1].source).forEach(function(key){
				sourcehtml += "<li data-line='"+key+"' "+(key==values[1].trace[0].line?'data-error':'')+">";
				sourcehtml += values[1].source[key];
				sourcehtml += "</li>";
			});
			sourcehtml += "</pre>";
			values[1].source = sourcehtml;
			res.rendr('exceptions/view', {
				title: values[0].message,
				exception: values[0],
				instance: values[1],
				type: {'instances': true},
				typeStr: 'instances',
				openModal: true,
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

