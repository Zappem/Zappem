var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
	instance: {type: mongoose.Schema.Types.ObjectId, ref: 'ExceptionInstance'},
	url: {type: String},
	method: {type: String},
	referer: {type: String},
	browser: {type: String},
	os: {type: String},
	session: {type: Object},
	cookies: {type: Object},
	headers: {type: Object},
	get: {type: Object},
	post: {type: Object},
	env: {type: Object}
	user_agent: {type: String},
});

requestSchema.pre('save', function(next){

	var now = new Date();

	this.updated_at = now

	if(!this.created_at){
		this.created_at = now; 
		this.last_received = now;
	}

	next();

});

var Request = mongoose.model('exception-request', requestSchema);