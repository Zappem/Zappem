var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var Project = require('../models/Project.js');
var Exception = require('../models/Exception.js');
var Instance = require('../models/Instance.js');

router.api = {

	handleError: function(err){
		res.send(err);
	},

	buildInstance: function(req){
		var ua = require('ua-parser-js');
		var useragent = ua(req.body.useragent);
		return new Instance({
			message: req.body.message,
			browser: useragent.browser,
			engine: useragent.engine,
			os: useragent.os,
			device: useragent.device,
			cpu: useragent.cpu,
			method: req.body.method,
	  		url: req.body.url,
			ip: req.body.ip,
			location: req.body.location,
			source: req.body.source,
			trace: req.body.trace,
			env: req.body.env,
			cookies: req.body.cookies,
			data: req.body.data,
			useragent: req.body.useragent,
			project: req.body.project
		})
	},

	setUser: function(req, instance){
		if(req.body.user){
			return {
				user_id: req.body.user.id,
				name: req.body.user.name
			};
		}
	},

	makeHash: function(req){
		var md5 = require('md5');
		return md5(req.body.class+""+req.body.file+""+req.body.line);
	},

	checkIfExceptionExists: function(hash, callback){
		Exception.findOne({hash: hash}, function(err, exception){
			if(err) router.api.handleError(err);
			return exception;
		});
	},

	buildException: function(req, instance, hash){
		return new Exception({
			class: req.body.class,
			file: req.body.file,
			line: req.body.line,
			hash: hash,
			project: req.body.project,
			resolved: {
				state: false
			},
			last_occurred: new Date,
			last_message: instance.message
		});
	},

	processError: function(req, res, callback){
		var instance, hash, prevResolved, promise;
		
		instance = router.api.buildInstance(req);
		instance.user = router.api.setUser(req, instance);
		hash = router.api.makeHash(req);
		
		router.api.checkIfExceptionExists(hash, function(exception){
			if(!exception){
				// It's a new exception
				console.log('its new');
				exception = router.api.buildException(req, instance, hash);

				exception.save(function(err, exception){
				instance.exception = {
					exception_id: exception._id,
					resolved: false
				};
				instance.save(function(err, instance){
					console.log('New exception saved');
					global.bridge.emit('exception.new', {
						exception: exception,
						instance: instance
					});
					callback(instance._id);
				});
			});

			}else{
				console.log('its existing');
				// It's another occurence
				prevResolved = exception.resolved;
				instance.exception = {
					exception_id: exception._id,
					resolved: false
				};
				exception.resolved.state = false;
				exception.last_occurred = new Date();
				exception.last_message = instance.message;
				promise = [];
				promise.push(exception.save());
				promise.push(instance.save());
				Promise.all(promise).then(function(values){
					console.log('New instance of exception saved');
					global.bridge.emit('exception.existing', {
						prevResolved: prevResolved,
						exception: values[0],
						instance: values[1]
					});
					callback(values[1]._id);
				});
			}

		});

	}
};

/**
 * @api {post} /api/exception Store a new instance of an exception
 * @apiName StoreException
 * @apiGroup Exceptions
 *
 * @apiParam {Mixed}  [user] 	The user that this error occurred for. This could be an ID, email, name etc.
 * @apiParam {String} method 	The HTTP method used when this error occurred.
 * @apiParam {String} [url] 		The referrer URL from when this error occurred.
 * @apiParam {String} [ip] 		The IP address from where this error occurred.
 * @apiParam {String} [location] 	The IP based location from where this error occured.
 * @apiParam {String} [useragent]	The user agent string from where this error occured.
 * @apiParam {String} project 	The Zappem Project ID which this error relates to.
 * @apiParam {String} message 	The error message
 * @apiParam {String} [class] 	The class in which the error occurred in.
 * @apiParam {String} file		The file in which the error occurred in.
 * @apiParam {Integer} line		The line number where the error occurred.
 * @apiParam {Object[]} [trace]	The trace stack
 * @apiParam {String} trace.class The class name
 * @apiParam {String} trace.file  The file name
 * @apiParam {Integer} trace.line The line number
 *
 * @api
 */
router.post('/exception', function(req, res){
	// An exception happened.
	// Does it already exist?

	Project.findById(req.body.project, function(err, project){
		if(!project){
			res.send('Project not found');
		}else{
			project.set_up = true;
			project.save();
			router.api.processError(req, res, function(code){
				res.send(code);
			});
		}
	});

});



module.exports = router;

