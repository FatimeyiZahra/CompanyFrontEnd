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
    //---------------------------------------------------------------------------------------------------
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
    //---------------------------------------------------------------------------------------------

    let numbersCarousel = $('.feature-items'); // feature section's owl-carousel

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
    //------------------------------------------------------------------------------------------------------

    var o = $('.timer'); // for fact section's 
    $(window).scroll(function () {
        var elemPos = o.offset().top;
        var elemPosBottom = o.offset().top + o.height();
        var winHeight = $(window).height();
        var scrollToElem = elemPos - winHeight;
        var winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
            if (elemPosBottom > winScrollTop) {
                $(document).ready(function () {
                    o.countTo();
                });

            }
        }
    });
    $('.service-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});


$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});


