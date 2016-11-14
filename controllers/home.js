var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	// Here the user can select an existing project or create a new one.
	res.render('home/index', {
		title:'Select a project'
	});
});


module.exports = router;
