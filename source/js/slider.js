const buttonBefore = document.querySelector('.slider__button-before');
const buttonAfter = document.querySelector('.slider__button-after');
const imageBefore = document.querySelector('.real-story__image--before');
const imageAfter = document.querySelector('.real-story__image--after');
const imageToggle = document.querySelector('.slider__toggle');

buttonBefore.addEventListener('click', () => {
  if(imageBefore.classList.contains('real-story__image--active')) return;
  imageAfter.classList.remove('real-story__image--active');
  imageBefore.classList.add('real-story__image--active');
  imageToggle.classList.remove('slider__toggle--right');
  imageToggle.classList.add('slider__toggle--left');

});

buttonAfter.addEventListener('click', () => {
  if(imageAfter.classList.contains('real-story__image--active')) return;
  imageBefore.classList.remove('real-story__image--active');
  imageAfter.classList.add('real-story__image--active');
  imageToggle.classList.remove('slider__toggle--left');
  imageToggle.classList.add('slider__toggle--right');
});
