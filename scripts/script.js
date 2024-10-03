const hamburgerButton = document.querySelector('.hamburger');

const header = document.querySelector('header');

hamburgerButton.addEventListener('click', function() {
    header.classList.toggle('nav-open')
});