$(function() {

  var revealHeight = $(window).outerHeight();
  var width = $(window).width();
	var scrollOffset;

	var pageHeight;

function scrollReveal() {

		var scrolled = $(document).scrollTop();
		var delay = 100;

		var viewportOffset;
			viewportOffset = revealHeight;

		//if ( !touch ) {

			$('[data-animate]').not('.portfolio-animated').each(function() {
				var $animate = $(this);
				var offset = $animate.offset().top - revealHeight;
				if ( scrolled > offset ) {
					setTimeout(function() {
						$animate.addClass( $animate.attr('data-animate') ).addClass('portfolio-animated');
            delay = delay+300;
              //console.log(revealHeight);
					}, delay);

				}
			});

		//} !touch

	}

	scrollReveal();

  function onScroll() {
    scroll = $(window).scrollTop();
    scrollReveal();
  };

	$(window).on('scroll', onScroll);



});
