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

document.addEventListener("DOMContentLoaded", function () {
    // Get all project items and next/prev buttons
    const projectItems = document.querySelectorAll(".project-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Set the initial index and the number of items to show at a time
    let currentIndex = 0;
    const itemsToShow = 2;

    // Function to show the current slides
    const showMore = document.getElementById("showMore");
    function showSlides(startIndex) {
        projectItems.forEach((item, i) => {
            if (i >= startIndex && i < startIndex + itemsToShow) {
                item.classList.remove("hidden");
                setTimeout(() => {
                    item.classList.add("active");
                }, 50);
            } else {
                item.classList.add("hidden");
                item.classList.remove("active");
                setTimeout(() => {}, 300);
            }
        });
    }

    // Function to handle next button click
    function showNextSlides() {
        currentIndex = (currentIndex + itemsToShow) % projectItems.length;
        showSlides(currentIndex);
    }

    // Function to handle previous button click
    function showPrevSlides() {
        currentIndex =
            (currentIndex - itemsToShow + projectItems.length) %
            projectItems.length;
        showSlides(currentIndex);
    }

    // Add event listeners to next and prev buttons
    nextBtn.addEventListener("click", showNextSlides);
    prevBtn.addEventListener("click", showPrevSlides);

    // Show the initial slides
    showSlides(currentIndex);
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
