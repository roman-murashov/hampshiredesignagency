$('.menu-button').click(function() {
  $('.menu').toggleClass('expanded').siblings('ul').slideToggle();
  $('.menu-button').toggleClass('is-active').siblings('ul').slideToggle();
});

$(window).load(function() {
  $("body").removeClass("loading");
  setTimeout(function() {
    $(".loader-container").remove();
    console.log("Removed loader after 5secs!");
  }, 5000);
});
