
// Scrolling animation
$(document).ready(function() {
  $('.slide-section').click(function(e) {
    console.log('clicked');

    var linkRef = $(this).attr('href');
      $('html, body').animate({
      scrollTop: $(linkRef).offset().top
    });

    e.preventDefault();
  });
});
