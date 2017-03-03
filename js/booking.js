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


$(document).ready(function() {
    $('#fullpage').fullpage({
      /*scrollOverflowOptions:true,
      fitToSection:false,
      lazyLoading: true*/
      navigation:true,
      responsiveHeight:414,
      responsiveWidth:736,
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
   
     fixedElements:'#arrow,#menuBtn,#modalNavigation',
     onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);
     
      //after leaving section 2
         if (index > 1) {
        $('#arrow').hide();



    }
      if (direction == 'down') {
        $('#arrow').fadeOut('slow');
         $('.open-menu').removeClass("grey");
      
      } 
         if (nextIndex == 2) {
        $('#arrow').show();
          $('.open-menu').addClass("grey");
       
    }
         if (nextIndex == 1) {
        $('#arrow').show();
          $('.open-menu').removeClass("grey");
       
    }

    }

 

//       afterLoad: function(anchorLink, index) {
//     if (index == 2) {
//         $('#arrow').hide();
//     }
// }
 
// onLeave: function(index, nextIndex, direction) {
//     if(index == 2) {
//         $('#arrow').show();
//     }
// }
    });

});
$(document).ready(function() {
  

 $('.open-menu').on('click', function() {
  $('#menuBtn').fadeOut();
  

  $('#fp-nav').fadeOut();
  $('#arrow').fadeOut();
 



 });

 $('.modal .close').on('click', function() {
  $('#arrow').show();
  $('#fp-nav').show();
    $('#menuBtn').show();

 });







});

   var lastScrollTop = 0;

$(window).scroll(function() {

    var scrollTop = $(this).scrollTop();
    
    if (scrollTop > lastScrollTop) {
        
        $('#arrow').hide();

    } else {
     
        $('#arrow').show();
         $('#menuBtn').show();
    }
    
    lastScrollTop = scrollTop;
});



