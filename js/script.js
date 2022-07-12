'use strict';

const btn = document.querySelector('#btn');
const root = document.querySelector(':root');

const themes = {
   default: {
      '--bg-color': '#eae9ea',
      '--block-color': '#fff',
      '--text-color': '#0b1f3b',
      '--btn-color': '#263ce7',
      '--tag-color': '#d1d7fa',
   },
   dark: {
      '--bg-color': '#282b3c',
      '--block-color': '#161e2b',
      '--text-color': '#fff',
      '--btn-color': '#263ce7',
      '--tag-color': '#253044',
   }
};

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
   const theme = isDarkTheme ? 'dark' : 'default';
   console.log(theme);

   Object.entries(themes[theme]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
   });
}