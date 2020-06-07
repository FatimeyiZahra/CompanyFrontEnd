// function wowAnimation() {
//     var wow = new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated',
//         offset: 0,
//         mobile: false,
//         live: true
//     });
//     wow.init();
// }


// $(window).on('load', function () {
//     wowAnimation();
// });


$(document).ready(function () {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();


    // let numbersCarousel = $('.feature-items');

    // numbersCarousel.owlCarousel({
    //     loop: true,
    //     margin: 20,
    //     dots: true,
    //     autoplay: true,
    //     autoplayTimeout: 1000,
    //     autoplayHoverPause: true,
   
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         }
    //     }
    // });
});
let numbersCarousel = $('.feature-items');

$('.feature-items').owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    // dotData: true,
    // dotsData: true,
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
$('.carousel').carousel({
    interval: 2000
  })
