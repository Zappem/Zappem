var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pongSchema = new Schema({
	ping: {type: mongoose.Schema.Types.ObjectId, ref: 'Ping'},
	status: {type: Number, required: true},
	time: {type: Number, required: true},
	created_at: Date,
	updated_at: Date
});

pongSchema.pre('save', function(next){

	var now = new Date();

	this.updated_at = now;

	if(!this.created_at){
		this.created_at = now;
	}

	next();

});

var Pong = mongoose.model('pongs', pongSchema);

module.exports = Pong;