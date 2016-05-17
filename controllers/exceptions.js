var express = require('express');
var router = express.Router();
//var ExceptionInstance = require('../models/exception');
var Instance = require('../models/exception-instance');
var Exception = require('../models/exception');



var moment = require('moment');

router.get('/', function(req, res){
	
	//ExceptionInstance.find({project: res.locals.project._id})

	var last24 = [];
	var firstTimers = [];

	Exception.find({project: res.locals.project._id}).populate({
		path: 'instances', 
		model: Instance}).sort({last_received: 'desc'}).exec(function(err, exceptions){

		exceptions.forEach(function(record){

			record.created_at_nice = moment(record.created_at).fromNow();
			var instanceHour = [];
			for(var hour=0;hour<=24;hour++){
				instanceHour[hour] = 0;//[];
			}

			//In the last 24 hours,
			var now = new Date(new Date() - (60*60*24*1000));
			var hour = 0;

			//Let's build up an array for the chart.
			record.instances.forEach(function(instance){

				//These are all the instances in the last 24 hour period.
				for(var hour = 0;hour <= 24;hour++){
					//For each hour, we want to stick all exceptions in that hour in an array.
					if(new Date(instance.created_at).getHours() == hour){
						instanceHour[hour] += 1;//.push(instance24);
					}
				}
			});

			record.chart = instanceHour;

			if(record.last_received >= new Date(new Date() - 24*60*60*1000)){
				last24.push(record);
			}

			if(record.instances.length == 1){
				firstTimers.push(record);
			}

			console.log(record.chart);

		});

			console.log('finished');
			res.render('exceptions', {
				title: 'Exceptions',
				exceptions: exceptions,
				last24: last24,
				firstTimers: firstTimers
			});	

		});
		

//Now that we've got all the exceptions, let's go in there and get the exceptions.

	});

	



function renderExceptions(){

}


router.get('/:exceptionid', function(req, res, next){

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


		Instance.find({exception: exception.exception_id}).sort({created_at: 'desc'}).exec(function(err, instances){
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


module.exports = router;