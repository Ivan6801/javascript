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
    edad: 19,
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

function imprimir(persona) {
    if(persona.ingeniero === true) {
        console.log(`${persona.nombre} ${persona.apellido} es ingeniero`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es ingeniero)`)
    }
    
    if(persona.profesional === true) {
        console.log(`${persona.nombre} ${persona.apellido} es profesional`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es profesional)`)
    }

    if(persona.cantante === true) {
        console.log(`${persona.nombre} ${persona.apellido} es cantante`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es cantante)`)
    }

    if(persona.cocinero === true) {
        console.log(`${persona.nombre} ${persona.apellido} es cocinero`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es cocinero)`)
    }

    if(persona.dj === true) {
        console.log(`${persona.nombre} ${persona.apellido} es dj`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es dj)`)
    }
    
    if(persona.guitarrista === true) {
        console.log(`${persona.nombre} ${persona.apellido} es guitarrista`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es guitarrista)`)
    }

    if(persona.drone === true) {
        console.log(`${persona.nombre} ${persona.apellido} es drone`)
    } else {
        console.log(`${persona.nombre} ${persona.apellido} (no es drone)`)
    }  
}

imprimir(ivan)
imprimir(edna)
imprimir(kevin)