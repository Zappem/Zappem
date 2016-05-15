global.$ = global.jQuery = require('jquery');
var foundation = require('foundation-sites');
var Pjax = require('pjax');

$(document).on('click', '#sidebar-toggle', function(){
	$('body').toggleClass('mobile-show');
});

$(document).ready(function(){
	$(document).foundation();
})

new Pjax({
  elements: "a", // default is "a[href], form[action]" 
  //selectors: ["title", ".my-Header", ".my-Content", ".my-Sidebar"]
});