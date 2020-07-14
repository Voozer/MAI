const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
});



window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000, //ms
    distance: '25rem',
    delay: 300 //ms
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000, //ms
    distance: '25rem',
    delay: 600 //ms
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000, //ms
    distance: '25rem',
    delay: 300 //ms
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000, //ms
    distance: '25rem',
    delay: 300 //ms
});

