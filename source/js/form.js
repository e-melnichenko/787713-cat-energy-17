'use strict'

var form = document.querySelector('form');
var catName = document.querySelector('[id=cat-name]');
var catWeight = document.querySelector('[id=cat-weight]');
var email = document.querySelector('[id=e-mail]');
var phone = document.querySelector('[id=phone]');
var inputsReq = [catName, catWeight, email, phone];
var inputsEmpty = [];

form.addEventListener('submit', function(evt) {
  inputsEmpty = inputsReq.filter( function(input) {
    return input.value ? false : true
  });

  if(inputsEmpty.length === 0) return;

  evt.preventDefault();

  inputsEmpty.map( function(input) {
    if(input.classList.contains('form__invalid')) return;
    input.classList.add('form__invalid');
    input.addEventListener("change", function() {
      if(!input.value) return;
      input.classList.remove('form__invalid');
    })
  });

  inputsEmpty[0].focus();
})
