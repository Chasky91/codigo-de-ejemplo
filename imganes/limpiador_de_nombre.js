import fs from 'node:fs'
//permite interactuar con el sistema de archivos, pudiendo
//leer, escribir, modificar, eliminar y gestionar archivos y directorios.


//Crear una rchivo .txt
if(!fs.existsSync("./registro_de_fotos.txt")) {
    //creo el archivo
    fs.writeFileSync("./registro_de_fotos.txt","")
    console.log("se creo un archivo")
}


const files =  fs.readdirSync("./fotos")
const nombres = []
//almacenar los nombre de archivos en un array
for(let i =  0; i < files.length; i++) {
    nombres.push(files[i])
}
console.log(nombres)

//borramos los espacio de los nombres
const nombresNormalizados = []
for(let i =  0; i < files.length; i++) {
    //let nombre = files[i].toString()
    let nombre = files[i].replaceAll(" ", "_")
    //nombre.split(' ').join('_')
    //nombre.replaceAll(/ /g,"_")
    nombresNormalizados.push(nombre)
    console.log(nombre)


}


console.log(nombresNormalizados)

//copiar archivos
for(let i =  0; i < files.length; i++) {
   fs.copyFileSync(`./fotos/${nombres[i]}`,`./normalizado/${nombresNormalizados[i]}`)

}

for (let index = 0; index < files.length; index++) {
    fs.writeFileSync("./registro_de_fotos.txt", "Nueva linea \n");
    
}

//fs.copyFileSync("./","./normalizado")
//recuperamos todas las fotos




