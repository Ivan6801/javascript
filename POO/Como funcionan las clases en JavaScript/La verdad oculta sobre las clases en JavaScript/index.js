function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.nombre = apellido
}


Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

heredaDe(Desarrollador, Persona)

var ivan = new Persona('Ivan', 'Gonzalez' , 1.80)
ivan.saludar()

