
let numero = 5;
let promesa = new Promise((resolve, reject) => {
    //lo que se ejecuta
    //proceso que modifica el numero segun movidas
    //esto tarda
    if(numero>0){
        resolve(numero)
    }else {
        reject('error en el numero')
    }
});

promesa.then ((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});