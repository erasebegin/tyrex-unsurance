const nav = document.querySelector('nav');
const closeButton = document.querySelector('.close-nav-button');
const openButton = document.querySelector('.open-nav-button');

closeButton.addEventListener("click", () => {
nav.classList.remove('nav-opened');
});

openButton.addEventListener("click", () => {
    nav.classList.add('nav-opened');
})


