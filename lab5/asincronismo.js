this

console.log("esferos");

console.log("borradores");

setTimeout(function timeout() {
    console.log("mochila personalizada");
}, 5000);

console.log("pinturas");

// codigo sincrono vs asincrono

"use strict";

function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}
console.log("comenzar a servir comida")
console.log("No hay salchipapa")
console.log("Solicitar ayuda")
const name = 'Ralph'
const respuestaEstudiante = solicitar("salchipapa")
console.log(respuestaEstudiante)
console.log("Continuar sirviendo comida");

"use strict";

function solicitar(tipo) {
    console.log(`¡Hola, ya regresé con el ${tipo}!`)
}

console.log("comenzar a servir comida")
console.log("No hay salchipapa")
console.log("Solicitar ayuda")
const name = 'Ralph'
const data = setTimeout(()=>solicitar("salchipapa"),5000)
console.log("Continuar sirviendo comida");


//PROMESAS

"use strict";

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))



obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[0].name))
    .catch(error=>console.log(error))

    //ASYNC AWAIT

    "use strict";

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




async function conexion(){
    try {
        console.log(await conexionBDDExterna(true))
    } catch (error) {
        console.log(error)
    }
}


async function conectarAPI(){
    try {
        const peticion = await obtenerProductos
        const respuesta = await peticion.json()
        console.log(respuesta[0].name)
    } catch (error) {
        console.log(error)
    }
}

conexion()
conectarAPI()