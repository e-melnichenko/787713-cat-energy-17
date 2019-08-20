var buttonBefore = document.querySelector('.slider__control--before');
var buttonAfter = document.querySelector('.slider__control--after');
var imageBefore = document.querySelector('.real-story__image--before');
var imageAfter = document.querySelector('.real-story__image--after');
var imageToggle = document.querySelector('.slider__toggle');

buttonBefore.addEventListener('click', function() {
  if(imageBefore.classList.contains('real-story__image--active')) return;
  imageAfter.classList.remove('real-story__image--active');
  imageBefore.classList.add('real-story__image--active');
  imageToggle.classList.remove('slider__toggle--right');
  imageToggle.classList.add('slider__toggle--left');

});

buttonAfter.addEventListener('click', function() {
  if(imageAfter.classList.contains('real-story__image--active')) return;
  imageBefore.classList.remove('real-story__image--active');
  imageAfter.classList.add('real-story__image--active');
  imageToggle.classList.remove('slider__toggle--left');
  imageToggle.classList.add('slider__toggle--right');
});
