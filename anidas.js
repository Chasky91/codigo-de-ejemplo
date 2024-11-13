const  cuatrimestre = [" Marzo", "Abril", "Mayo","Junio"]

function mayorQue5(cuatri) {
    if(cuatri.length >= 4) {
        for (let index = 0; index < cuatrimestre.length; index++) {
            const element = cuatrimestre[index]
            console.log(element)
            
        }
     } else {
         console.log("No alcanzasa a la cantidad de elementos necesarios")
     } 
}

mayorQue5(cuatrimestre)

const  trimestre = [" Marzo", "Abril", "Mayo"]
mayorQue5(trimestre)
