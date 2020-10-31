function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

var ivan = new Persona('Ivan', 'Gonzalez', 1.80)
var erika = new Persona('Erika', 'Luna', 1.73)
var arturo = new Persona('Arturo', 'Martinez', 1.68)


Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
    return this.altura > 1.8
}



// ivan.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()

ivan.saludar()
erika.saludar()
arturo.saludar()

