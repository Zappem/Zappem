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
	req.checkBody('found_by', 'Found by must be an object');
	//req.checkBody('exception.trace', 'trace must be a JSON object').isJSON();

	var errors = req.validationErrors();

	if(errors){
		res.send(JSON.stringify(errors));
		return;
	}

	var found_by = req.body.found_by;
	var exceptionobj = req.body.exception;


	Exception.findOne({project: req.body.project_id, message: exceptionobj.message, file: exceptionobj.file, line: exceptionobj.line, code: exceptionobj.code }, function(err, exception){
		if(err){
			console.log(err);
			return;
		}

		if(!exception){
			
			var newException = Exception({
				project: req.body.project_id,
				'class': exceptionobj['class'],
				message: exceptionobj.message,
				file: exceptionobj.file,
				line: exceptionobj.line,
				code: exceptionobj.code,
				trace: exceptionobj.trace,
				block: exceptionobj.block,
				get: req.body.get,
				post: req.body.post,
				server: req.body.server,
				request: req.body.req,
				env: req.body.env,
				cookie: req.body.cookie,
				session: req.body.session
			});

			newException.save(function(err){
				

				if(err){
					console.log(err);
					res.send(JSON.stringify(err));
				}

				console.log('New exception. Adding instance');
				addInstance(newException, exceptionobj, found_by, function(instance){
					res.send(JSON.stringify({
						"success":true,
						"code": instance.zappem_code
					}));
				});

			});

		}else{

			exception.last_received = new Date();
			exception.save(function(err){
				if(err) console.log(err);
				console.log('Exception already exists. Adding instance...');
				addInstance(exception, exceptionobj, found_by, function(instance){
					res.send(JSON.stringify({
						"success":true,
						"code" : instance.zappem_code
					}));
				});
				
				
			});
		}


	});

	//res.send(JSON.stringify({"exists": true}));

});

function addInstance(exception, exceptionobj, found_by, next){

	//Now we can add the instance of the exception
	console.log(found_by);

	var newExceptionInstance = ExceptionInstance({
		exception: exception._id,
		project: exception.project,
		found_by: found_by
	});

	newExceptionInstance.save(function(err){
		if(err){
			console.log(err);
		}
		//We also need to map the instance to the exception.
		Exception.findOne({_id: exception._id}, function(err, exception){
			console.log(err);
			if(exception){
				exception.instances.push(newExceptionInstance._id);
				exception.save(function(err){
					next(newExceptionInstance);	
				});
			}
		});
	});
}

module.exports = router;