//if

let nota = 6

/*
if (nota <0 || nota>10) {
    alert("La nota introducida no es valida")
} else if (nota>5) {
    if (nota<7) {
        //5 - 7
        alert("Has aprobado bien")
    } else if (nota <9) {
        //7 - 9
        alert ("Has aprobado muy bien")
    }else if (nota <10) {
        //9 - 10
        alert ("Has aprobado con fenomenal")
    }else {
        //10
        alert("Has aprobado con matricula")
    }
} else {
    alert ("Has suspendido")
}*/

//condicion ? condicion_false: condicion_true {IF TERNARIO}
//nota>5 ? alert('aprobado'): alert('suspenso');

/*nota= 6;

while (nota<10) {
    alert(`nota es ${nota}`)
    nota++;
}*/

//pedir un numero por teclado
//generar un numero aleatorio Math.random()
//continua pidiendo numeros por prompt hasta que aciertes el numero general.
//cuando se acierte aparecerá un alert diciendo el número de intentos utilizados

/*
let numero = Number (prompt ("Introduce un numero "));
let aleatorio = Math.round(Math.random() * 3);
let intentos
console.log('El aleatorio generado es: '+aleatorio);

while (numeroUno != aleatorio) {
    intentos ++;
    numero = Number (prompt ('Introduce numero'))
}

alert (`Numero acertado \n Intentos utilizados ${intentos}`)

*/
let coleccionPalabras = ["uno","dos","tres","cuatro","cinco", 123, true, 223, false, 123]

/*for (let index = 0; index < coleccionPalabras.length; index++) {
    console.log(coleccionPalabras[index]);;
   console.log(typeof coleccionPalabras [index]);
   //if (typeof coleccionPalabras [index] == undefined)
}*/

/*coleccionPalabras.forEach((item, posicion, array) => {
    console.log(item);
    console.log(`\t${posicion}`);
    console.log(`\t${typeof item}`);
    console.log(`\t\t ${array}`);
});*/


//for in -->


/*for (const key in coleccionPalabras) {
    //constan element = object[key]
    if (key % 2 == 0) {
    
    console.log(`${key}`);
    console.log(`\t ${coleccionPalabras[key]}`);
    }
}*/

//for of --> el de java.




/*for (const iterator of coleccionPalabras) {
    console.log(iterator);
}*/