'use strict';
// Cómo te llamas?
// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola ', con el nombre que aparece en el input de texto.
// Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para recoger el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, para recoger el valor de un input utilizaremos value.
const name = document.querySelector('#name');
const btn = document.querySelector('.btn');


const handlerBtn = (e)=> {
    const author = e.currentTarget.value;
    console.log(`hola ${author}`)
    
}

btn.addEventListener('click',handlerBtn)

