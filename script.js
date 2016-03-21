$(document).ready(function() {
console.log("Script included!"); /*test line*/

$('li').click(function(){
	$(this).addClass('yellow')

	});

$('img').click(function(){
	$(this).fadeOut('slow')

	});

});

