$("#certificates-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 4,
            margin: 80,
        },
    },
});