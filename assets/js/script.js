$(document).ready(function () {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();

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


});
		// Animate loader off screen

$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});


