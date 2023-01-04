const burger = document.querySelector(".burger");
const rightNav = document.querySelector(".right");
const navLinks = document.querySelectorAll(".right ul li")

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

burger.addEventListener("click", () => {
    rightNav.style.transition="transform 15s ease-in;"
    rightNav.classList.toggle("burger-active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5}s`;
        }
    })

    line1.classList.toggle("toogle-line1");
    line2.classList.toggle("toogle-line2");
    line3.classList.toggle("toogle-line3");
})