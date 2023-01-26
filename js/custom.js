
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/residential-plumber-1.jpeg", 
      "images/slideshow/commercial-plumber-1.jpeg"
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    // change testimonials automatically
    // disable after onclick event
    window.addEventListener("load", (event) => {
        const radios = document.querySelector('.testimonials-section').querySelectorAll('.slider__nav');

        // stop setInterval if human click
        for (var i = 0; i < radios.length; i++) {
          radios[i].addEventListener('click', function(event) {
            if (event.isTrusted) {
              clearInterval(testimonialsTimer);
            }
          });
        }

        var count = 0;
        var testimonialsTimer = setInterval(function() {
            var radio = radios[count];
            if (radio) {
                radio.click();
            }
            
            if (count === radios.length) {
                count = 0;
            } else {
                count++;
            }
        }, 5000);
    });
    
  })(window.jQuery);


