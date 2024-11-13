//la funciones  agrupan codigo en bloques
function sumar (x, y) { //--> inicia el cuerpo de una funcion
   
    const resultado = x +y

    return resultado
}//--> aqui acaba
//LLamar 
 let  llamadoUno = sumar(15, 5)
 //console.log(llamadoUno)

let numeroUno = 100

//sumar(numeroUno, 56)

const multiplicar  = ( p, q) => {
    let resultado = p * q
    return resultado
}

const llamadoAFlecha = multiplicar(2,6)
console.log(llamadoAFlecha, "Funcion flecha")

