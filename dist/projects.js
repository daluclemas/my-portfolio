"use strict";
const goback = document.querySelector('.go-back');
goback.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-angle-left')) {
        window.history.back();
    }
});
