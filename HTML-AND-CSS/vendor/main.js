
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
});