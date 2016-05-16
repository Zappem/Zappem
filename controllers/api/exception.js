var express = require('express');
var router = express.Router();
var Exception = require('../../models/exception');
var ExceptionInstance = require('../../models/exception-instance');

router.post('/', function(req, res){

	req.checkBody('project_id', 'project_id must be a valid Zappem Project ID').notEmpty();
	req.checkBody('exception.message', 'message must be a string').notEmpty();
	req.checkBody('exception.file', 'file must be a string').notEmpty();
	req.checkBody('exception.line', 'line must be an integer').isInt();
	req.checkBody('exception.code', 'code must be a string').notEmpty();
	//req.checkBody('exception.trace', 'trace must be a JSON object').isJSON();

	var errors = req.validationErrors();

	if(errors){
		res.send(JSON.stringify(errors));
		return;
	}

	var exceptionobj = req.body.exception;

	//Does this exception already exist for this project?

	// res.send(JSON.stringify({
	// 	project: req.body.project_id,
	// 	message: exceptionobj.message,
	// 	file: exceptionobj.file,
	// 	line: exceptionobj.line,
	// 	code: exceptionobj.code,
	// 	//trace: exceptionobj.trace
	// }));
	// return;


	Exception.findOne({project: req.body.project_id, message: exceptionobj.message, file: exceptionobj.file, line: exceptionobj.line, code: exceptionobj.code }, function(err, exception){
		if(err){
			console.log(err);
			return;
		}
		if(!exception){
			
			var newException = Exception({
				project: req.body.project_id,
				message: exceptionobj.message,
				file: exceptionobj.file,
				line: exceptionobj.line,
				code: exceptionobj.code,
				trace: exceptionobj.trace
			});

			newException.save(function(err){
				console.log('New exception.');
				if(err){
					console.log(err);
					res.send(JSON.stringify(err));
				}

				console.log('Adding instance');
				addInstance(newException, function(){
					res.send(JSON.stringify({"success":true}));
				});

			});

		}else{

			exception.last_received = new Date();
			exception.save(function(err){
				if(err) console.log(err);
				console.log('Exception already exists. Adding instance...');
				addInstance(exception, function(){
					res.send(JSON.stringify({"success":true}));
				});
				
				
			});
		}


	});

	//res.send(JSON.stringify({"exists": true}));

});

function addInstance(exception, next){

	//Now we can add the instance of the exception

	var newExceptionInstance = ExceptionInstance({
		exception: exception._id,
		project: exception.project
	});

	newExceptionInstance.save(function(err){
		if(err){
			console.log(err);
		}

		console.log(newExceptionInstance);

		console.log('New instance was created');
		//We also need to map the instance to the exception.
		Exception.findOne({_id: exception._id}, function(err, exception){
			console.log(err);
			if(exception){
				console.log('Found exception to map');
				exception.instances.push(newExceptionInstance._id);
				exception.save(function(err){
					next();	
				});
			}else{
				console.log('No map found');
			}
		});
	});
}

module.exports = router;