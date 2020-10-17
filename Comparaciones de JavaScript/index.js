var x = 4, y = '4' //x === y: false

var ivan = {
    nombre: 'Ivan'
}
// ivan == otraPersona: false
//otraPersona.nombre: "Ivan"
var otraPersona = {
    ...ivan
}

//Boolean: false/true