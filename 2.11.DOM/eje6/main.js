'use strict';

const mainElement = document.getElementById('main__list');
const options = [
  {
    text: 'blanco',
    value: 'white'
  },
  {
    text: 'azul',
    value: 'blue'
  },
  {
    text: 'rojo',
    value: 'red'
  },
  {
    text: 'verde',
    value: 'green'
  },
  {
    text: 'amarillo',
    value: 'yellow'
  },
  {
    text: 'rosa',
    value: 'pink'
  }
];

function changeColor(event) {
  this.parentNode.style.color = event.target.value;
}

for (let i = 0; i < 100; i++) {
  const newLi = document.createElement('li');
  const newSelect = document.createElement('select');

  const liText = document.createTextNode('He aprendido bien como funcionan los bucles');
  newLi.appendChild(liText);

  options.forEach(option => {
    const newOption = document.createElement('option');
    if (option.value === 'white') {
      newOption.setAttribute('selected', true);
    }
    newOption.value = option.value;
    newOption.appendChild(document.createTextNode(option.text));
    newSelect.addEventListener('change', changeColor);

    newSelect.appendChild(newOption);
  })
  newLi.appendChild(newSelect)

  mainElement.appendChild(newLi);
}