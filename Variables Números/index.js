var edad = 20
var peso = 75
// edad = edad + 1
edad += 1
// peso = peso - 2
peso -= 2 

// Sandwich
var sandwich = 1
peso = peso + sandwich
var ejercicioGym = 3
peso = peso - ejercicioGym

// Tienda de vino
var precioDeVino = 200.3
precioDeVino = Math.round(precioDeVino * 100 * 3) / 100
var totalStar = precioDeVino.toFixed(3)
var precioDeVino = parseFloat(precioDeVino)

// Pizza
var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona


console.log(edad)
console.log(peso)
console.log(`Vino: $ ${precioDeVino}`)
console.log(`toFixed(3): ${totalStar}`)
console.log(`parseFloat: ${precioDeVino}`)
console.log(`Pizza: ${cantidadDePorcionesPorPersona}`)