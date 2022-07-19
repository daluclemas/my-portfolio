
const nav = document.querySelector('nav') as HTMLElement;

const menuIcon = document.querySelector('.menu-icon') as HTMLDivElement;

const bars = document.querySelector('.icon') as HTMLDivElement;

const barTwo = document.querySelector('.icon-two') as HTMLDivElement;

const barThree = document.querySelector('.icon-three') as HTMLDivElement;

const closeIcon = document.querySelector('.times') as HTMLDivElement;

const toggleBtn = document.querySelector('.theme-toggle') as HTMLDivElement;

const toggleIcon = document.querySelector('.fa-solid') as HTMLElement;

const modal = document.querySelector('.modal') as HTMLElement;

const closebutton = document.querySelector('.close-button') as HTMLDivElement;

const footertext = document.querySelector('.footer-text .date') as HTMLParagraphElement;

footertext.innerHTML = new Date().getFullYear().toString();

const showmodal = document.querySelector('.show-modal') as HTMLElement;

const showmodal2 = document.querySelector('.hire-me') as HTMLElement;


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

});

toggleBtn.addEventListener('click', (e: Event | any) => {

  toggleIcon.classList.toggle('fa-sun')
  toggleBtn.classList.toggle('active-toggle')
  document.documentElement.classList.toggle('dark-mode')
});


closebutton.addEventListener('click', (e: Event | null) => {
  modal.style.display="none"
})

showmodal.addEventListener('click', (e:Event | null) => {
  modal.style.display = "block"
  nav.classList.remove('active-nav');
  barTwo.classList.remove('active');
  barThree.classList.remove('active');

})

showmodal2.addEventListener('click', (e:Event | null) => {
  modal.style.display = "block";
  nav.classList.remove('active-nav');
  barTwo.classList.remove('active');
  barThree.classList.remove('active');

})

modal.addEventListener('click', (e: Event | null) => {
  modal.style.display = "none";
  
})


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

