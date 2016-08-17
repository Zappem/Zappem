var $ = jQuery;

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

$(document).ready(function(){

    if($('.prettyprint').length){
        prettyPrint();
    }

	if($('.exception-table tbody').length){

		$.getJSON(location.href, function(e){
			$('.exception-table tbody').html(e.html);
			generateGraphs();
		});
	}else if($('#exception-ajax').length){
		$.getJSON(location.href+"/activity", function(e){
			console.log(e);
			$('#exception-ajax .ajax-contents').html(e.html);
			$('#exception-ajax .ajax-loading').hide();
		});
	}

	$('.ajax-preload').each(function(){
		var box = $(this);
		$.getJSON(box.data('url'), function(e){
			console.log(e);
			box.html(e.html);
		});
	});

	$(document).on('click', '.trace-sidebar .trace-row', function(){
		console.log('yo');
		$('.trace-sidebar .trace-row').removeClass('active');
		$(this).addClass('active');
		$('.prettify > .prettyprint').removeClass('prettyprinted').html($(this).data('contents'));
		prettyPrint();
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