//Date
let fechaActual = new Date ()
console.log(fechaActual.getDate()); //dia del mes
console.log(fechaActual.getDay()); //dia de la semana
console.log(fechaActual.getMonth()); //mes, +1 para obtener el mes real
console.log(fechaActual.getHours()); //horas
console.log(fechaActual.getMinutes()); //minutos
console.log(fechaActual.getSeconds()); //segundos
console.log(fechaActual.getMilliseconds()); //Milisegundos
console.log(fechaActual.getTime()); //Devuelve la fecha en milisegundos


fechaActual.setFullYear(2019);
console.log(fechaActual);


//fecha pasada que sea el dia de hoy menos 4 meses
let fechaPasada = new Date (2010, 1, 8);
fechaPasada.getTime();
console.log(`Fecha pasada: ${fechaPasada}`);

console.log('Fechas con moment');
moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(moment().subtract(10, 'days').calendar());

let frase = "   hola esto es una ejemplo de frase para tratarla con js"
frase = frase.trim();
console.log(frase.substring(0,6));
console.log(frase.substr(8,10));
console.log(frase.sub());
console.log(frase.startsWith("h"));
console.log(frase.split(" ")); //[1].startsWith("e")--> para confirmar con que letra empieza
console.log(frase.slice(1,6));
console.log(frase.search('a'));
//console.log(frase.replace(" ", ""));

for (let index = 0; index < frase.length; index++) {
    ;
}