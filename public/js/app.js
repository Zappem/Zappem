(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(date) {
    date = new Date(date);

    var seconds = Math.floor((new Date() - date) / 1000);

    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    interval = Math.floor(seconds / 3600);
    if (interval > 23) {
        return date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear();
    }
    if (interval >= 1) {
        return interval + " hrs";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " min" + (interval > 1 ? "s" : "");
    }
    if (interval > 0.1) {
        return "< 1 min";
    }
    return "now";
}

},{}],2:[function(require,module,exports){
var progress = require('./progress.js');

$.ajaxSetup({
	error: function(){
		$(document).trigger('error');
	}
})

var userid = encodeURIComponent($('meta[name="user"]').prop('content'));
var page = encodeURIComponent($('meta[name="page-base"]').prop('content'));
var pagesub = encodeURIComponent($('meta[name="page-sub"]').prop('content'));
var socket = io('http://localhost:8965', {query: "user="+userid+"&page_base="+page+"&page_sub="+pagesub});

socket.on('connect', function(e){
	console.log('connected');
});

socket.on('exception.new', function(e){
	console.log('new exception');
	//Prepend a new row
	if($('table.all-exceptions').length){
		// Make a new row.
		var now = new Date();
		var html = "<tr data-exception='"+e.exception._id+"'>";
		html += "<td>";
		html += "<a href='/project/"+e.exception.project+"/exceptions/"+e.exception._id+"' data-pjax>";
		html += "<span class='message block'>"+e.exception.message+"</span>";
		html += "<small>";
		html += "<span class='block'>"+e.exception.class+"</span>";
		html += "<span class='block file'>"+e.exception.file+":<strong class='accent-color'>"+e.exception.line+"</strong></span>";
		html += "</small>";
		html += "</a>";
		html += "</td>";
		html += "<td class='last-seen'>";
		html += "<time data-time='"+now+"' title='"+now+"'>"+now+"</time>";
		html += "</td>";
		html += "<td class='times'>1</td>";
		html += "<td></td><td></td>";
		html += "</tr>";
		$('table.all-exceptions tbody').prepend(html);
	}else{

	}
});

Notification.requestPermission(function(perm){
	if(perm === "granted"){
		socket.on('notification', function(e){
			console.log('notification');
			console.log(e);
			var notification = new Notification(e.title, e.options);
		});
	}
});

socket.on('dashboard', function(e){
	console.log('update dashboard figures');
	$('#unresolved_instances.stat-box strong').html(e[2].errors);
	$('#unresolved_today.stat-box strong').html(e[2].unique);
	$('#users_affected.stat-box strong').html(e[2].users);
	$('#new_errors.stat-box strong').html(e[2].new);
	$('.errors-today .panel-head span').html("("+e[2].unique+")");
	$('.errors-today .panel-contents').html(e[3]);
});

socket.on('exceptions', function(e){
	console.log('update exceptions page');
});

socket.on('exception.existing', function(e){
	console.log('existing exception');
	// Find the row and update it.
	if($('table.all-exceptions').length){
		row = $('table.all-exceptions').find('tbody tr[data-exception="'+e.exception._id+'"]');
		row.find('.times').html(e.exception.instances.length+1);
		row.find('.last-seen time').data('time', new Date());
	}else{

	}
});

$(document).on('click', 'a[data-pjax]', function(e){
	e.preventDefault();
	$(document).trigger('pjax:start');
	var url = $(this).prop('href');
	var content = $('.content');
	$.ajax({
		url: url,
		dataType:'json',
		success: function(data){
			content.html(data.html);
			history.pushState({}, null, url);
			$(document).trigger('pjax:done', data.locals);
		},
		error: function(){
			$(document).trigger('pjax:error');
		},
		complete: function(){
			$(document).trigger('pjax:complete');
		}
	});
});

$(document).on('click', '.reveal-detail-bar a', function(e){
	e.preventDefault();
	$('.reveal-detail-bar a').removeClass('active');
	$(this).addClass('active');
	$('.reveal-content table tbody').addClass('hide');
	$('.reveal-content table tbody.'+$(this).data('type')).removeClass('hide');
});

$('.sidebar nav li').on('click', function(e){
	page = $(this).data('page');
	$('.sidebar nav').removeClass();
	$('.sidebar nav').addClass(page);
});

$('.topbar .user').click(function(){
	$(this).toggleClass('active');
});

var body = $('body'); 

$(document).on('pjax:start', function(){
	progress.start();
});

$(document).on('error', function(){
	modals.openModal('global-error-modal');
});

$(document).on('click', '#resolve-exception', function(){
	var btn = $(this);
	btn.addClass('disabled');
	url = btn.data('url');
	btn.html('Loading...');
	$.ajax({
		url:url,
		method:'post',
		success: function(e){
			row = $('.row.resolved');
			if(e){
				btn.html('Unresolve').removeClass('disabled');
				row.find('.user').html(e.user);
				row.find('time').data('time', new Date());
				row.removeClass('hide');
			}else{
				btn.html('Resolve').removeClass('disabled');
				row.addClass('hide');
			}
		}
	});
});

$(document).on('pjax:done', function(e, data){

	console.log(data.activeStr);

	socket.emit('page', {
		base: data.activeStr
	});

	nav = $('.sidebar nav');
	nav.removeClass();
	if(data.active) nav.addClass(data.active.page);
	window.scrollTo(0, 0);

	if(data.project && !body.hasClass('show-sidebar')){
		body.addClass('show-sidebar');
		// Now make sure the URLs are correct.
		nav.data('project', data.project._id);
		
		// Sort out the URLs
		url = "/project/"+data.project._id+"/";
		nav.find('li').each(function(){
			$(this).find('a').prop('href', url+$(this).data('page'));
		});

		// SHow the project select bit.
		$('.topbar .project').removeClass('hide');
		$('.topbar .project a').html(data.project.project_name);

	}else if(!data.project && body.hasClass('show-sidebar')){
		body.removeClass('show-sidebar');
		$('.topbar .project').addClass('hide');
		$('.sidebar nav').removeClass();
	}
});

var zappem = {
	renderAjaxBits: function(){
		$('.ajax-load-now').each(function(){
			obj = $(this);
			if(obj.hasClass('done')) return;
			console.log('load now');
			url = obj.data('url');
			$.ajax({
				url: url,
				dataType: 'json',
				success: function(e){
					obj.html(e.html);
					obj.addClass('done');
				}
			});
		});
	},
	checkForUsersAffected: function(){
		var cell = $('td#affected-users');
		console.log(cell.length);
		if(cell.length){
			$.ajax({
				url: cell.data('url'),
				dataType: 'json',
				success: function(e){
					cell.html(e.users);
				},
				error: function(e){
					console.log(e);
				}
			});
		}
	}
};


zappem.renderAjaxBits();
zappem.checkForUsersAffected();

$(document).on('pjax:complete', function(){
	progress.done();
	zappem.renderAjaxBits();
	zappem.checkForUsersAffected();
});



$(document).on('click', '.exception-detail a', function(e){
	var activeBar = $('.exception-detail .active-bar > div');
	a = $(this);
	width = a.width();
	data = a.data('type');
	url = a.data('url');
	contentDiv = $('.detail-content[data-type='+data+']');
	move = (width / 2) + a.position().left - 110;
	activeBar.css({
		transform: "translate3d("+move+"px, 0, 0) scaleX("+width+")"
	});
	$('.exception-detail a').removeClass('active');
	a.addClass('active');
	$('.detail-content').addClass('hide');
	contentDiv.removeClass('hide');

	history.pushState({}, '', url);

	$.ajax({
		url: url,
		dataType:'json',
		success: function(e){
			contentDiv.find('.content-inject').html(e.html);
		}
	});
});

$(document).on('submit', '#post-comment', function(e){

	e.preventDefault();
	comment = $(this).find('textarea').val();
	url = $(this).prop('action');
	content = $(this).parents('.panel').find('.content-inject');
	$.ajax({
		url:url,
		method:'post',
		dataType:'json',
		data: {comment:comment},
		success: function(e){
			content.html(e.html);
		},
		error: function(e){
			console.log(e);
		}
	});

});

var modals = {
	openModal: function(id){
		var modal = $('#'+id);
		modal.removeClass('hide');
		$('.modal-overlay').on('click', this.clickModal);
		modal.on('click', '.close-button', this.closeModal);
		return modal;
	},
	clickModal: function(e){
		if(!$(e.target).is('.reveal') && !$(e.target).parents('.reveal').length){
			modals.closeModal();
		}
	},
	closeModal: function(){
		$('.reveal').parent('.modal-overlay').addClass('hide');
		$('.modal-overlay').off('click');
	}
};

if($('.modal-overlay:visible').length){
	// One was opened on page load.
	// Register the click handler.
	$('.modal-overlay:visible').on('click', modals.clickModal);
}

$(document).on('click', '.open-inspect-modal', function(e){
	e.preventDefault();
	url = $(this).data('url');
	modal = modals.openModal('instance-inspect');
	$.ajax({
		url:url,
		dataType: 'json',
		success: function(e){
			history.pushState({}, '', url);
			modal.find('.content-inject').html(e.html);
		},
		error: function(e){
			console.log(e);
		}
	});
});

$(document).on('click', '.assign-to-user', function(e){
	e.preventDefault();
	url = $(this).data('url');
	modal = modals.openModal('assign-user');
	$.ajax({
		url: url,
		dataType: 'json',
		success: function(e){
			console.log(e);
			modal.find('.content-inject').html(e.html);
		},
		error: function(e){
			console.log(e);
		}
	});
});



var timeAgo = require('../../classes/timeago.js');
var t;
timestamps = function(){
	$('time').each(function(){
		t = $(this);
		t.html(timeAgo(t.data('time'))).removeClass('hide');
	});
};
timestamps();
setInterval(timestamps, 1000);


},{"../../classes/timeago.js":1,"./progress.js":3}],3:[function(require,module,exports){
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



},{}]},{},[2]);
