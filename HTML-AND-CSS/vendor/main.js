
// Slick Slider

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="next"><i class="fas fa-arrow-right"></i></button>',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Menu Active

    $(function() {
        $("li a").click(function() {
           $("li a").removeClass("active");
           $(this).addClass("active");
        });
     });

    //  Wow Js Animation

    new WOW().init();

    // Tesimonial active

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<button class="arrow_btn left"><span class="arrow_left"></span></button>',
        nextArrow: '<button class="arrow_btn right"><span class="arrow_right"></span></button>'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true
    });
          

});