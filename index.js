const {Registrar, Leer} = require('./operaciones.js')

const [operacion, Nombre_animal, Edad, Tipo_animal, color_animal, enfermedad ] = process.argv.slice(2)


if (operacion == "Registrar"){
    Registrar(Nombre_animal, Edad, Tipo_animal, color_animal, enfermedad)
}

if(operacion == "Leer") {
    Leer()
}