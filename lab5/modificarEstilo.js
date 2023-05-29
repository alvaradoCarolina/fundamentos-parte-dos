const buscador = document.querySelector('#search-178')
buscador.style.border="10px green solid"

// AGREGAR ELEMENTOSA

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

const enlaces = document.querySelector('.uk-panel p')
const enlaceNuevo = document.createElement('a')
enlaceNuevo.textContent="Facebook"
enlaceNuevo.style.color="blue"
enlaces.insertBefore(enlaceNuevo,enlaces.children[1])

//eliminar elementos

const buscador = document.querySelector('#search-178')
buscador.remove()
