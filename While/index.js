var contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

console.log(`Fui a ver si llovía ${contador} veces`)