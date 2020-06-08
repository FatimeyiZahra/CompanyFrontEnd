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

    $('.timer').countTo({ // for fact section's timer
        speed: 5000, // how long it should take to count between the target numbers
    });
});


