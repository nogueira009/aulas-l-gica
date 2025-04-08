const prompt = require('prompt-sync')()

//receber um numero
let numero = Number(prompt("Digite um numero"))

if (numero >= 0){
    console.log(`positivo`)
}else{
    console.log(`negativo`)
}