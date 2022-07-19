"use strict";
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');
const bars = document.querySelector('.icon');
const barTwo = document.querySelector('.icon-two');
const barThree = document.querySelector('.icon-three');
const closeIcon = document.querySelector('.times');
const toggleBtn = document.querySelector('.theme-toggle');
const toggleIcon = document.querySelector('.fa-solid');
const modal = document.querySelector('.modal');
const closebutton = document.querySelector('.close-button');
const footertext = document.querySelector('.footer-text .date');
footertext.innerHTML = new Date().getFullYear().toString();
const showmodal = document.querySelector('.show-modal');
const showmodal2 = document.querySelector('.hire-me');
menuIcon.addEventListener('click', (e) => {
    nav.classList.add('active-nav');
    barTwo.classList.add('active');
    barThree.classList.add('active');
    bars.classList.add('active');
});
closeIcon.addEventListener('click', () => {
    nav.classList.remove('active-nav');
    barTwo.classList.remove('active');
    barThree.classList.remove('active');
});
toggleBtn.addEventListener('click', (e) => {
    toggleIcon.classList.toggle('fa-sun');
    toggleBtn.classList.toggle('active-toggle');
    document.documentElement.classList.toggle('dark-mode');
});
closebutton.addEventListener('click', (e) => {
    modal.style.display = "none";
});
showmodal.addEventListener('click', (e) => {
    modal.style.display = "block";
    nav.classList.remove('active-nav');
    barTwo.classList.remove('active');
    barThree.classList.remove('active');
});
showmodal2.addEventListener('click', (e) => {
    modal.style.display = "block";
    nav.classList.remove('active-nav');
    barTwo.classList.remove('active');
    barThree.classList.remove('active');
});
modal.addEventListener('click', (e) => {
    modal.style.display = "none";
});
window.addEventListener('scroll', (e) => {
    const scrolled = document.documentElement.scrollTop;
    const hireme = document.querySelector('.hire-me');
    if (scrolled > 260) {
        hireme.style.transform = 'translateX(0)';
        hireme.style.transition = '0.5s linear';
    }
    else {
        hireme.style.transform = 'translateX(500px)';
    }
});
