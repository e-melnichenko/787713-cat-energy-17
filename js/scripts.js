"use strict";svg4everybody();var mainNav=document.querySelector(".main-nav"),menuToggle=document.querySelector(".main-nav__toggle");mainNav.classList.remove("main-nav--nojs"),menuToggle.addEventListener("click",function(){if(mainNav.classList.contains("main-nav--closed"))return mainNav.classList.remove("main-nav--closed"),void mainNav.classList.add("main-nav--opened");mainNav.classList.remove("main-nav--opened"),mainNav.classList.add("main-nav--closed")});