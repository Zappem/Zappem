var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log(res.locals);
	res.render('dashboard', {
		title: 'Dashboard'
	});
});

module.exports = router;