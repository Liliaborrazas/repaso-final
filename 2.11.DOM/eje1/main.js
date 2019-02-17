'use strict';

// 1, 2, 3, lo hacemos otra vez
// Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.
const list = document.querySelector('.list');
const numbers = [1, 2, 3];

let res;
for(let i=0; i<numbers.length; i++){
    res = numbers[i]
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(res);
    newItem.appendChild(newContent);   
    console.log(newItem);
}





// Creamos un elemento nuevo, un <li>
// const newItem = document.createElement('li');
// console.log(newItem); // Devuelve "<li></li>"

// Ahora creamos algo de contenido
//const newContent = document.createTextNode('Item nuevo');

// Y se lo añadimos a nuestro <li>
// newItem.appendChild(newContent);
// console.log(newItem); // Devuelve "<li>Item nuevo</li>"