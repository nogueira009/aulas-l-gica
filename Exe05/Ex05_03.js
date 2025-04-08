const prompt = require('prompt-sync')()
let entrada
let qtdPar = 0
let somaPar = 0
let qtdImpar = 0
let somaImpar = 0

comsole.log("Digite números (0 para encerrar)")
while(true){
    entrada = parseFloat(prompt("Número: "))

    if(entrada === 0){
        break
    }

    if(entrada % 2 == 0){
        somaPar = entrada + somaPar
        qtdPar++
    }
    else{
        somaImpar = entrada + somaImpar
        qtdImpar++
    }
}

console.log(`soma dos pares digitados: ${somaPar} quantidade de par ${qtdPar}`)
console.log(`soma dos ímpares digitados: ${somaImpar} quantidade de par ${qtdImpar}`)