var main = function() {
 $('.icon-menu').click(function(){
    if ($('.menu').position().left !== '0px') {
      $('.menu').animate({left: '0px'}, 200);
      $('body').animate({left: '285px'}, 200);
    } else {
     $('.menu').animate({left: '-285px'}, 200);
     $('body').animate({left: '0px'}, 200);
   }
    });
    // need to fix this above

 $('.icon-close').click(function(){
     $('.menu').animate({left: '-285px'}, 200);
     $('body').animate({left: '0px'}, 200);
 });

}


$(document).ready(main);
