var $ = jQuery = require('jquery');

$(document).on('click', '.exception-tabs a', function(){
	$.ajax({
		url:$(this).data('url'),
		success: function(e){
			console.log(e);
			$('#exception-ajax').html(e);
		},
		error: function(e){
			console.log(e);
		}
	})
});

$(document).on('ready', function(){
	$('.canvas').each(function(){
	var canvas = $(this)[0];
	  if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		var graph = $(this).data('graph');
		var max = Math.max(...graph);
		for(var i=0;i<graph.length;i++){
			ctx.fillRect((i*4),30,2,-((100/max)*graph[i])-2);
	  	}
	  }
	});
})

console.log($('.canvas'));