var hogan = require('hogan.js');
var fs = require('fs');
var extend = function(child, parent) { for (var key in parent) { if ({}.hasOwnProperty.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

var superhogan = function(path, options, callback){

	console.log(this.lookup);

	var hasExtension = function(path){
		return true;
	}
	var handleError = function(error, callback){
		console.log(error);
		callback(null, false);
	};

	var readFile = function(path, options, callback){
		fs.readFile(path, 'utf8', function(err, str){
			if(err) handleError(err, callback);
			callback(str);
		});
	};

	var renderLayout = function(path, options, callback){
		console.log(path);
	};

	var renderPartials = function(partials, options, callback){
		var name, path;
		for(name in partials){
			path = partials[name];
			console.log(path);
			if(typeof path !== "string"){
				console.log('Path must be a string');
				continue;
			}
			if(!hasExtension(path)){
				console.log('it doesnt have an extension');
			}
		}
	};

	readFile(path, options, function(html){
		var lambda, partials;
		partials = options.settings.partials || {};
		if(options.partials){
			extend(partials, options.partials);
		}
		lambdas = options.settings.lambdas || {};
		if(options.lambdas){
			extend(lambdas, options.lambdas);
		}

		// Now we need to render the partials first.
		return renderPartials(partials, options, function(err, partials){

		});

		return callback(null, html);
	});

};

module.exports = superhogan;
