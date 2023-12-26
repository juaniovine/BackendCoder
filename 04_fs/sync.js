// metodo para crear un archivo de forma sincrona
// writeFile
const fs = require("fs");
// import fs from "fs" //  cuando habilitemos módulos

const ruta = "./04_fs/data/product.json";
const datos = JSON.stringify([], null, 2);
fs.writeFileSync(ruta, datos);

// leer un archivo de forma sincrona (uno y después lo otro)
// readFile
let configuracion = "utf-8";
const datosLeidos = fs.readFileSync(ruta, configuracion);
const datosParseados = JSON.parse(datosLeidos)
console.log(datosParseados);  // así creo el array de objetos de forma correcta 

// const existeAntes = fs.existsSync(ruta)
// console.log(existeAntes)

// // para eliminar un archivo de forma sincrona
// fs.unlinkSync(ruta)
// console.log("archivo eliminado")

// // para verificar que un archivo existe de forma sincrona
// const existeDespues = fs.existsSync(ruta)
// console.log(existeDespues);