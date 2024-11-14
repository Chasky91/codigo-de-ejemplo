import {obtenerEntrada}  from "./lectoorTeclado.js";
// Crea una matriz cuadrada con 1s en la diagonal y 0s en el resto
function crearMatrizDiagonal(valor) {
    //variable que almacena la matriz cuadrada, ahora  vacia
    let matriz = []
    //recorro el for para crear los elementos en el eje y 
    for (let y = 0; y < valor; y++) {
        // agrego un nuevo elemento dentro del array vacio, este es otro array vacio
        matriz.push([])
        // recorro el for para crear los elementos en el eje x
        for (let x = 0; x < valor; x++) {
            //pregunto si  x e y coinciden, de ser asi agrego uno den del tultimo array vacio que agregue
            if (x === y) {
                matriz[y].push(1)
            } else { // de ser lo contrario imprimo 0
                matriz[y].push(0)
            }
        }
    }
    return matriz;
}

console.log(crearMatrizDiagonal(5))


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
        // es una forma dinamica de crea propiedades
        // resultado.palabra --> resultado.roma
        resultados[palabra] = conteoVocales;
    }
    return resultados;
}
//paso un array sin crear una variable
console.log(contarVocalesPorPalabra(['roma', 'cruz', 'Esteban']));

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

//funcion recursiva, es aquella que se llama a si misma
//creo la funcion
function cuentaHaciaAtras(n) {
    //uso un if para comprobar el valor del numero
    if (n === 0) {
        //si es cero no hago nada y devuelvo un return vacio
        return 
    } else { //si no es cero  me llamo a mi mismo y dentro de la llamada me descuento una unidad
        console.log(n) 
        cuentaHaciaAtras(n - 1) 
    }
}

console.log(cuentaHaciaAtras(8))