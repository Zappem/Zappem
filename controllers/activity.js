var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Activity = require('../models/activity');
var timeago = require('../classes/timeago');


router.post('/', function(req, res){

	req.checkBody('comment', 'Your comment can\'t be blank').notEmpty();
	var errors = req.validationErrors();

	if(errors){
		res.send(JSON.stringify(errors));
		return;
	}

	var newActivity = Activity({
		exception: res.locals.exception._id,
		created_by: req.user._id,
		comment: req.body.comment,
		auto_gen: false
	});

	newActivity.save(function(err){
		if(err){
			res.send(JSON.stringify({error: "Something went wrong"}));
			return;
		}

		res.send(JSON.stringify({success: true}));
		return;

	});

});

router.get('/', function(req, res, next){
	if(req.xhr){
		Activity.find({exception: res.locals.exception._id}).populate({path:"created_by", model:User}).sort({created_at: "desc"}).exec(function(err, activities){
			console.log(err);

			console.log(activities.length);
			
			activities.forEach(function(activity){
				activity.self = false;
				if(""+activity.created_by._id+"" == ""+req.user._id+""){
					activity.self = true;
				}
			});

			res.render('exceptions/activity', {
				layout: false,
				activities: activities,
				exceptionid: res.locals.exception._id,
			}, function(err, view){
				res.send(JSON.stringify({"html":view}));
			});
		});
	}
});

module.exports = router;