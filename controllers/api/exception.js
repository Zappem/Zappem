var express = require('express');
var router = express.Router();
var Exception = require('../../models/exception');

router.post('/', function(req, res){

	req.checkBody('project_id', 'project_id must be a valid Zappem Project ID').notEmpty();
	req.checkBody('exception.message', 'message must be a string').notEmpty();
	req.checkBody('exception.file', 'file must be a string').notEmpty();
	req.checkBody('exception.line', 'line must be an integer').isInt();
	req.checkBody('exception.code', 'code must be a string').notEmpty();
	//req.checkBody('exception.trace', 'trace must be a JSON object').isJSON();

	console.log(req.body.exception.trace);

	var errors = req.validationErrors();

	if(errors){
		res.send(JSON.stringify(errors));
		return;
	}

	console.log(req.body);


	var exceptionobj = req.body.exception;

	var newException = Exception({
		project: req.body.project_id,
		message: exceptionobj.message,
		file: exceptionobj.file,
		line: exceptionobj.line,
		code: exceptionobj.code,
		trace: exceptionobj.trace
	});

	newException.save(function(err){
		if(err){
			console.log('errors!!!');
			console.log(err);
			res.send(JSON.stringify(err));
			return;
		}

		res.send(JSON.stringify({"success":true}));
		return;
	});

});

module.exports = router;