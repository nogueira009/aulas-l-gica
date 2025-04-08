const prompt = require('prompt-sync')()

//receber valores
let numero = Number(prompt("Digite um numero"))
let numero2 = Number(prompt("Digite um numero"));
if( numero == numero2){
    console.log(`os numeros sao iguais`)
}else{
    console.log(`numeros diferentes`)
}