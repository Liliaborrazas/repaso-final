'use strict';

const element = document.querySelector('#element');
const textToShow = 'Maria Perez';

element.innerHTML = `<p class="text"><span>El nombre de mi compañera es :</span>${textToShow} 
y está compuesto por ${textToShow.length} caracteres</p>`



