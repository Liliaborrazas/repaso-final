'use strict';

// EJERCICIO 1
// Función multiplicación
// Crea una función que reciba como argumento dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().
const multiplica = (par1, par2) =>{
    return(par1*par2)
};
const resultado1 = multiplica(3,2);
const resultado2 = multiplica(6,9);
const resultado3 = multiplica(9,8);

// EJERCICIO 2
// Función media
// Crea una función que reciba 4 parámetros, cada uno con un número, y devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.
const media = (p1,p2,p3,p4) =>{
    return(p1+p2+p3+p4)/4
}
console.log(media(2,4,6,8));
console.log(media(10,45,3,8));
console.log(media(52,74,36,10));
// EJERCICIO 3
// Ticket con IVA
// Crea una función que reciba como parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.
const iva = (num) =>{
    return(`Precio sin IVA ${num}, IVA: ${num*21/100} Total ${num + num*21/100}`);
};
const resultado = iva(20);

console.log(resultado);

// EJERCICIO 5
// Arrow functions everywhere