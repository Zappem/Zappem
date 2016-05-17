global.$ = global.jQuery = require('jquery');
var foundation = require('foundation-sites');
var Pjax = require('pjax');

var Chart = require('chart.js');
//var io = require('socket.io-client');

$(document).on('click', '#sidebar-toggle', function(){
	$('body').toggleClass('mobile-show');
});

$(document).ready(function(){
	$(document).foundation();

	console.log($('.chart:nth(0)').data('set'));

	var data = null;
	$('.chart').each(function(){
		data = {
			labels: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			datasets:[{
				data: $(this).data('set')
			}]
		}
		new Chart($(this), {
			type: 'bar',
			data: data,
			options: {
				scaleFontSize: 0
			},
			scales: {
				display: false
			}
		});
	});

});


// var socket = io.connect('http://localhost:3000');

// socket.on('new-exception', function(data){

// 	if(Notification.permission === "granted"){
// 		var notification = new Notification("New Exception", {
// 			body: data.message,
// 			icon: "http://localhost:3000/images/favicon.png"
// 		});
// 	}

// });

// new Pjax({
//   elements: "a", // default is "a[href], form[action]" 
//   //selectors: ["title", ".my-Header", ".my-Content", ".my-Sidebar"]
// });