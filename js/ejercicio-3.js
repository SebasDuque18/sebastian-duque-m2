//crea un vector con los numeros del 1 al 10 luego recorrero y suma todos los numeros del vector y muestra el resultado de la suma

//definir el vector
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//definir variable para almacenar la suma
let suma = 0;

//recorrer el vector para sumar
for(let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
}

console.log(suma);