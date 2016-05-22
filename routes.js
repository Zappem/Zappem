var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./models/user');
var Project = require('./models/project');
var Exception = require('./models/exception');

router.use(function(req, res, next){
	if(mongoose.connection.readyState == 1){
		res.locals.active = {};
		res.locals.active[req.path.substring(1)] = true;
		
		if(req.path == "/welcome"){
			res.redirect('/');
			return;
		}
		//Also we need to get all the projects that apply to this user
		Project.find({}, function(err, projects){
			if(projects){
				res.locals.hasProjects = true;
			}
			res.locals.projects = projects;
			next();
		});
	}else{
		if(req.path != "/welcome"){
			res.redirect('/welcome');
			return;
		}
		next();
	}
});

router.get('/', function(req, res){
  if(req.user){
    res.redirect('/overview');
  }else{
    res.redirect('/login');
  }
});

router.all('/api/v1/:endpoint', function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
	next();
});

var mustBeGuest = function (req, res, next) {
	if(!req.user) return next();
	return res.redirect('/');
};

var mustBeUser = function(req, res, next){

	//FOR DEBUGGING ONLY.
	User.findOne({_id: "573373aee1b071a75a16a1e4"}, function(err, user){
		console.log(user);
		req.user = user;
		res.locals.user = user;
		return next();
	});

	// if(req.user){
	// 	res.locals.user = req.user;
	// 	return next();
	// }
	// req.flash('error', ['Please log in first']);
 //  	return res.redirect('/login');
}

router.use('/overview', mustBeUser, require('./controllers/overview'));

router.use('/project/:id', mustBeUser, function(req, res, next){
	//Get the project.
	Project.findOne({_id:req.params.id}).populate({path:'members', model: User}).exec(function(err, project){
		if(err){
			console.log(err);
		}
		res.locals.project = project;
		//res.user.activeProject = project;
		next();
	});
});

router.use('/project/:id/exceptions/:exceptionid', mustBeUser, function(req, res, next){
	//Get the project.
	Exception.findOne({_id:req.params.exceptionid}, function(err, exception){
		if(err){
			console.log(err);
		}
		res.locals.exception = exception;
		next();
	});
});

router.use('/new-project', mustBeUser, require('./controllers/new-project'));
router.use('/login', mustBeGuest, require('./controllers/login'));
router.use('/logout', mustBeUser, require('./controllers/logout'));
router.use('/forgotten-password', mustBeGuest, require('./controllers/forgotten-password'));
router.use('/sign-up', mustBeGuest, require('./controllers/sign-up'));
router.use('/project/:id/dashboard', mustBeUser, require('./controllers/dashboard'));
//router.use('/projects', mustBeUser, require('./controllers/projects'));
router.use('/project/:id/exceptions', mustBeUser, require('./controllers/exceptions'));
router.use('/project/:id/exceptions/:exceptionid/activity', mustBeUser, require('./controllers/activity'));
router.use('/project/:id/pings', mustBeUser, require('./controllers/pings'));
router.use('/project/:id/logs', mustBeUser, require('./controllers/logs'));
router.use('/welcome', require('./controllers/welcome'));
//router.use('/settings', mustBeUser, require('./controllers/settings'));
//router.use('/profile', mustBeUser, require('./controllers/profiles'));
//router.use('/manage', mustBeUser, require('./controllers/manage'));
//router.use('/users', mustBeUser, require('./controllers/users'));

router.use('/select-project', mustBeUser, require('./controllers/projects-select'));

// This is the beast
router.use('/api/v1/exception', require('./controllers/api/exception'));

module.exports = router;
