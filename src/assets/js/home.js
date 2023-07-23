// Carousel class to handle initialization and configuration
class CustomCarousel {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
    }

    init() {
        // Get the HTML direction attribute
        const isRTL = document.documentElement.getAttribute("dir") === "rtl";

        // If the HTML direction is RTL, set the "rtl" property to true in the options
        if (isRTL) {
            this.options.rtl = true;
        }

        // Initialize the carousel with the updated options
        $(this.selector).owlCarousel(this.options);
    }
}

// Create instances for each carousel on the page
const certificatesCarousel = new CustomCarousel("#certificates-carousel", {
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

const projectCarousel = new CustomCarousel("#project-carousel", {
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
            margin: 20,
        },
    },
});

const discoverCarousel = new CustomCarousel("#discover-carousel", {
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

const testimonialsCarousel = new CustomCarousel("#testimonials-carousel", {
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

const partnersCarousel = new CustomCarousel("#partners-carousel", {
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

// Initialize all carousels
certificatesCarousel.init();
projectCarousel.init();
discoverCarousel.init();
testimonialsCarousel.init();
partnersCarousel.init();

// Function to animate counting from zero to a target value with a specified increment
function animateCount(targetValue, duration, element, increment = 1) {
    const startValue = 0;
    const stepCount = Math.ceil((targetValue - startValue) / increment);
    const stepTime = Math.abs(Math.floor(duration / stepCount));
    const animationSpeed = 20; // Increase this value to count faster (lower values mean faster counting)

    function updateCount(currentValue, element) {
        const icon = element.dataset.icon || ""; // Get the icon element from the data attribute
        element.textContent = ""; // Clear the content of the element
        element.insertAdjacentHTML("afterbegin", `${icon}${currentValue}`);
    }

    function animate(currentValue, targetValue, element) {
        if (
            (increment > 0 && currentValue >= targetValue) ||
            (increment < 0 && currentValue <= targetValue)
        ) {
            updateCount(targetValue, element);
        } else {
            updateCount(currentValue, element);
            setTimeout(() => {
                animate(currentValue + increment, targetValue, element);
            }, stepTime / animationSpeed);
        }
    }

    animate(startValue, targetValue, element);
}

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to start the count animation for the element when it is in the viewport
function handleScroll() {
    const countElements = document.querySelectorAll(".views");
    countElements.forEach((element) => {
        if (isInViewport(element) && !element.dataset.animated) {
            const countValue = parseInt(element.textContent.replace(/\D/g, "")); // Extract the number from the element's content
            const icon = element.querySelector("i").outerHTML; // Extract the icon element (e.g., <i class="fa-light fa-eye"></i>)
            element.dataset.icon = icon; // Store the icon element in a data attribute
            animateCount(countValue, 1000, element, 10); // Adjust the duration and increment as needed (1000 milliseconds and 10 as increment in this example)
            element.dataset.animated = true; // Set the animated flag to prevent re-animation
        }
    });
}

// Add the scroll event listener to start the animation when scrolling to the section
window.addEventListener("scroll", handleScroll);

// Optional: To start the animation immediately if the element is already in the viewport when the page loads
handleScroll();

// ======================================= Let's talk phone codes
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
