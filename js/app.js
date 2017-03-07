

$(document).ready(function() {

    $('#fullpage').fullpage({
      
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
         $('#fp-nav').removeClass("white");
    }
      if (index <= 2) {
                      $('.open-menu').removeClass("grey");

    }
      if (direction == 'down') {
        $('#arrow').fadeOut('slow');
                                      $('.open-menu').removeClass("wheat");

      } 
         if (nextIndex == 1) {
        $('#arrow').show();
        $('.open-menu').addClass("wheat");
        $('#fp-nav').addClass("white");


    }
      if (nextIndex == 2 && direction =='down') {
        $('#arrow').show();


    }
   if (nextIndex == 3) {
                $('.open-menu').addClass("grey");

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


 $('.modal').on('click', function() {
  $('#arrow').show();
  $('#fp-nav').show();
    $('#menuBtn').show();

 });

  $('.top').on('click', function() {

                $('.open-menu').removeClass("grey");

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



