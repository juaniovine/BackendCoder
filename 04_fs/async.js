const fs = require("fs");
// import fs from "fs" //  cuando habilitemos módulos

const ruta = "./04_fs/data/callbacks.json";
const contenido = JSON.stringify([
  { title: "StarWars IV" },
  { title: "StarWars V" },
  { title: "StarWars VI" }
],null, 2)

// para crear o sobreescribir un async
fs.writeFile(ruta,contenido,(error) => {
    if(error) {
        console.log(error);
        return error
    }
})


// para la lectura (ruta, configuracion, callback)
let configuracion = "utf-8";
// si la lectura es más rápida que la creación, da error
fs.readFile(ruta, configuracion,(error, exito) => {
    if (error){
        console.log(error);
        return error
    } else {
        console.log(exito);
        return exito
    }
})

// para eliminar el archivo
fs.unlink(ruta, (error) => {
    if(error){
        console.log(error);
        return error
    }
})