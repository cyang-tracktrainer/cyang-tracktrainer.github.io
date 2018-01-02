$(document).ready( function () {
  var bioClassList = document.getElementById('bio').classList;
  $('#abhi').click(function() {
    if (bioClassList.contains('maximized')) {
      $('#bio').slideUp();
      $('#bio-content-abhi').hide();
      $('#ash').animate({ opacity: 1 });
      $('#chris').animate({ opacity: 1 });
      bioClassList.replace('maximized', 'minimized');
    } else {
      $('#bio').slideDown();
      $('#bio-content-abhi').show();
      $('#ash').animate({ opacity: 0.3 });
      $('#chris').animate({ opacity: 0.3 });
      bioClassList.replace('minimized', 'maximized');
    }
  });
  $('#ash').click(function() {
    if (bioClassList.contains('maximized')) {
      $('#bio').slideUp();
      $('#bio-content-ash').hide();
      $('#abhi').animate({ opacity: 1 });
      $('#chris').animate({ opacity: 1 });
      bioClassList.replace('maximized', 'minimized');
    } else {
      $('#bio').slideDown();
      $('#bio-content-ash').show();
      $('#abhi').animate({ opacity: 0.3 });
      $('#chris').animate({ opacity: 0.3 });
      bioClassList.replace('minimized', 'maximized');
    }
  });
  $('#chris').click(function() {
    if (bioClassList.contains('maximized')) {
      $('#bio').slideUp();
      $('#bio-content-chris').hide();
      $('#ash').animate({ opacity: 1 });
      $('#abhi').animate({ opacity: 1 });
      bioClassList.replace('maximized', 'minimized');
    } else {
      $('#bio').slideDown();
      $('#bio-content-chris').show();
      $('#ash').animate({ opacity: 0.3 });
      $('#abhi').animate({ opacity: 0.3 });
      bioClassList.replace('minimized', 'maximized');
    }
  });
});
