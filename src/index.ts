const nav = document.querySelector('nav') as HTMLElement;

const menuIcon = document.querySelector('.menu-icon') as HTMLDivElement;

const bars = document.querySelector('.icon') as HTMLDivElement;

const barTwo = document.querySelector('.icon-two') as HTMLDivElement;

const barThree = document.querySelector('.icon-three') as HTMLDivElement;

const navigation = document.querySelector('.navigation') as HTMLElement;

const clemas = document.querySelector('.my-english-name') as HTMLHeadingElement;

menuIcon.addEventListener('click', (e: Event) => {
  nav.classList.toggle('active-nav');
  barTwo.classList.toggle('active');
  barThree.classList.toggle('active');
  navigation.classList.toggle('active');
  clemas.classList.toggle('active');
  bars.classList.toggle('active');
})

