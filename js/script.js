$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop:true,
      autoplay:true,
      autoplayTimeout:7000,
      dots:false,
      nav:true,
      margin:25,
     navText: [
   "<i class='fa fa-chevron-left'></i>",
   "<i class='fa fa-chevron-right'></i>"
],
responsive : {
    // breakpoint from 0 up
    0 : {
       items:1
    },
     535 : {
       items:2
    },
    // breakpoint from 480 up
  
    // breakpoint from 768 up
    1000 : {
       items:3
    }
}

//click to scroll
});
  // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    })
});

  //$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
//});