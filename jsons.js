import chalk from "chalk"

const tituloProducto = "Proyector Chowa 4k Hd Android Wifi 170lm Ansi"
const precioProducto = 162499.04
const colorDelProducto = "Blanco"
const esNuevo = true
//objeto json Proyector
const proyector = {
    
    "titulo": "Proyector Chowa 4k Hd Android Wifi 170lm Ansi",
    "precio":162499.04,
    "color":"Blanco",
    "esNuevo":true
}

console.log(proyector.precio)

const color1 = { "rojo": 255, "verde": 0, "azul": 0 }

console.log(chalk.rgb(color1.rojo, color1.verde, color1.azul)("Este texto es de color naranja (RGB)"))
