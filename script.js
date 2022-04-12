$(document).ready(function(){

    $('.navbar').hide();
  
    $(function () {
      $(window).scroll(function () {
  
        if ($(this).scrollTop() > 140) {
          $('.navbar').fadeIn(); /* fadeIn() fait apparaitre la navbar */
        } else {
          $('.navbar').fadeOut(); /* fadeIn() fait disparaitre la navbar */
        }
      });
    });
  });