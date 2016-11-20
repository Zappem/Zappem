var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
	res.locals.active = {page: "feed"};
	next();
});

router.get('/', function(req, res){

	res.rendr('feed/index', {
		title: "Feed"
	});
});

module.exports = router;

