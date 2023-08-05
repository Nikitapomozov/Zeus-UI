const hamburger = document.querySelector('.header__hamburger');
const popup = document.querySelector('.popup');
const body = document.body;

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.toggle("open");
    hamburger.classList.toggle("active")
    body.classList.toggle("noscroll");
});

