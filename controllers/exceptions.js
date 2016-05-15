var express = require('express');
var router = express.Router();
var Exception = require('../models/exception');

router.get('/', function(req, res){
	
	Exception.find({}, function(err, exceptions){

		res.render('exceptions', {
			title: 'Exceptions',
			exceptions: exceptions
		});
	});
});

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

		res.render('exceptions/view', {
			title: 'Exception',
			exception: exception
		});

	});

});


module.exports = router;