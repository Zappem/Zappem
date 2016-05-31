var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	res.render('overview', {
		title: 'Projects',
		hideNav: true
	});

});

module.exports = router;