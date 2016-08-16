var express = require('express');
var router = express.Router();

var Instance = require('../models/exception-instance');


router.get('/', function(req, res){
	Instance.find({zappem_code: req.query.code}, function(err, instance){
		console.log(instance);
		if(instance){
			res.redirect('/project/'+instance.project+'/exception/'+instance.exception);
		}
	});
});

module.exports = router;