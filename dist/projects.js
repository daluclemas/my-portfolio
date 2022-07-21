"use strict";
const goback = document.querySelector('.go-back');
const togglebtn = document.querySelector('.theme-toggle');
const toggleicon = document.querySelector('.fa-moon');
goback.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-angle-left')) {
        window.history.back();
    }
});
togglebtn.addEventListener('click', (e) => {
    toggleicon.classList.toggle('fa-sun');
    togglebtn.classList.toggle('active-toggle');
    document.documentElement.classList.toggle('dark-mode');
});
