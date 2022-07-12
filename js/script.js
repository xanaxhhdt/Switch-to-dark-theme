'use strict';

const btn = document.querySelector('#btn');

if (!localStorage.getItem('isDarkTheme')) {
   localStorage.setItem('isDarkTheme', false);
}

let isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

changheTheme(isDarkTheme);

btn.addEventListener('click', btnHandler);

function btnHandler(event) {
   event.preventDefault();

   isDarkTheme = !isDarkTheme;
   localStorage.setItem('isDarkTheme', isDarkTheme);
   
   changheTheme(isDarkTheme);
}

function changheTheme(isDarkTheme) {
   
}