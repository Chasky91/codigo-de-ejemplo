let edad = 18
const operacionUno = edad > 13
const  operacionDos = edad < 18

const resultado = operacionUno &&  operacionDos

console.log(resultado, " Resultado  de la operacion")



////////////////////////////////
/**
 *
&&		P && Q
V	V	V
F	V	F
V	F	F
F	F	F

 */
//conjuncion
const  celda1C = true //V
const  celda2C = true   //V
const resultado2 = celda1C && celda2C  //V and V = V
console.log(resultado2, " conjuncion")	
//conjuncion
const  celda3C = 6 > 8  //V
const  celda4C = 5 > 6 //F
const resultado3 = celda3C && celda4C // V and F = F
console.log(resultado3, " conjuncion 2")	

let variableEnBDPass = "12345"
let variableEnBDMail = "usuario@usuario.com"

//WEB, INRTEFAZ GRAFICA
const usuario = "usuario@usuario.com"
const pass = "12345"

const validacion = (usuario ===variableEnBDMail) && (pass ===variableEnBDPass)
console.log(validacion, "  VALIDACION")

console.log("/////////////////////")

const hayLeche = true
const hayCafe = true
// V && V = V
const resultadoCL = hayLeche && hayCafe //se va realizar AND
console.log(resultadoCL, "Ejercicio  1.a")

///////
const puertaAbierta = true
const alarmaActivada = true
const seActivaLalarma = puertaAbierta && alarmaActivada
console.log(seActivaLalarma, "Ejercicio 1.b")

//1.C 
//
const cumpleObjetivos = true
const asisteMasDel90 = true 

const recibeBono = cumpleObjetivos && asisteMasDel90
console.log(recibeBono, "Ejercicio 1.c")

////

//disyuncion
//2.a

const hayRepartidores = false
const demandaBaja = true
const servicioDeEntrega = hayRepartidores || demandaBaja
console.log(servicioDeEntrega, "Ejercicio 2.a");

//2.b

/**
 * Un estudiante puede participar en la competencia si tiene 
 * más del 90% de asistencia o ha aprobado el examen preliminar. 
 * Realiza la operación:
"Tiene más de 90% de asistencia."
"Ha aprobado el examen preliminar."
 */

const asistencia90 = false
const examenPreliminar = false
const participacion = asistencia90 || examenPreliminar
console.log(participacion, "ejercicio 2.b")

/***
 * 
 * 2.c
 * Una función de notificación automática envía
 * un mensaje si hay un nuevo correo electrónico o
 * hay un evento en el calendario próximo. Realiza la operación:
 */


const nuevoCorreo = true
const eventoEnCalendario = false
//disyuncion V || F = F  OR
const notificacion = nuevoCorreo || eventoEnCalendario
console.log(notificacion, "ejercicio 2.c")


/**
 * Negacion
 */

const  luzRoja = true //Verdadero, encedido
const elVehiculoAvanza = !luzRoja //Verdadero
console.log("-->",elVehiculoAvanza, "Resulatdo de la negacion 3.a")

////




