/*global $, jQuery*/

$(document).ready(function () {

  "use strict";

  var headerHeight = $('header').outerHeight();

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop(),
      nav = $('header'),
      backtotop = $('.top');

    if ($(this).scrollTop() > ($(window).height() / 2.15) - 90) {
      nav.addClass("header-fade");
    } else {
      nav.removeClass("header-fade");
    }

    if ($(this).scrollTop() > 110) {
      backtotop.addClass("top-fade");
    } else {
      backtotop.removeClass("top-fade");
    }

    function fadeItems(triggerId,classNameToAdd) {
      if (wScroll > $('#'+triggerId+'').offset().top - ($(window).height() / 1.25)) {
        $('#'+triggerId+' .fadeout').each(function(i) {
          setTimeout(function () {
            $('#'+triggerId+' .fadeout').eq(i).addClass(classNameToAdd);
          }, 175 * i);
        });
      };
    };

    fadeItems('portfolio','fadein');
    fadeItems('service-design','fadein');

  }); // end window scroll

  $(window).on('resize', function () {
      $('.portfolio li').width( $(window).width() / 5 );
      $('.portfolio li').height( $(window).width() / 5 );
  }).resize();

  $('.flexslider .item, .flexslider, .full-page').css('height', $(window).height());

  $(window).resize(function () {
    $('.banner-design').css('height', $(window).height() / 2.15);
    $('.flexslider .item, .flexslider, .full-page').css('height', $(window).height());
  });

/* ------------------
Scroll To
---------------------*/

var $target = $(window);

  // This one is important, many browsers don't reset scroll on refreshes
  // Reset all scrollable panes to (0,0)
  // $target.scrollTo(0);
  // Reset the screen to (0,0)
  // $.scrollTo(0);

  $('.arrow').click(function() {
    $target.scrollTo(('#service-design'), 800);
  });

  $('.top').click(function() {
    $target.scrollTo(('#top'), 800);
  });


});

  /* -------------------
 Parallax Sections
 ---------------------*/
$('.parallax-1').parallax("50%", 0.1);
//$('.parallax-2').parallax("100%", -0.1);
//$('.parallax-3').parallax("25%", 2);
//$('.parallax-4').parallax("25%", 2);
//$('.parallax-5').parallax("25%", 2);
//$('.parallax-6').parallax("25%", 2);
//$('.parallax-7').parallax("25%", 2);
//$('.parallax-8').parallax("25%", 2);
//$('.parallax-9').parallax("25%", 2);
//$('.parallax-10').parallax("25%", 2);
