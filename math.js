$(document).ready(function(){
		$('button.code').click(function(){
			$(this).append('<li class="nerd1">3a(3) && 3a(1) && 3a(2b) == (12a * 3a * 18b * 6ab) == true;</li>');
		});
		$('button.code').dblclick(function(){
			$(this).fadeOut('slow');
		});	
		$('p,img').dblclick(function(){
			$(this).addClass('animated hinge');
		});
	});