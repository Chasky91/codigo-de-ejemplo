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
// recibe un array
function contarVocalesPorPalabra(palabras) {
    // se creara un objeto json, creando las propiedades de 
    let resultados = {}
    for (let i = 0; i < palabras.length; i++) {
        // defino la variable conteo de vocales en 0
        let conteoVocales = 0
        // creo por cada palabra en el array una nueva variable
        let palabra = palabras[i]
        console.log(palabra)
        // recorro cada caracter de cada palabra, por la propiedad lenth
        for (let j = 0; j < palabra.length; j++) {
            // reviso con un if si algun caracter esta incluye o es aeiou
            if ('aeiou'.includes(palabra[j].toLowerCase())) {
                conteoVocales++;
            }
        }
        // esto parece un array pero estoy agrgando una clave a unobjeto json
        // resultados = {}
        // resultado.palabra --> resultado.roma
        resultados[palabra] = conteoVocales;
    }
    return resultados;
}
//paso un array sin crear una variable
console.log(contarVocalesPorPalabra(['roma', 'cruz', 'Esteban']));




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
/*for (let i = 0; i < 5; i++) {
    let pregunta = "ingresa  los  dias de la semana : "
    let palabra = await obtenerEntrada(pregunta )
    console.log("\n")
    palabras.push(palabra)    
}
async function validar() {
    for (let i = 0; i < 5; i++) {
        let pregunta = "ingresa  los  dias de la semana : "
        let palabra = await obtenerEntrada(pregunta )
        console.log("\n")
        palabras.push(palabra)    
    }
}*///


//console.log(palabras);


const temperaturas = [-5, 10, 25, 40, -2, 36, 15, 28, 39];
const temperaturasExtremas = [];

for (let i = 0; i < temperaturas.length; i++) {
    // si la temperatura es menor a 0 grados o mayor a 35 se agrega 
    // dentro del array
    if (temperaturas[i] < 0 || temperaturas[i] > 35) {
        temperaturasExtremas.push(temperaturas[i]);
    }
}
console.log(temperaturasExtremas)

const numeros = [5, 12, 8, 21, 14, 3, 18];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0 && numeros[i] > 10) {
        pares.push(numeros[i])
    }
}
console.log(pares)

function contarHaciaAtras(n) {
    if (n === 0) {
        return; // Caso base: si n llega a 0, termina la función
    } else {
        console.log(n); // Imprimir el número actual
        contarHaciaAtras(n - 1); // Llamada recursiva con n reducido en 1
    }
}