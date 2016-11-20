var progress = require('./progress.js');

$.ajaxSetup({
	error: function(){
		$(document).trigger('error');
	}
})

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

$(document).on('pjax:done', function(e, data){

	// TODO: If the project_id in the `e` variable is different from the one stored,
	// change the one stored AND update ALL links with a project ID in it to the latest.
	if(data.project && !body.hasClass('show-sidebar')){
		body.addClass('show-sidebar');
		// Now make sure the URLs are correct.
		console.log(data.project);
		nav = $('.sidebar nav');
		nav.data('project', data.project._id);
		
		// Make the dashboard active.
		nav.addClass('dashboard');

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

$(document).on('pjax:complete', function(){
	progress.done();
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

