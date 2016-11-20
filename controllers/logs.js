var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
	res.locals.active = {page: "logs"};
	next();
});

router.get('/', function(req, res){

	res.rendr('logs/index', {
		title: "Logs"
	});
});

module.exports = router;

