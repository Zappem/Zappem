var $ = jQuery;

$(document).ready(function(){
	
	setTimeout(function(){
		$('.login-fade-in').fadeIn();
	}, 500);

	$('.login-create-account').click(function(){
		if($(this).hasClass('disabled')) return;

		var section = $('.login-create-account-section');

		if($(this).hasClass('submit')){
			var form = section.find('form');
			$(this).addClass('disabled').html('<i class="fa fa-spin fa-spinner"></i>');
			$.ajax({
				url: form.attr('action'),
				method: form.attr('method'),
				dataType: 'json',
				data: form.serialize(),
				success: function(e){
					console.log(e);
				},
				error: function(e){
					console.log(e);
				}
			});

		}else{
			$('.login-section').slideUp();
			section.slideDown(function(){
				$('.login-create-account').text('Continue').removeClass('hollow').addClass('submit');
				$('.login-button').addClass('hollow').removeClass('submit');
			});
		}
	});

	$('.login-button').click(function(){
		if($(this).hasClass('disabled')) return;

		var section = $('.login-section');
		var btn = $(this);
		
		if(btn.hasClass('submit')){
			$('.login-error').slideUp();
			var form = section.find('form');
			btn.addClass('disabled').html('<i class="fa fa-spin fa-spinner"></i>');
			console.log('begin ajax to '+form.attr('action'));
			$.ajax({
				url: form.attr('action'),
				method: form.attr('method'),
				dataType: 'json',
				data: form.serialize(),
				success: function(e){
					if(!e.success){
						$('.login-error .error-contents').html(e.msg);
						$('.login-error').slideDown();
						btn.removeClass('disabled').html('Log In <i class="fa fa-caret-right"></i>');
					}else{
						location.href = '/';
						// $('body #content .container').fadeOut(function(){
						// 	$('body #content .container').html(e.html);
						// 	$('body').prepend(e.topbar);
						// 	$('#topbar').fadeIn();
						// 	$('body #content .container').fadeIn();
						// });
					}
				},
				error: function(e){

				}
			});

		}else{
			$('.login-create-account-section').slideUp();
			section.slideDown(function(){
				$('.login-create-account').text('Create Account').addClass('hollow').removeClass('submit');
				$('.login-button').removeClass('hollow').addClass('submit');
			});
		}

	});

});