/* 1. Escribe un programa en JavaScript que realice las siguientes tareas:

Mostrar por pantalla la expresión "Hola Mundo".
Mostrar por pantalla la expresión 5*5 como texto.
Mostrar por pantalla el resultado de la expresión 5*5.*/ 
/*
console.log("Hola mundo");
console.log("5 * 5");

let numeroUno = 5;
let numeroDos = 5;

console.log(numeroUno * numeroDos);*/


/*2. Realiza la siguientes tareas en el código js

Declara una variable constante con el nombre fijo y dale un valor booleano de true
Declara una variable con el nombre numero y dale un valor de texto de 1
Declara una variable con el nombre numeroCorrecto y asígnale el valor numérico de la variable del apartado anterior
Declara dos variables con el nombre suma y sumaOK. A la primera asígnale la suma de la variable numero + numero y a la segunda asígnale el valor de la variable numeroCorrecto + numeroCorrecto. Muestra el valor de ambas variables por pantalla
Muestra por pantalla el tipo de las dos variables anteriores*/


/*const nombre = true;
let numero = "1";
let numeroCorrecto = "1";
let suma = numero + numero;
let sumaOK = numeroCorrecto + numeroCorrecto;
console.log(`la variable suma es ${typeof suma}, la variable sumaOK es ${typeof sumaOK}`); */


/* 3. Crea un programa que pida por prompt al usuario
 4 variables que representen los lados de un cuadrado.
  Una vez introducido todas se mostrar una alerta por 
  pantalla indicando si es correcto el valor de los lados introducidos. 
  En caso de ser correcto que también aparezca el área de un cuadrado (lado * lado)*/

  /*let ladoUno = Number (prompt ("Introduce cuanto mide el lado uno"));
  let ladoDos = Number (prompt ("Introduce cuanto mide el lado dos"));
  let ladoTres = Number (prompt ("Introduce cuanto mide el lado tres"));
  let ladoCuatro = Number (prompt ("Introduce cuanto mide el lado cuatro"));
  
  if (!isNaN(ladoUno) && !isNaN(ladoDos) && !isNaN(ladoTres) && !isNaN(ladoCuatro)) {
            let area = ladoUno * ladoDos;
              alert (`el area del cuadrado es ${area}`)
              
          } else {
              alert(`error`)
          }*/
          


/*4. Determine si un número introducido en un Prompt es par o no,
 la respuesta será mostrada en una alerta. */

/*let numeroPar = Number (prompt ("Introduce un numerico acá parse"))
if (numeroPar %2 == 0) {
    alert (`El numero es par`) 
} else {
    alert(`el numero es impar`)
}*/

/*5. Pedir al usuario un nombre y una letra en prompts diferentes.

 Una vez metido esto saltará una alerta indicando si el nombre contiene la letra.
 En caso de ser positivo también dirá el número de letras que tiene */

 /*let nombre = prompt ("Introduce un nombre");
 let letra = prompt ("Introduce una letra");

 if (nombre.indexOf(letra)!= -1) {

    let contador =0;
    for (let index = 0; index < nombre.length; index++) {
        if (nombre.charAt(index) == letra) {
            contador++;
        }
        
    }
     alert(`la letra está y tiene ${nombre.length} y hay ${contador} ${letra}`)
 }
*/

/* 6. Pedir dos numero por entrada del usuario indique por consola:

cuál de los dos es mayor. En el caso de ser iguales también lo indicará
si se introduce números menores que 0 o letras que salte una alerta indicando el error */

let numeroUno = Number (prompt("Intro numero"))
let numeroDos = Number (prompt("Intro numero"))

if ((!isNaN (numeroUno) && numeroDos>0) && (!isNaN (numeroUno) && numeroUno>0)) {
    if (numeroUno>numeorDos) {
        alert(`el primer numero es mas grande`)
    }else if (numeroDos>numeroUno) {
        alert(`El segundo numero es mas grande`)
    }else {
        alert(`son iguales`)
    }
}else{
    alert('Fallo en los datos')
}