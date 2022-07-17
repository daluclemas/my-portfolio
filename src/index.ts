
const nav = document.querySelector('nav') as HTMLElement;

const menuIcon = document.querySelector('.menu-icon') as HTMLDivElement;

const bars = document.querySelector('.icon') as HTMLDivElement;

const barTwo = document.querySelector('.icon-two') as HTMLDivElement;

const barThree = document.querySelector('.icon-three') as HTMLDivElement;

const closeIcon = document.querySelector('.times') as HTMLDivElement;

const toggleBtn = document.querySelector('.theme-toggle') as HTMLDivElement;

const toggleIcon = document.querySelector('.fa-solid') as HTMLElement;

const footertext = document.querySelector('.footer-text .date') as HTMLParagraphElement;

footertext.innerHTML = new Date().getFullYear().toString();


menuIcon.addEventListener('click', (e: Event) => {
  nav.classList.add('active-nav');
  barTwo.classList.add('active');
  barThree.classList.add('active');
  bars.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  nav.classList.remove('active-nav');
  barTwo.classList.remove('active');
  barThree.classList.remove('active');

  // setTimeout(() => {
  //   console.log(5)
  //   nav.classList.remove('remove-nav');
  //   nav.classList.remove('active-nav');
  // }, 1000)
});

toggleBtn.addEventListener('click', (e: Event | any) => {
  // if (e.target.classList.contains('fa-moon')) {
  //   e.target.classList.toggle('fa-sun');
  //   toggleBtn.classList.toggle('active-toggle')
  //   document.documentElement.classList.toggle('dark-mode')
  // }

  toggleIcon.classList.toggle('fa-sun')
  toggleBtn.classList.toggle('active-toggle')
  document.documentElement.classList.toggle('dark-mode')
});


window.addEventListener('scroll', (e: Event | null) => {
  const scrolled = document.documentElement.scrollTop;
  const hireme = document.querySelector('.hire-me') as HTMLDivElement;

  if (scrolled > 260) {
    hireme.style.transform = 'translateX(0)';
    hireme.style.transition = '0.5s linear'
  } else {
    hireme.style.transform = 'translateX(500px)';
  }
})

