const fs = require("fs");
const ruta = "./04_fs/data/promises.json";
const contenido = JSON.stringify(
  [{ title: "StarWars IV" }, { title: "StarWars V" }, { title: "StarWars VI" }],
  null,
  2
);

fs.promises
  .writeFile(ruta, contenido)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

let configuracion = "utf-8";
fs.promises
  .readFile(ruta, configuracion)
  .then((resultado) => console.log(JSON.parse(resultado)))
  .catch((error) => console.log(error));

// fs.promises
//   .unlink(ruta)
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error));