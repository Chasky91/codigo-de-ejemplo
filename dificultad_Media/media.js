
// 2. Matriz diagonal
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


// 4. Contador de vocales por palabra
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
console.log(contarVocalesPorPalabra(['roma', 'cruz', 'Esteban']));



/*for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}*/
