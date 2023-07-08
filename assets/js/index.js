
// headre bg change on scroll
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if(scrollPosition >10){
        document.getElementById('headerWrapper').classList.add('new-background')
    }else{
        document.getElementById('headerWrapper').classList.remove('new-background')
    }
})

const navMenu = document.querySelector('#navMenu')
const headerOuter = document.querySelector('.headerOuter')
const body = document.querySelector('body')
const mobobarmain = document.querySelector('#mobobarmain')
const menuClose = document.querySelector('#menuClose')

navMenu.addEventListener('click', function() {
 if(headerOuter.classList.contains('open')){
   headerOuter.classList.remove('open')
  body.classList.remove('noscroll')
  mobobarmain.classList.remove('mobobarmainAdd')
  menuClose.classList.remove('mobobarmainAdd')
}
else{
  headerOuter.classList.add('open')
  body.classList.add('noscroll')
  mobobarmain.classList.add('mobobarmainAdd')
  menuClose.classList.add('mobobarmainAdd')

 }
})


menuClose.addEventListener('click', function() {
 if(headerOuter.classList.contains('open')){
   headerOuter.classList.remove('open')
  body.classList.remove('noscroll')
  mobobarmain.classList.remove('mobobarmainAdd')
  menuClose.classList.remove('mobobarmainAdd')
}
else{
  headerOuter.classList.add('open')
  body.classList.add('noscroll')
  mobobarmain.classList.add('mobobarmainAdd')
  menuClose.classList.add('mobobarmainAdd')

 }
})


document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      pagination:false,
      perPage: 5,
      gap: 13,
      autoScroll: {
        speed: 1.5,
        pauseOnHover:false,
      },
    }).mount( window.splide.Extensions );
  });
  
  


