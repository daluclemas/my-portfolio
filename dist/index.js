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
const hirememodal = document.querySelector('.modal-content');
let currentTheme = "light";
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = new FormData(e.target);
    let status = document.querySelector(".my-form-status");
    fetch(e.target.action, {
        method: form.method,
        body: payload,
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            modal.style.display = "none";
            form.reset();
        }
        else {
            response.json().then((data) => {
                if (Object.hasOwnProperty(data)) {
                    status.innerHTML = data["errors"].map((error) => error["message"]).join(", ");
                }
                else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
                console.log(data);
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
});
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
    if (document.documentElement.classList.contains('dark-mode')) {
        currentTheme = "dark";
    }
    else {
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);
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
    if (e.target.classList.contains('hire-me-modal')) {
        modal.style.display = "none";
    }
});
window.addEventListener('scroll', (e) => {
    const scrolled = document.documentElement.scrollTop;
    const hireme = document.querySelector('.hire-me');
    if (scrolled > 200) {
        hireme.style.transform = 'translateX(0)';
        hireme.style.transition = '0.5s linear';
    }
    else {
        hireme.style.transform = 'translateX(500px)';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        toggleIcon.classList.add('fa-sun');
        toggleBtn.classList.add('active-toggle');
        document.documentElement.classList.add('dark-mode');
    }
});
