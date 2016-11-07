// Zappem
var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	config = require('./config.js');

app.config = config;

require('./middleware.js')(app);
require('./routes.js')(app);

app.listen(3000);