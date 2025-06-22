

/*========= scroll secton active ==========*/
let sections = document.querySelectorAll('section');

window.onscroll = () => {

    /* ==== sticky navbar ===*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 150);
}

/*=== navbar toggle ===*/
let navBar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menuBar');


menuBtn.onclick = () => {
    navBar.classList.toggle('toggle');
}

/*=== number section start ===*/

let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
});


