const fs = require("fs");

const Registrar = (
  Nombre_animal,
  Edad,
  Tipo_animal,
  color_animal,
  enfermedad
) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  if (!Nombre_animal || !Edad || !Tipo_animal || !color_animal || !enfermedad) {
    console.log("Por favor ingrese todos los datos");
    return;
  }
  citas.push({ Nombre_animal, Edad, Tipo_animal, color_animal, enfermedad });
  fs.writeFileSync("citas.json", JSON.stringify(citas));

  //console.log(citas);
};

const Leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(citas);
};

module.exports = { Registrar, Leer }; 



