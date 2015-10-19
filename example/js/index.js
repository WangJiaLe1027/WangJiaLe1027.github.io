// Copyright 2014, Mark Murray

// Scroll function from Chris Coyier
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


$('nav ul li a').click(function(){
  $('.current').removeClass('current');
  $(this).parent().addClass('current');
});

$('.s-1 a').click(function(){
  $('.current').removeClass('current');
  $('nav ul li:nth-child(2)').addClass('current');
});

$('.x').click(function(){
  $('.container').toggleClass('close');
});