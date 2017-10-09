// $(document).scroll(function() {
//    if($(window).scrollTop() === 0) {
//      $(".navbar").hide();
//    } else {
// 		 $(".navbar").show();
// 	 }
// });

// $(document).ready(function() {
//   $("html, body").animate({scrollTop: 0}, 0); //100ms for example
// });

// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });

$(document).ready(function() {
  $("html, body").animate({ scrollTop: 0 }, 0);
}).on('scroll', function () {
  $('.navbar').css('opacity', ($(document).scrollTop() / 300));
});
