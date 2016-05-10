var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	layout: 'layout.hjs',
  	title: 'Getting Started',
  	content: 'getting-started'

  });
});


module.exports = router;
