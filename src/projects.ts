const goback = document.querySelector('.go-back') as HTMLDivElement;

const togglebtn = document.querySelector('.theme-toggle') as HTMLDivElement;

const toggleicon = document.querySelector('.fa-moon') as HTMLElement;

goback.addEventListener('click', (e: Event | any) => {
  if (e.target.classList.contains('fa-angle-left')) {
    window.history.back();
  }
});

togglebtn.addEventListener('click', (e: Event | any) => {

  toggleicon.classList.toggle('fa-sun')
  togglebtn.classList.toggle('active-toggle')
  document.documentElement.classList.toggle('dark-mode')
});
