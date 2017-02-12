

// $(document).ready(function(){
  
//   $('.owl-carousel').owlCarousel({
//     items:4,
//     lazyLoad:true,
//     loop:true,
//     margin:10
// });
// });


// $(document).ready(function(){
//   $(".mobile-nav").on('click',function() {
//   $(".main-nav li").slideToggle();
// })
  
// });

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});