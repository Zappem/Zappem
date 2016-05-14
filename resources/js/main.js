global.$ = global.jQuery = require('jquery');
var foundation = require('foundation-sites');

$(document).on('click', '#sidebar-toggle', function(){
	$('body').toggleClass('mobile-show');
});

$(document).ready(function(){
	$(document).foundation();
})