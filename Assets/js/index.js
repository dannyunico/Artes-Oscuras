$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
    $('.navbar-fixed-js').addClass('fixed');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
  }
});