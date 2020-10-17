var ivan = {
    nombre: 'Ivan',
    apellido: 'Gonzalez',
    edad: 20,
    peso: 75
}

console.log(`Al inicio del año ${ivan.nombre} pesa ${ivan.peso}kg`)

// function aumentarDePeso (persona) {
//     return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 0; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    
    if (random < 0.25) {
        aumentarDePeso(ivan)
    } else if (random < 0.5) {
        adelgazar(ivan)
    }
}

console.log(`Al final del año ${ivan.nombre} pesa ${ivan.peso.toFixed(2)}kg`)