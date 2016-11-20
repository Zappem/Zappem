(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(date) {
    date = new Date(date);

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

},{}],2:[function(require,module,exports){
$('a[data-pjax]').click(function(e){
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
		}
	});
});

$('.sidebar nav li').on('click', function(e){
	page = $(this).data('page');
	$('.sidebar nav').removeClass();
	$('.sidebar nav').addClass(page);
});

$('.topbar .user').click(function(){
	$(this).toggleClass('active');
});

var master = {
	projectid: null,

	setprojectid: function(id){
		this.projectid = id;
	}
};

var body = $('body'); 

$(document).on('pjax:done', function(e, data){

	// TODO: If the project_id in the `e` variable is different from the one stored,
	// change the one stored AND update ALL links with a project ID in it to the latest.
	if(data.project && !body.hasClass('show-sidebar')){
		body.addClass('show-sidebar');
	}else if(!data.project && body.hasClass('show-sidebar')){
		body.removeClass('show-sidebar');
	}

	if(data.project && data.project._id != master.projectid){
		master.setprojectid(data.project._id);
	}else{
		master.setprojectid(null);
	}

});

var activeBar = $('.exception-detail .active-bar > div');
$(document).on('click', '.exception-detail a', function(e){
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

$(document).on('click', '.open-inspect-modal', function(e){
	e.preventDefault();
	modal = $('#instance-inspect');
	url = $(this).data('url');
	modal.removeClass('hide');
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

var timeAgo = require('../../classes/timeago.js');
var t;
timestamps = function(){
	$('time').each(function(){
		t = $(this);
		console.log(t);
		console.log(t.data('time'));
		console.log(timeAgo);
		t.html(timeAgo(t.data('time'))).removeClass('hide');
	});
};
timestamps();
setInterval(timestamps, 1000);


},{"../../classes/timeago.js":1}]},{},[2]);
