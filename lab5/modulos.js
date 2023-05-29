// COMMONJS
//ARCHIVO MODULE

login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

module.exports = login

//ARCHIVO FUNDAMENTS

const login = require('./module')

login()

//ARCHIVO MODULE

const {login, LIKES} = require('./module')

login()
console.log(LIKES);

//ARCHIVO FUNDAMENTOS

const {login, LIKES} = require('./module')

login()
console.log(LIKES);

//ARCHIVO  MODULE

module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

module.exports.LIKES = 150

//ARCHIVO FUNDAMENTOS

const {login, LIKES} = require('./module')

login()
console.log(LIKES);


//ES MODULES
// en el archivo package.json agregar lo siguiente
"type":"module"

const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export default login

import login from "./module.js";

login()
const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

export {
    login
}

import {login} from "./module.js";

login()

export const login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

import {login} from "./module.js";

login()

