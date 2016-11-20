var progress = require('./progress.js');

$(document).on('click', 'a[data-pjax]', function(e){
	e.preventDefault();
	console.log('a href');
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

var master = {
	projectid: null,

	setprojectid: function(id){
		this.projectid = id;
	}
};

var body = $('body'); 

$(document).on('pjax:start', function(){
	progress.start();
});

$(document).on('pjax:done', function(e, data){

	// TODO: If the project_id in the `e` variable is different from the one stored,
	// change the one stored AND update ALL links with a project ID in it to the latest.
	if(data.project && !body.hasClass('show-sidebar')){
		body.addClass('show-sidebar');
		// Now make sure the URLs are correct.
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

	// if(data.project && data.project._id != master.projectid){
		// master.setprojectid(data.project._id);
	// }else{
		// master.setprojectid(null);
	// }
});

$(document).on('pjax:complete', function(){
	progress.done();
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
		t.html(timeAgo(t.data('time'))).removeClass('hide');
	});
};
timestamps();
setInterval(timestamps, 1000);

