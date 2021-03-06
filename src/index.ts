
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

const hirememodal = document.querySelector('.modal-content') as HTMLElement;

let currentTheme = "light";

const form = document.querySelector('#form') as HTMLFormElement;


form.addEventListener('submit', (e: Event | any) => {
  e.preventDefault();
  const payload = new FormData(e.target);
  let status = document.querySelector(".my-form-status") as HTMLParagraphElement;
      fetch(e.target.action, {
        method: form.method,
        body: payload,
        headers: {
            'Accept': 'application/json'
        }
      }).then((response:any) => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
           modal.style.display="none"
          form.reset()
        } else {
          response.json().then((data:any) => {
            if (Object.hasOwnProperty(data)) {
              status.innerHTML = data["errors"].map((error: { [x: string]: any; }) => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }

            console.log(data)
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
   
})



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

  toggleIcon.classList.toggle('fa-sun');
  toggleBtn.classList.toggle('active-toggle');
  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    currentTheme = "dark"
  } else {
    currentTheme = 'light'
  }

  localStorage.setItem('theme', currentTheme);
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

modal.addEventListener('click', (e:Event|any) => {
  if (e.target.classList.contains('hire-me-modal')){
    modal.style.display = "none";
  }
});


window.addEventListener('scroll', (e: Event | null) => {
  const scrolled = document.documentElement.scrollTop;
  const hireme = document.querySelector('.hire-me') as HTMLDivElement;

  if (scrolled > 200) {
    hireme.style.transform = 'translateX(0)';
    hireme.style.transition = '0.5s linear'
  } else {
    hireme.style.transform = 'translateX(500px)';
  }
});

document.addEventListener('DOMContentLoaded', () => {
 
  if (localStorage.getItem('theme') === 'dark') {
    toggleIcon.classList.add('fa-sun');
    toggleBtn.classList.add('active-toggle');
    document.documentElement.classList.add('dark-mode');
  }

});
