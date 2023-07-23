import "animate.css";

document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();

    // Page loading
    document.onreadystatechange = function () {
        const loadingDiv = document.querySelector(".loading");
        if (document.readyState === "loading") {
            loadingDiv.classList.remove("hidden");
        } else {
            loadingDiv.classList.add("hidden");
        }
    };

    // Navbr Dropdown menus
    const dropdownLinks = document.querySelectorAll(".nav__content--link");
    const dropdownMenus = document.querySelectorAll(".nav__content--dropdown");

    function toggleDropdown(link) {
        const anchor = link.querySelector("a");
        const dropdownId = anchor ? anchor.id : null;
        const dropdownMenu = dropdownId
            ? document.querySelector(`[data-dropdown="${dropdownId}"]`)
            : null;

        link.classList.toggle("active");
        if (dropdownMenu) {
            dropdownMenu.classList.toggle("active");
        }
    }

    // Event listener for dropdown links
    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            // event.preventDefault();
            toggleDropdown(this);
            dropdownLinks.forEach((otherLink) => {
                if (otherLink !== this) {
                    otherLink.classList.remove("active");
                    const otherAnchor = otherLink.querySelector("a");
                    const otherDropdownId = otherAnchor ? otherAnchor.id : null;
                    const otherDropdownMenu = otherDropdownId
                        ? document.querySelector(
                              `[data-dropdown="${otherDropdownId}"]`,
                          )
                        : null;
                    if (otherDropdownMenu) {
                        otherDropdownMenu.classList.remove("active");
                    }
                }
            });
        });
    });

    dropdownMenus.forEach((menu) => {
        menu.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    // Close dropdown menu when clicking outside
    window.addEventListener("click", function (event) {
        if (
            !event.target.closest(".nav__content--link") &&
            !event.target.closest(".nav__content--dropdown")
        ) {
            dropdownLinks.forEach((link) => {
                link.classList.remove("active");
            });
            dropdownMenus.forEach((menu) => {
                menu.classList.remove("active");
            });
        }
    });

    // Close dropdown menu when scrolling
    window.addEventListener("scroll", function () {
        dropdownLinks.forEach((link) => {
            link.classList.remove("active");
        });
        dropdownMenus.forEach((menu) => {
            menu.classList.remove("active");
        });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById("menu-btn");
    const navbar = document.querySelector(".nav__content");

    hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("open");
        navbar.classList.toggle("opened");
    });

    // Change Navbar with scroll
    function handleScroll() {
        const nav = document.querySelector("nav");
        const offset = nav.offsetHeight;
        const body = document.body;
        const navHeight = nav.offsetHeight;

        if (window.scrollY > offset) {
            nav.classList.add("scrolled");
            body.style.paddingTop = `${navHeight}px`;
        } else {
            nav.classList.remove("scrolled");
            body.style.paddingTop = `0`;
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Initialize Owl Carousel
    $("#nav-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
                margin: 50,
            },
            1400: {
                items: 2,
            },
        },
    });

    // Copy email buttons
    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const emailId = button.getAttribute("data-email-id");
            const emailLink = document.getElementById(emailId);
            const emailText = emailLink.textContent;
            copyToClipboard(emailText);

            // Add the "copied" class to the span element
            const spanElement = emailLink.nextElementSibling;
            spanElement.classList.add("copied");

            // Remove the "copied" class after a short delay (optional)
            setTimeout(() => {
                spanElement.classList.remove("copied");
            }, 1500); // 1.5 seconds, you can adjust this value as needed
        });
    });

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    }

    // Modal Phone number
    var input = document.querySelector("#modal-phone");
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

    // Navbar popup
    const navBtn = document.querySelector(".nav--button");
    const modal = document.querySelector(".modal-popup");
    const closeBtn = document.querySelector(".modal__close");
    const modalContainer = document.querySelector(".modal__container");

    const toggleModal = () => {
        modal.classList.toggle("show");
    };

    navBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
    modal.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Back to the Top button
    const backToTopBtn = document.querySelector(".back-to-top-btn");

    // Function to toggle button visibility
    function toggleBackToTopButton() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    }

    // Add event listener to check scroll position and toggle button visibility
    window.addEventListener("scroll", toggleBackToTopButton);

    // Smoothly scroll the page to the top when the button is clicked
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// Toggle lang list dropdown menu
function toggleLanguageList() {
    const languageList = document.querySelector(".lang ul");
    languageList.classList.toggle("show");
}
document
    .getElementById("footer-lang")
    .addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleLanguageList();
    });

document.addEventListener("click", function (event) {
    const languageList = document.querySelector(".lang ul");
    const button = document.getElementById("footer-lang");

    if (!languageList.contains(event.target) && event.target !== button) {
        languageList.classList.remove("show");
    }
});
