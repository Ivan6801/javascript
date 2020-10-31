class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`${this.nombre} ${this.apellido} soy desarrollador/a`)
    }
}

var ivan = new Persona('Ivan', 'Gonzalez', 1.80)
ivan.saludar()

var ivan = new Desarrollador('Ivan', 'Gonzalez', 1.80)
ivan.saludar()

