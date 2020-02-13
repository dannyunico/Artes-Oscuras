$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
    $('.navbar-fixed-js').addClass('fixed');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
  }
});


$('.slider-preguntas').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,

  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});