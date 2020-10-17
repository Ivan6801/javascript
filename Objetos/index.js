var ivan = {
    nombre: 'Ivan',
    apellido: 'Gonzalez',
    edad: 20
}

var kevin = {
    nombre: 'Kevin',
    apellido: 'Carrillo',
    edad: 21
}

var edna = {
    nombre: 'Edna',
    apellido: 'Baraja',
    edad: 19
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(ivan)
imprimirNombreEnMayusculas(kevin)
imprimirNombreEnMayusculas(edna)

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
