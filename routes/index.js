var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.route('/api/v1/exception')

.get(function(req, res) {

	// This is for pulling out the information from the ID.
	
    
})
.post(function(req, res) {
	console.log(req.body);

	// So let's check if the data is formed correctly.
	// If it is, push them into the database.

});

module.exports = router;
