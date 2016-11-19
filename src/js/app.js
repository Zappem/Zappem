$('a').click(function(e){
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

var master = {
	projectid: null,

	setprojectid: function(id){
		this.projectid = id;
	}
};

$(document).on('pjax:done', function(e){

	// TODO: If the project_id in the `e` variable is different from the one stored,
	// change the one stored AND update ALL links with a project ID in it to the latest.
	if(e.project && e.project._id != master.projectid){
		master.setprojectid(e.project._id);
	}else{
		master.setprojectid(null);
	}
});