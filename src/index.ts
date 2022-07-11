const nav = document.querySelector('nav') as HTMLElement;

const menuIcon = document.querySelector('.menu-icon') as HTMLDivElement;

const bars = document.querySelector('.icon') as HTMLDivElement;

const barTwo = document.querySelector('.icon-two') as HTMLDivElement;

const barThree = document.querySelector('.icon-three') as HTMLDivElement;

const closeIcon = document.querySelector('.times') as HTMLDivElement;

const toggleBtn = document.querySelector('.theme-toggle') as HTMLDivElement;


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
  if (e.target.classList.contains('toggle-btn')) {
    e.target.classList.toggle('toggle');
    toggleBtn.classList.toggle('active-toggle')
    document.documentElement.classList.toggle('dark-mode')
  }
})

