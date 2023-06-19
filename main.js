
let tl = gsap.timeline();

tl.from('.hero__title', {opacity: 0, y: 100, duration: 1})
  .from('.hero__btn', {opacity: 0, y: 100, duration: 1},"-=1")
  .from('.hero__descr', {opacity: 0, duration: 1})

  .from('#ph-1', {opacity: 0, duration: 1}, "-=0.7")
  .from('#ph-2', {opacity: 0, duration: 1}, "-=0.7")
  .from('#ph-3', {opacity: 0, duration: 1}, "-=0.7")


let open = document.querySelector('.burger');
let close = document.querySelector('.close');

let ml = gsap.timeline({paused: true});
ml.fromTo('.menu', {display: 'none', opacity: 0}, {display: 'block', duration: 0.5, opacity: 1, ease: 'sine' })
  .from('.menu__top', {duration: 0.5, y: -30, opacity: 0, ease: 'sine' })
  .from('.nav__list', {duration: 0.5, y: 30, opacity: 0, ease: 'sine' })
  .from('.social, .menu__right', {duration: 0.5, y: -30, opacity: 0, ease: 'sine' })

  open.onclick = function() {
    ml.play();
  }

  close.onclick = function() {
    ml.reverse();
  }
