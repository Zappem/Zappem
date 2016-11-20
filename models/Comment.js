var mongoose = require('mongoose');
var Exception = require('./Exception.js');

var userSchema = new mongoose.Schema({
	user_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	img: {type: String}
});

var commentSchema = new mongoose.Schema({
	comment: {type: String, required: true},
	exception: mongoose.Schema.Types.ObjectId,
	user: userSchema,
	created_at: Date,
	updated_at: Date
});

commentSchema.pre('save', function(next){
	
	var now = new Date();
	var i = this;

	i.updated_at = now

	if(!i.created_at){
		i.created_at = now; 
	}
	next();
});

module.exports = mongoose.model('comments', commentSchema);