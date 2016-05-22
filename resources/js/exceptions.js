var $ = jQuery = require('jquery');

$(document).on('click', '.exception-tabs a', function(e){
	e.preventDefault();
	$('.exception-tabs a.active').removeClass('active');
	$(this).addClass('active');
	$('#exception-ajax .ajax-contents').html('');
	$('#exception-ajax .ajax-loading').show();
	$.getJSON($(this).attr('href'), function(e){
		$('#exception-ajax .ajax-contents').html(e.html);
		$('#exception-ajax .ajax-loading').hide();
	});
});

$(document).on('ready', function(){

	$.getJSON(location.href, function(e){
		$('.exception-table tbody').html(e.html);
		generateGraphs();
	});

});

$(document).on('input', '#exception-search', function(){
	if($(this).val() != ""){
		$.getJSON(location.href+'/search/'+$(this).val(), function(e){
			$('.exception-table tbody').html(e.html);
			generateGraphs();
		});
	}else{
		$.getJSON(location.href, function(e){
			$('.exception-table tbody').html(e.html);
			generateGraphs();
		});
	}
});

function generateGraphs(){
	var canvas = null,
		height = null,
		ctx = null,
		graph = null,
		max = null;

	$('.canvas').each(function(){
		canvas = $(this)[0];
		height = $(this).height();

		if (canvas.getContext) {
			ctx = canvas.getContext('2d');
			graph = $(this).data('graph');
			max = Math.max(...graph);
			for(var i=0;i<graph.length;i++){
				ctx.fillRect((i*4),height,2,-((height/max)*graph[i])-2);
		  	}
		}
	});

}