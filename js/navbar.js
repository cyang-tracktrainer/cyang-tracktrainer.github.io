$(document).ready(function(){
  var url = window.location.href;
  // $("html,body").animate({ scrollTop: 0 });
  $(document).scroll(function() {
    if ($(document).scrollTop() < 100) {
      $('#navbar').stop().fadeOut(300);
      $('#navbar-clear').stop().fadeIn(300);
    } else {
      $('#navbar').stop().fadeIn(300);
      $('#navbar-clear').stop().fadeOut(300);
    }
  });
});
