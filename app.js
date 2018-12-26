const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const date = new Date();

const seconds = date.getSeconds();
let secDeg = ((seconds / 60) * 360) + 90;

const minutes = date.getMinutes();
let minDeg = ((minutes / 60) * 360) + 90;

const hours = date.getHours();
let hourDeg = ((hours / 12) * 360) + 90;

function setDate() {
    secHand.style.transform = `rotate(${secDeg}deg)`;
    secDeg = secDeg + 6;

    minHand.style.transform = `rotate(${minDeg}deg)`;
    minDeg = minDeg + (6/60);
    
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    hourDeg = hourDeg + (3/360);
};

setInterval(setDate, 1000);
