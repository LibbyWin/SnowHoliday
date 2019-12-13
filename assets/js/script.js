var btn = ('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }  
});

btn.on('click', function(s) {
  s.preventDefault();
  $('html, body').animate({
    scrollTop:0
  }, '450');
  });
