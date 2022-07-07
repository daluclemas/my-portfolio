"use strict";
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');
const bars = document.querySelector('.icon');
const barTwo = document.querySelector('.icon-two');
const barThree = document.querySelector('.icon-three');
const navigation = document.querySelector('.navigation');
const clemas = document.querySelector('.my-english-name');
menuIcon.addEventListener('click', (e) => {
    nav.classList.toggle('active-nav');
    barTwo.classList.toggle('active');
    barThree.classList.toggle('active');
    navigation.classList.toggle('active');
    clemas.classList.toggle('active');
    bars.classList.toggle('active');
});
