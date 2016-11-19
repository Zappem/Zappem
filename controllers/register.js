var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.rendr('register/index', {
		title:'Register'
	});
});

router.post('/', function(req, res){
	console.log(req.body);
});


module.exports = router;
