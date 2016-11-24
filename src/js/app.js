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
	}
};


zappem.renderAjaxBits();

$(document).on('pjax:complete', function(){
	progress.done();
	zappem.renderAjaxBits();	
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

