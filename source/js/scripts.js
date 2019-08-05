'use strict'

const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');
const buttonBefore = document.querySelector('.slider__button-before');
const buttonAfter = document.querySelector('.slider__button-after');
const imageBefore = document.querySelector('.real-story__image--before');
const imageAfter = document.querySelector('.real-story__image--after');
const imageToggle = document.querySelector('.slider__toggle');

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

buttonBefore.addEventListener('click', () => {
  if(imageBefore.classList.contains('real-story__image--active')) return;
  imageAfter.classList.remove('real-story__image--active');
  imageBefore.classList.add('real-story__image--active');
});

buttonAfter.addEventListener('click', () => {
  if(imageAfter.classList.contains('real-story__image--active')) return;
  imageBefore.classList.remove('real-story__image--active');
  imageAfter.classList.add('real-story__image--active');
});

