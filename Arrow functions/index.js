var ivan = {
    nombre: 'Ivan',
    apellido: 'Gonzalez',
    edad: 20,
    ingeniero: false,
    profesional: true,
    cantante: false,
    cocinero: true,
    dj: false,
    guitarrista: false,
    drone: true
}

var edna = {
    nombre: 'Edna',
    apellido: 'Baraja',
    edad: 17,
    ingeniero: true,
    profesional: false,
    cantante: false,
    cocinero: true,
    dj: false,
    guitarrista: false,
    drone: true
}

var kevin = {
    nombre: 'Kevin',
    apellido: 'Carrillo',
    edad: 21,
    ingeniero: true,
    profesional: false,
    cantante: false,
    cocinero: true,
    dj: false,
    guitarrista: false,
    drone: true
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad ${persona.edad}`)
    } else {
        console.log(`${persona.nombre} es menor de edad ${persona.edad}`)
    }
}
//ACCESO DENEGADO
function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

imprimirSiEsMayorDeEdad(ivan)
imprimirSiEsMayorDeEdad(edna)
imprimirSiEsMayorDeEdad(kevin)

