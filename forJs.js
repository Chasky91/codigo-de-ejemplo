const diasDeLaSemana = ["Lunes","Martes", "Miercoles","Jueves","Viernes"]

for(let contador = 0; contador < diasDeLaSemana.length; contador++ ) {
    console.log("contador vale ",contador," ", "diasDeLaSemana[",contador,"]", " es el dia ", diasDeLaSemana[contador])
    if(diasDeLaSemana[contador] === "Martes") {
        console.log("-----Ingresa al if-----")
        console.log("-----Dia encontrado-----")
        console.log(diasDeLaSemana[contador])
        console.log("-----Dia encontrado-----")
        console.log("-----Sale del if-----")

    }
}

const semana = {

    "1":"Lunes",
    "2":"Martes",
    "3":"Miercoles",
    "4":"Jueves",
    "5":"Viernes"
}

/*for (const dia in semana){
    console.log(dia, " "  ,semana[dia]);console.log()
}*/

let tabla = 7

// ostrar la tabla de multiplicar
//console.log('📚 Tabla del ', tabla );
/* (let i = 1; i <= 10; i++) {
    console.log(tabla ,' x ', i, ' = ', tabla * i)
}

// 3. Ejemplo: Calendario de tareas semanal
console.log("📅 Días de Tareas:");
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
let tareas = ["Matemáticas", "Ciencias", "Historia", "Lenguaje", "Arte"]

for (let dia = 0; dia < diasSemana.length; dia++) {
    console.log(diasSemana[dia], " ",tareas[dia] )
}*/