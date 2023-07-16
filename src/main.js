// Get all the dropdown links and menus
const dropdownLinks = document.querySelectorAll(".nav__content--link");
const dropdownMenus = document.querySelectorAll(".nav__content--dropdown");

// Add click event listener to each dropdown link
dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
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
    const offset = 80; // Adjust this value as needed
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
