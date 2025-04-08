const prompt = require('prompt-sync')()

somaPar = 0
somaÍmpar = 0
qtdPar = 0
qtdÍmpar = 0
let entrada
for(let i = 0; i <= 5; i++){
    entrada = Number(prompt("Digite um numero: "))
    if(entrada % 2 == 0){
        somaPar += entrada
        qtdPar++ 
    }
    else{
        somaÍmpar += entrada
        qtdÍmpar++
    }
}

console.log(`A soma de ${qtdPar} é ${somaPar}`)
console.log(`A soma de ${qtdÍmpar} é ${somaÍmpar}`)