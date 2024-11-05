//Primera forma de una funcion
//Definiciòn
/*function suma(parametroUno,parametrodos, resul) {
    console.log(parametroUno, "param 1")
    console.log(parametrodos, "param 2")
    console.log(resul, "param  3")
    //piso el valor de resul que era de 0
    resul = parametroUno + parametrodos
    //resul tiene el valor de 7
    //mostrar algo sin haber pasado los parametros
    console.log(resul)
} 
//invokar
suma(2, 5, 0)
//console.log(resultado)

let resultado = 0

function sumaV2 (param1, param2) {
    resultado = param1 + param2
}

/*console.log(resultado, "Antes de sumar")
sumaV2(5,7)
console.log(resultado, "Despues de sumar")
*/

//Version antigua
/*function sumaV3Old(p1, p2) {
    return p1 + p2
}
//version nueva, tipo flecha
//llamo a ala funcion y le asigno el resultado a una variable
const  sumaV3 = (p1,p2) => {
    return p1 + p2
}

console.log(sumaV3(11,11), "Resultado V3")*/

//defino la estructura
function multiplicar(paramUno, paramDos) {
    let resultado = paramUno * paramDos
    console.log(resultado, "Multiplicacion") 
    return  resultado  //resultado de la ejecucion de la funcion
}

//invocar o llamar
//multiplicar(4,5)
//const resultadoOperacion = multiplicar(8,6)
//console.log(resultadoOperacion, "segunda invocacion")

//
const diasDeLaSemana = ["Lunes","Martes", "Miercoles","Jueves"]
const diaFaltante = "Viernes"
diasDeLaSemana.push("Viernes")
const mesesDeVerano = ["Diciembre","Enero","Febrero", "Marzo","Abril"]
mesesDeVerano.pop()
console.log(mesesDeVerano)








