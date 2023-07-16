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
    function showSlides(startIndex) {
        projectItems.forEach((item, i) => {
            if (i >= startIndex && i < startIndex + itemsToShow) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
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
