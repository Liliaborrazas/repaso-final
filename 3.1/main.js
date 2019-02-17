'use strict';
//¡Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map(mark => mark +1)
console.log(inflatedMarks)


//Saludar es de buena educación
//Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const greetings = names.map(hi => 'Bienvenida ' + hi);
console.log(greetings)

//Gracias por confiar en nosotros
//Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
//Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
//Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map?

const users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
const premium = (user) => {
  if(user.isPremium === true){
    console.log( `Bienvenida ${user.name} gracias por confiar`)
  }else{
    console.log(`Bienvenida ${user.name}`)
  }
}
const isPremium = users.map(premium);

//EJERCICIO 4
//Solo los premium
//Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?

const premiumUsers = users.filter(user => user.isPremium === true)
console.log(premiumUsers)



//EJERCICIO 5
//Los pares pueden entrar
//Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
//const pins = [2389, 2384, 2837, 5232, 8998];
//De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
//PISTA: Recuerda que el resto de la división entera (módulo %) de número par es 0.
const pins = [2389, 2384, 2837, 5232, 8998];
const numberPar = pins.filter(numb => numb % 2 === 0)
console.log(numberPar)



//EJERCICIO 7
//La media de la carrera
//Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?

const times = [56, 9, 45, 28, 35];

const average = times.reduce(
  (item, number) => item + number) /times.length;
  console.log(average)



