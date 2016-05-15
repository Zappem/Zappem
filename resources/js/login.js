var $ = jQuery = require('jquery');

// $(document).on('submit', 'form', function(e){

// 	e.preventDefault();
// 	console.log('yo');

// 	var username = $('input[name=username').val(),
// 		password = $('input[name=password').val(),
// 		logo = $('.logo'),
// 		box = $('.login-box');

// 	$.ajax({
// 		url:'/login',
// 		method:'post',
// 		dataType: 'json',
// 		data: {username: username, password: password},
// 		success: function(e){
// 			console.log(e);

// 			if(e.success && e.projectSelect){

// 				history.pushState({}, '', '/select-project');
// 				box.html($(e.projectSelect)[0].innerHTML);

// 				// box.addClass('animated fadeOutUp');
// 				// setTimeout(function(){

// 				// 	console.log(e.projectSelect);
// 				// 	box.remove();
// 				// }, 500);
// 			}
// 			// if(e.success && e.firstTime){
// 			// 	firstTime(e.html);
// 			// }else if(e.success){

// 			// }else{
// 			// 	box.addClass('animated shake');
// 			// 	setTimeout(function(){
// 			// 		box.removeClass('animated shake');
// 			// 	}, 500);
// 			// }
// 		},
// 		error: function(e){
// 			console.log(e);
// 		}
// 	});

// });

$(document).on('change', 'select', function(){
	$('.go-btn').prop('href', '/project/'+$(this).val()+'/dashboard');
});

function firstTime(html){
	var logo = $('.logo'),
	box = $('.login-box'),
	footer = $('.login-footer');


	box.css('height', box.outerHeight());
	box.children().fadeOut(function(){

		logo.css('margin-top', '-92px');
		setTimeout(function(){
			logo.hide();

			box.css('max-width', '90%');
			footer.css('max-width', '90%');
			
			setTimeout(function(){
				//Now dump the HTML in.
				box.html(html);
			});
		
		}, 300);

	});

}