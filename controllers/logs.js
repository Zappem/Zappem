var express = require('express');
var router = express.Router();
var Log = require('../models/log');

router.get('/', function(req, res){

	Log.find({}, function(err, logs){
		res.render('logs', {
			title: 'Logs',
			logs: logs
		});
	});

});

module.exports = router;