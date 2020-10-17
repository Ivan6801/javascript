var nombre = 'Ivan', apellido = 'GONZALEZ'


var nombreCompleto = `${nombre} ${apellido.toLowerCase()}`


var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length
var cantidadDeLetrasDelApellido = apellido.length

console.log(`toUpperCase: ${nombreEnMayusculas}`)
console.log(`toLowerCase: ${apellidoEnMinusculas}`)
console.log(`CharAt: ${primeraLetraDelNombre}`)
console.log(`length nombre: ${cantidadDeLetrasDelNombre}`)
console.log(`length apellido: ${cantidadDeLetrasDelApellido}`)
console.log(nombreCompleto)