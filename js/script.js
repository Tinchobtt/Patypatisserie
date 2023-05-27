const nav = document.querySelector('.navigation-container');
const barsMenu = document.querySelector('.bars-menu');
const bar1 = document.querySelector('.line1-bar');
const bar2 = document.querySelector('.line2-bar');
const bar3 = document.querySelector('.line3-bar');

barsMenu.addEventListener('click', ()=>{
    bar1.classList.toggle('activeLine1');
    bar2.classList.toggle('activeLine2');
    bar3.classList.toggle('activeLine3');
    nav.classList.toggle('showNav');
})