const goback = document.querySelector('.go-back') as HTMLDivElement;

goback.addEventListener('click', (e: Event | any) => {
  if (e.target.classList.contains('fa-angle-left')) {
    window.history.back();
  }
});
