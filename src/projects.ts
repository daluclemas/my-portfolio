const goback = document.querySelector('.go-back') as HTMLDivElement;

const togglebtn = document.querySelector('.theme-toggle') as HTMLDivElement;

const toggleicon = document.querySelector('.fa-moon') as HTMLElement;

let currenttheme = "light";

goback.addEventListener('click', (e: Event | any) => {
  if (e.target.classList.contains('fa-angle-left')) {
    window.history.back();
  }
});

togglebtn.addEventListener('click', (e: Event | any) => {

  toggleicon.classList.toggle('fa-sun');
  togglebtn.classList.toggle('active-toggle');
  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    currenttheme = "dark"
  } else {
    currenttheme = 'light'
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
