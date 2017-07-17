$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			//console.log('escape key pressed');
			$("nav").removeClass('expanded');
			$(".menu-button").removeClass('is-active');
		}
	});
