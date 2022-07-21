"use strict";
const goback = document.querySelector('.go-back');
const togglebtn = document.querySelector('.theme-toggle');
const toggleicon = document.querySelector('.fa-moon');
let currenttheme = "light";
goback.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-angle-left')) {
        window.history.back();
    }
});
togglebtn.addEventListener('click', (e) => {
    toggleicon.classList.toggle('fa-sun');
    togglebtn.classList.toggle('active-toggle');
    document.documentElement.classList.toggle('dark-mode');
    if (document.documentElement.classList.contains('dark-mode')) {
        currenttheme = "dark";
    }
    else {
        currenttheme = 'light';
    }
    localStorage.setItem('theme', currenttheme);
});
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        toggleicon.classList.add('fa-sun');
        togglebtn.classList.add('active-toggle');
        document.documentElement.classList.add('dark-mode');
    }
});
