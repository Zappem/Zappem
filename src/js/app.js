$('a').click(function(e){
	e.preventDefault();
	var url = $(this).prop('href');
	var content = $('.content');
	$.ajax({
		url: url,
		success: function(data){
			content.html(data);
		}
	});
});