var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var ivan = {
    nombre: 'Ivan',
    apellido: 'Gonzalez',
    altura: 1.65,
    cantidadDeLibros: 21
}


var personas = [sacha, alan, martin, dario, vicky, paula, ivan]


// var acumulador = 0

// for (var i = 0; i < personas.length; i++){
//     acumulador += personas[i].cantidadDeLibros
// }

const reducer = (acumulador, persona) => {
    return acumulador + persona.cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)

