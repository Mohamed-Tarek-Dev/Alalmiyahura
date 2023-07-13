import "./assets/css/style.css";

const dropdown = document.querySelector("#dropdown");
const links = document.querySelectorAll(".nav__content--links ul li a");

console.log(links);

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        const linkText = e.target.textContent.trim();
        const shouldToggleClass = [
            "Solutions",
            "Services",
            "Portfolio",
        ].includes(linkText);

        if (shouldToggleClass) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
});

const hamburger = document.getElementById("menu-btn");

hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("open");
});
