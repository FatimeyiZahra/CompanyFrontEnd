$(document).ready(function () {
    //navbar side menu------------------------------------------------------
    $(".fa-search").click(function (e) {
        e.preventDefault();
        $(".top-search").slideToggle("show");
    });

    $(".side-menu-icon").click(function (e) {
        e.preventDefault();
        $(".side-menu").addClass("open")
    });

    $(".close-side").click(function (e) {
        e.preventDefault();
        $(".side-menu").removeClass("open")
    })
    //----------------------------------------------------------------------------------------------------
    // change navbar background color---------------------------------------------------------------------
    // if (window.scrollY == 0) {
    //     $(".navbar-brand").addClass("transparent-bg");
    // }

    $(document).on('scroll', function (e) {
        if (window.scrollY > 0) {
            // $(".brandBG").removeClass("transparent-bg");
            $('.navbar').addClass('bg-light')
            $(".brandPic").removeClass('d-block').addClass('d-none');
            $(".brandPic1").removeClass('d-none').addClass('d-block');
            $('.nav-link1').addClass('nav-link-black');
            $('.nav-contact1').addClass('nav-contact1-black');
            $('.nav-icons1 ul li a').addClass('nav-icon-black')

        }
        else if (window.scrollY == 0) {
            // $(".brandBG").addClass("transparent-bg");
            $('.navbar').removeClass('bg-light')
            $(".brandPic1").removeClass('d-block').addClass('d-none');
            $(".brandPic").removeClass('d-none').addClass('d-block');
            $('.nav-link1').removeClass('nav-link-black');
            $('.nav-contact1').removeClass('nav-contact1-black');
            $('.nav-icons1 ul li a').removeClass('nav-icon-black')


        }
    })
    //------------------------------------------------------------------------------------------------
//animation wow
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
    //---------------------------------------------------------------------------------------------
// feature section's owl-carousel(homepage's)
    let numbersCarousel = $('.feature-items'); 

    $('.feature-items').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        dots: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            1000: {
                stagePadding: 100,
            }
        }
    });
    $('.carousel').carousel({ // for testimonials-area's carousel
        interval: 2000
    })
    //services page's carousel----------------------------------------------------------------------------
    $('.service-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        items:3,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 3
        //     }
        // }
    })

    //answer and question paleace,, show and hide answer and change icon -----------------------------------------------------------
    $('.card-header').each(function () {
        var elem = $(this);
        elem.click(function () {
            elem.next().slideToggle("slow");

            if ($(".eye-icon").hasClass("fa-eye-slash")) {
                $(".eye-icon").removeClass("fa-eye-slash").addClass("fa-eye");
            }
            else {
                $(".eye-icon").removeClass("fa-eye").addClass("fa-eye-slash");
            }

        })
    })
    //----------------------------------------------------------------------
    // for fact section's time
    $('.timer').countTo();
    $('.fun-item').appear(function () {
        $('.timer').countTo();
    }, {
        accY: -100
    });
    //------------------------------------------------------------------------

});


$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});


 // var o = $('.timer'); // for fact section's 
    // $(window).scroll(function () {
    //     var elemPos = o.offset().top;
    //     var elemPosBottom = o.offset().top + o.height();
    //     var winHeight = $(window).height();
    //     var scrollToElem = elemPos - winHeight;
    //     var winScrollTop = $(this).scrollTop();

    //     if (winScrollTop > scrollToElem) {
    //         if (elemPosBottom > winScrollTop) {
    //             $(document).ready(function () {
    //                 o.countTo();
    //             });

    //         }
    //     }
    // });