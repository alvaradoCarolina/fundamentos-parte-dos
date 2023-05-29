"use strict";


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


const obtenerData = async (nombrePokemon)=>{
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
        const response = await peticion.json()
        console.log(response.name , response.sprites.front_default);
}
obtenerData('pikachu')

//GUARDAR OBJETO EN EL LOCALSTORAGE

"use strict";

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
        {
            let usuario ={
                name:json.name,
                username:json.username,
                email:json.email
            }
            guardarLocalStorage(usuario)
        }
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}

//OBTENER UN OBJETO EN EL LOCALSTORAGE

"use strict";

const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data"
    console.log(respuesta);
}
obtenerLocalStorage()

//ELIMINAR UN OBJETO

"use strict";

const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("No hay clave" ): localStorage.removeItem("user")
}

eliminarlocalStorage()