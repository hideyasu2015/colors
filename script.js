
$(document).ready(function () {

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  function call_carousel() {
    window.setInterval(AOS.refresh(), 5000);
  }

  var call_carousel = window.setInterval(call_carousel, 5000);


  // $('#myCarousel').on('slid.bs.carousel', function () {
  //   console.log('called');
  //   AOS.init();
  // })

  $('#myCarousel').on('slid.bs.carousel', function () {
    console.log('called');
    var call_carousel = window.setInterval(AOS.refresh(), 5000);
  });
});
