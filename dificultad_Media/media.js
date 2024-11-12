import {obtenerEntrada}  from "./lectoorTeclado.js";
// Crea una matriz cuadrada con 1s en la diagonal y 0s en el resto
function crearMatrizDiagonal(n) {
    let matriz = [];
    for (let h = 0; h < n; h++) {
        matriz[h] = [];
        for (let v = 0; v < n; v++) {
            if (h === v) {
                matriz[h][v] = 1;
            } else {
                matriz[h][v] = 0;
            }
        }
    }
    return matriz;
}


// Cuenta las vocales en cada palabra de un array
function contarVocalesPorPalabra(palabras) {
    let resultados = {};
    for (let i = 0; i < palabras.length; i++) {
        let conteoVocales = 0;
        let palabra = palabras[i]
        console.log(palabra)
        for (let j = 0; j < palabra.length; j++) {
            console.log(palabra[j])
            if ('aeiou'.includes(palabra[j].toLowerCase())) {
                conteoVocales++;
            }
        }
        resultados[palabra] = conteoVocales;
    }
    return resultados;
}
//console.log(contarVocalesPorPalabra(['roma', 'cruz', 'Esteban']));




// test para primaria
// Se le realizar un prueba de conocimiento para alumnos de primaria, en la que se derterminara si conocen las vocales
// crear el programa necesario

const vocales = ["a","e","i","o","u"]
/*for (let i = 0; i < vocales.length; i++) {
    let pregunta = ("presiona la letra " + vocales[i] ).toString()
    let vocal = await obtenerEntrada(pregunta + ": ")
    console.log(vocal, " ", vocales[i])
    console.log("\n")
    if(vocal[i].includes(vocal)) {
        console.log("Correcto");  
    } else {
        console.log("incorrecto")
    }
    
}*/

const palabras = []
for (let i = 0; i < 5; i++) {
    let pregunta = "ingresa  los  dias de la semana : "
    let palabra = await obtenerEntrada(pregunta )
    console.log("\n")
    palabras.push(palabra)    
}

console.log(palabras);
