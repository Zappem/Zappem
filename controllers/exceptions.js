var express = require('express');
var router = express.Router();
//var ExceptionInstance = require('../models/exception');
var Instance = require('../models/exception-instance');
var Exception = require('../models/exception');
var User = require('../models/user');
var Activity = require('../models/activity');
var timeago = require('../classes/timeago');


router.get('/', function(req, res){
	res.locals.active.exceptions = true;

	if(!req.xhr){
		Exception.findOne({project: res.locals.project._id}, function(err, exception){
			res.render('exceptions', {
				title: 'Exceptions',
				count: exception ? 1 : 0
			});
			return;
		});
		return;
	}

	var last24 = [];
	var firstTimers = [];

	Exception.find({project: res.locals.project._id}).populate({
		path: 'instances', 
		model: Instance}).sort({last_received: 'desc'}).exec(function(err, exceptions){

		exceptions.forEach(function(record){

			record.last_received_nice = timeago.since(record.created_at);

			var instanceHour = [];
			for(var hour=0;hour<=24;hour++){
				instanceHour[hour] = 0;//[];
			}

			//In the last 24 hours,
			var now = new Date(new Date() - (60*60*24*1000));
			var hour = 0;

			//Let's build up an array for the chart.
			record.instances.forEach(function(instance){
				if(instance.created_at >= now){
					//These are all the instances in the last 24 hour period.
					for(var hour = 0;hour <= 24;hour++){
						//For each hour, we want to stick all exceptions in that hour in an array.
						if(new Date(instance.created_at).getHours() == hour){
							instanceHour[hour] += 1;//.push(instance24);
						}
					}
				}
			});

			record.chart = instanceHour;

			// if(record.last_received >= new Date(new Date() - 24*60*60*1000)){
			// 	last24.push(record);
			// }

			// if(record.instances.length == 1){
			// 	firstTimers.push(record);
			// }

			//console.log(record.chart);

		});

			res.render('exceptions/table', {
				exceptions: exceptions,
				layout: false
			}, function(err, view){
				res.send(JSON.stringify({"html": view}));

			});

			// console.log('finished');
			// res.render('exceptions', {
			// 	title: 'Exceptions',
			// 	exceptions: exceptions,
			// 	last24: last24,
			// 	firstTimers: firstTimers
			// });	

		});
		

//Now that we've got all the exceptions, let's go in there and get the exceptions.

	});

	



function renderExceptions(){

}


router.get('/:exceptionid', function(req, res, next){
	res.locals.active.exceptions = true;
	var id = req.params.exceptionid;

	Exception.findOne({_id:id}, function(err, exception){

		if(!exception){
			var err = new Error('Not Found');
			err.status = 404;
			err.message = "Exception Not Found";
			next(err);
			return;
		}

		//console.log(exception);


		Instance.find({exception: exception._id}).sort({created_at: 'desc'}).exec(function(err, instances){
			if(err) console.log(err);
			console.log(instances);
			console.log(instances);
			res.render('exceptions/view', {
				title: 'Exception',
				exception: exception,
				instances: instances
			});

		});

	});



});

router.get('/:exceptionid/instances', function(req, res, next){
	if(req.xhr){
		console.log(req.params.exceptionid);
		Instance.find({exception: req.params.exceptionid}).sort({created_at: 'desc'}).exec(function(err, instances){
			instances.forEach(function(instance){
				instance.created_at_nice = timeago.since(instance.created_at);
			});
			res.render('exceptions/instances', {
				layout: false,
				instances: instances
			}, function(err, view){
				res.send(JSON.stringify({"html": view}));
			});
		});
	}
});

//Activity is in the Activity controller.

router.get('/:exceptionid/trace', function(req, res, next){
	if(req.xhr){
		Exception.findOne({_id: req.params.exceptionid}, function(err, exception){
			res.render('exceptions/trace', {
				layout: false,
				exception: exception
			}, function(err, view){
				res.send(JSON.stringify({"html":view}));
			});
		});
	}
});

router.get('/:exceptionid/users', function(req, res, next){

});

router.get('/search/:term', function(req, res, next){
	console.log('begin search');
	//if(req.xhr){
		Exception.find({project: res.locals.project._id, message: new RegExp(req.params.term, 'i')}, function(err, exceptions){

			exceptions.forEach(function(exception){
				exception.last_received_nice = timeago.since(exception.created_at);
			});

			res.render('exceptions/table', {
				layout: false,
				exceptions: exceptions
			}, function(err, view){
				console.log('view');
				res.send(JSON.stringify({"html":view}));
				return;
			});
		});
	//}
});



module.exports = router;