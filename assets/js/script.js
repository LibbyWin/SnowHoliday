var btn = ('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 450) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }  
});

