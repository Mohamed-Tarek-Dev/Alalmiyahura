// Certificates Slider
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

// Projects carousel
$("#project-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1000: {
            items: 1,
            margin: 10,
        },
    },
});

$("#discover-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1000: {
            items: 3,
            margin: 15,
        },
    },
});

$("#testimonials-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
            margin: 10,
        },
        1000: {
            items: 2.5,
            margin: 15,
        },
    },
});

$("#partners-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
            margin: 10,
        },
        1000: {
            items: 2.8,
            margin: 0,
        },
    },
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.8/js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                callback(data.country_code);
            })
            .catch(function () {
                callback("us");
            });
    },
    excludeCountries: ["il"],
    separateDialCode: true,
});
