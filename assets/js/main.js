$(document).ready(function () {

  const $slider = $('.slick-breaking');

  if ($slider.length === 0) {
    console.warn('⚠️ .slick-breaking bulunamadı!');
    return;
  }

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true, 
    infinite: true,
    speed: 700,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: true,
    swipe: true,
    touchMove: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true  
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });

  $slider.slick('slickPlay');

  $slider.on('touchstart', function () {
    $slider.slick('slickPause');
  });

  $slider.on('touchend', function () {
    $slider.slick('slickPlay');
  });

});



$('.headline-thumb').on('mouseenter click', function () {

  const img = $(this).attr('data-img');
  const title = $(this).attr('data-title');

  $('#mainHeadlineImage').attr('src', img);
  $('#mainHeadlineTitle').text(title);

  $('.headline-thumb').removeClass('active');
  $(this).addClass('active');

});
