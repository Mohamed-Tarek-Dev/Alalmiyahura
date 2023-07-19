// Get all the dropdown links and menus
const dropdownLinks = document.querySelectorAll(".nav__content--link");
const dropdownMenus = document.querySelectorAll(".nav__content--dropdown");

// Add click event listener to each dropdown link
dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        // event.preventDefault();
        const anchor = this.querySelector("a");
        const dropdownId = anchor ? anchor.id : null;
        const dropdownMenu = dropdownId
            ? document.querySelector(`[data-dropdown="${dropdownId}"]`)
            : null;

        if (this.classList.contains("active")) {
            // Link is already active, so close the dropdown menu
            this.classList.remove("active");
            if (dropdownMenu) {
                dropdownMenu.classList.remove("active");
            }
        } else {
            // Add 'active' class to the clicked link and its related dropdown menu
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
            this.classList.add("active");
            if (dropdownMenu) {
                dropdownMenu.classList.add("active");
            }
        }
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

// footer copy emails buttons
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const emailId = button.getAttribute("data-email-id");
        const emailLink = document.getElementById(emailId);
        const emailText = emailLink.textContent;

        copyToClipboard(emailText);
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

navBtn.addEventListener("click", () => {
    modal.classList.add("show");
});
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
modal.addEventListener("click", () => {
    modal.classList.remove("show");
});
modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});
