'use strict'

const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

menuToggle.addEventListener('click', () => {

  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    return
  };

  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
})
