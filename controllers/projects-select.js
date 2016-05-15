var express = require('express');
var router = express.Router();
var Project = require('../models/project');

router.get('/', function(req, res){

	res.render('project-select', {
		layout: 'layouts/login'
	});

});

module.exports = router;