/*global $, jQuery*/

$(document).ready(function () {

  "use strict";

  var headerHeight = $('header').outerHeight();

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop(),
        nav = $('header'),
        backtotop = $('.top'),
        windowHeight = $(window).height(),
        windowWidth = $(window).width();


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


    if($("#vehicle-wrapping").length !== 0) {
      //it doesn't exist do nothing
      var obj = {
         '#vehicle-wrapping': 'blue',
         '#variable-data': 'green',
         '#infographics': 'red'
      };
      $.each(obj, function(name, value) {
        //$(name).css('background-attachment', 'scroll');
        if ($(window).scrollTop() >= $(name).offset().top ) {
         //$(name).css('background-attachment', 'fixed');
         $(name).addClass('background-attachment-fixed');
        } else {
         //$(name).css('background-attachment', 'scroll');
         $(name).removeClass('background-attachment-fixed');
        };
      });

    }

if($("#print-communications").length == 0) {
  //it doesn't exist do nothing
} else {
    function fadeItems(triggerId,classNameToAdd,triggerPoint) {
      if (wScroll > $('#'+triggerId+'').offset().top - ($(window).height() / + triggerPoint)) {
        $('#'+triggerId+' .fadeout').each(function(i) {
          setTimeout(function () {
            $('#'+triggerId+' .fadeout').eq(i).addClass(classNameToAdd);
          }, 175 * i);
        });
      };
    };

    fadeItems('print-communications','fadein',1.5);
    fadeItems('digital-experiences','fadein',1.5);
    fadeItems('portfolio-branding','fadein',1.1);
    fadeItems('vehicle-wrapping','fadein-slide',2);
    fadeItems('variable-data','fadein-slide',2);
    fadeItems('infographics','fadein-slide',2);

}

  }); // end window scroll

  $('#branding .fadeout').addClass('fadein');

  $(window).on('resize', function() {
      $('.portfolio li').width( $(window).width() / 5 );
      $('.portfolio li').height( $(window).width() / 5 );
  }).resize();

  $('.banner-design').css('height', $(window).height());
  $('.full-page').css('height', $(window).height());

  $(window).resize(function() {
    $('.banner-design').css('height', $(window).height());
    $('.full-page').css('height', $(window).height());
  });

  var fadeStart = 0, // 100px scroll or less will equiv to 1 opacity
      fadeUntil = 300, // 200px scroll or more will equiv to 0 opacity
         fading = $('.banner-intro');

  $(window).bind('scroll', function() {
    var offset = $(document).scrollTop(),
      opacity = 0;
    if (offset <= fadeStart) {
      opacity = 1;
    } else if (offset <= fadeUntil) {
      opacity = 1 - offset / fadeUntil;
    }
    fading.css('opacity', opacity);
    fading.css('margin-top', Math.round(offset / 2));
  });

});

  /* -------------------
 Parallax Sections
 ---------------------*/
$('.parallax-1').parallax("50%", 0.1);
$('.parallax-2').parallax("100%", -0.1);
$('.parallax-3').parallax("25%", 2);
$('.parallax-4').parallax("25%", 2);
$('.parallax-5').parallax("25%", 2);
$('.parallax-6').parallax("25%", 2);
$('.parallax-7').parallax("25%", 2);
$('.parallax-8').parallax("25%", 2);
$('.parallax-9').parallax("25%", 2);
$('.parallax-10').parallax("25%", 2);
