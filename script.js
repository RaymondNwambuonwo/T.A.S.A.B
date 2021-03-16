const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')
const yogster = document.querySelector('.yogster')
const slogan = document.querySelector('.slogan')
const slider = document.querySelector('.slider')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle("fade");
  })
})


const tl = new TimelineMax();

//define element that I'm animating
tl.fromTo(yogster, 2.1, { height: "0%" }, { height: '80%', ease: Power2.easeInOut })
  .fromTo(yogster, 2.1, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(slider, 2.1, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut }, '-=2.1')
  .fromTo(burger, 2.1, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(navLinks, 2.1, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
  