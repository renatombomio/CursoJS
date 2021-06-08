// operadores de asignación
    let numeroUno = 6;
    let numeroDos = 7;
// operadores aritméticos
    let suma = 5+8;
    let resta = 5-8;
    let multi = 5*8;
    let division = 5/8;
    let resto = 5%8;
    
    resta -= 4;
    suma += 6;
    multi *= 2;
    division /= 4;
    resto %= 2;

    //console.log(`La suma total es ${suma} de tipo ${typeof suma}`);
    //console.log(`La resta total es ${resta} ${typeof resta}`);
    //console.log(`La multiplicacion total es ${multi} ${typeof multi}`);
    //console.log(`La division total es ${division} ${typeof division}`);
    //console.log(`el resto total es ${resto} ${typeof resto}`);
    

//mensaje de alerta para el usuario.
//alert (`Esto es un ejemplo de alert, el resultado de la suma es: ${suma}`)   
 //let nombre = prompt (`Dime como te llamas bro`)
 //console.log(`Mi nombre es: ${nombre}`);
 //alert (`El nombre introducido es ${nombre}`)

 //simular un login. Pedir por prompt user - pass. y comprobar si el user es admin y el pass es admin.

 //let nombreUsuario = prompt(`Introduce nombre de usuario`)
 //let passUsuario = prompt("Introduce contraseña")

 /*if (nombreUsuario == "admin" && passUsuario == "admin") {
     alert("Login correcto")
 } else {
     alert ("Login incorrecto")
 }*/


 //se piden dos numeros por prompt y se muestra en 1 alert todos los resultados de los numeros (siempre y cuando sean positivos y ademas los datos introducidos sean numeros)

  /*let numero1 = Number (prompt ("Introduce numero uno"))
  let numero2 = Number (prompt ("Introduce numero dos"))

  if ((numero1 >0 && !isNaN(numero1)) && (numero2 >0 && !isNaN(numero2))) {
    alert (`La suma es ${numero1 + numero2}\n,
     la resta es ${numero1 - numero2}\n,
      la multiplicacion es ${numero1 * numero2}\n,
       la division es ${numero1/numero2}\n
        y el resto es ${numero1%numero2}`)
  } else {
      alert('Alguno de los datos no es correcto')
  }
  */

 numeroUno = '6';
 numeroDos = 6;

let palabraUno = "Hola";
let palabraDos = "hola";

 let comparacion = numeroUno != numeroDos;
 let comparacionConTipos = numeroUno === numeroDos
 console.log(comparacionConTipos);
 let comparacionPalabras = palabraUno === palabraDos

//Arrays operadores

let coleccionPalabras = ["uno", "dos", "tres","cuatro","cinco", "seis"];
console.log(coleccionPalabras[1]);
