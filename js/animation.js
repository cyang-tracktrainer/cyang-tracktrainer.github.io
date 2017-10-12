$(document).ready(function(){
  var scroll_start = 0;
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if (scroll_start > 100) {
      // $('#navbar').velocity({ background-color: rgba(255, 255, 255, 0.95) }, 1000);
      // $('#navbar').velocity({ color: var(--color0) }, 1000);

      $('#navbar').css('border-bottom', '2px solid var(--color0)');
      $('#navbar').css('background-color', 'rgba(255, 255, 255, 0.95)');
      $('#navbar').css('color', 'var(--color0)');
    } else {
      $('#navbar').css('border-bottom', '2px solid transparent');
      $('#navbar').css('background-color', 'transparent');
      $('#navbar').css('color', 'white');
    }
  });
});
