var ivan = {
    nombre: 'Ivan',
    apellido: 'Gonzalez',
    edad: 20,
    peso: 75
}

console.log(`Al inicio del año ${ivan.nombre} pesa ${ivan.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random < 0.3
const realizaDeporte = () => Math.random < 0.4


const META = ivan.peso - 3
var dias = 0

while (ivan.peso > META) {
    // debugger
    if (comeMucho()) {
        aumentarDePeso(ivan)
    }
    if (realizaDeporte()) {
        adelgazar(ivan)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${ivan.nombre} adelgazó`)