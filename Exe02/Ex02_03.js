const prompt = require('prompt-sync')()

//receber um número
let numero = Number(prompt("Digite um numero"))
if ( numero %2 == 0){
    console.log(`seu numero é par`)
    }else{
        console.log(`seu numero é impar`)
}
