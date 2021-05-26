$(document).ready(function() {
  
  $('.open-nav, .menu2-item a').click(function(){
    $('.menu2-item').slideToggle(509);
  })
  




  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0:{
        items: 1
      },
      575: {
        items:1
      },
      800:{
        items:2
      }
      
    }
  });
});

$(function(){
  $('.menu a, .menu2-item a').on('click', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },500)
  })
})