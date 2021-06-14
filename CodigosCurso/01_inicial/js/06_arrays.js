//let coleccionNumeros = [1,2,3,4,5,6,7,8,9]
//let coleccionCosas = ["uno", 1, true, 3,4]

//coleccionCosas.forEach ((element => console.log(element))); //para recorrer todas las cosas de una en una.
//console.log(coleccionCosas[0]);
/*coleccionCosas[0]= "otro valor";
console.log(coleccionCosas);
console.log("Añadiendo cosas nuevas");
coleccionCosas[4] ="Nuevo valor";
console.log(coleccionCosas);
coleccionNumeros[6]=true;
console.log(coleccionNumeros);*/

/*let equipos = [
    "Real Madrid",
    "Chelsea",
    "Bayern",
    "PSG",
    "Barcelona",
    "Liverpool",
    "Dormunt",
    "Lyon",
];*/

//let filtro = [];
/*equipos.push ("Liverpool", "Dormunt", "Lyon");
console.log(equipos);
console.log(`equipo eliminado: ${equipos.pop()}`);*/

//obtener un array con los equipos que tienen una B o una L
// y sacarlo por consola

/*equipos.forEach(element => {
    if (element.indexOf('B') != -1 || element.indexOf('l') != -1) {
        filtro.push(element)
    }
});*/

/*filtro = equipos.filter(
    (element) =>  element.indexOf ("B") != -1 || element.indexOf("l") != -1
);
console.log(filtro);*/

let equipos = [ ["Real Madrid", 89], ["Chelsea", 83],["Bayern", 85],["PSG", 86],["Barcelona", 80],["Liverpool", 87],["Dormunt", 88],["Lyon", 81],];


/*for (let index = 0; index < equipos.length; index++) {
    
    equipo = equipos[index];
    if (equipo[0] == 'Real Madrid' || equipo[0] == 'Barcelona') {
        console.log(equipo[1]);
    }
    
}*/

/*let numeros = [1,20,3,4,51,6,78,2,10]
numeros.sort() ();//1,2,3,4,5,6,7,20,41
numeros.sort((itemA, itemB)=> {
    if(itemA)
)*/


//1 - Bracelona 98
//2 - Madrid 78

equipos.sort((equipoA, equipoB) => {
    if (equipoA[1] > equipoB[1]) {
        return -1;
    }else if (equipoB[1] > equipo[1]) {
        return 1;
    }else{
        return 0;
    }
});

array.forEach((element, index) => {
    console.log(`${index+1} - ${element[0]} ${element[1]}`);
});