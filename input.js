//import readline from 'readline'
const readline = require('readline')
//import process from 'process';
//const { stdin: input, stdout: output } = process;
const { stdin: input, stdout: output } = require('process')



const rl = readline.createInterface({ input, output })


async function inputTerm(pregunta) {
    return new Promise((resolve) => {
      rl.question(pregunta, (respuesta) => {
        resolve(respuesta);
        rl.close();
      });
    });
  
}


module.exports ={
    inputTerm
}