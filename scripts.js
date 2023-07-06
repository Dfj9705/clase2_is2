// OBTENER ELEMENTOS DEL DOM
// MEDIANTE SU ID
let titulo = document.getElementById('tituloPagina');
let boton = document.getElementById('botonClick')


// console.log(titulo)

// con selectores
let enlace = document.querySelector('a');
let formulario = document.querySelector('form')
let texto = document.querySelectorAll('.text-success')
let boton2 = document.querySelector('#botonClick')
let enlaceFB = document.querySelector('a[href*="facebook"]')

let enlacesSeguros = document.querySelectorAll('a[href^="https"]')

// console.log(enlaceFB)
// console.log(enlacesSeguros)

// for (const elemento of texto) {
//     console.log(elemento)
// }

// console.log(boton)
// console.log(boton2)
// console.log(enlace)
// console.log(formulario)
// console.log(texto)


let cajaParrafos = document.getElementById('cajaTexto')
// HIJOS DEL ELEMENTO
console.log(cajaParrafos.childNodes)
console.log(cajaParrafos.children[4].innerText = 'cambio desde JS')

