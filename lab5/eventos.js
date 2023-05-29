//evento click

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

button.addEventListener('click',function () {
    alert("Abrir Popup")
})

//evento mouseout
const buscador = document.querySelector('#search-178')

buscador .addEventListener('mouseenter',function () {
    const buscador = document.querySelector('#search-178')
		buscador.style.border="10px green solid"
})

buscador .addEventListener('mouseout',function () {
    const buscador = document.querySelector('#search-178')
		buscador.style.border=""
})

//evento input

const buscador = document.querySelector('#search-178')


buscador .addEventListener('input',function (e) {
    if(e.target.value ==="")
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border="10px red solid"
			}
		else 
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border=""
				console.log(e.target.value)
			}
})

//evento submit

const buscador = document.querySelector('#search-178')


buscador .addEventListener('submit',(e)=> {
	e.preventDefault()
	console.log("enviando el formulario")
})

//evento keypress

const buscador = document.querySelector('#search-178')


buscador .addEventListener('keypress',(e)=> {
  if (event.key === "6") {
			e.preventDefault()
			console.log("enviando el formulario")
	}
})