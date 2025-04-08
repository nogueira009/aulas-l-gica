const prompt = require('prompt-sync')()

let inicio = Number(prompt(`Digite o valor de início: `))
let fim = Number(prompt(`Digite o valor do fim: `))
let passo = Number(prompt(`Digite o valor do passo: `))

for(inicio; inicio < fim; inicio += passo){
    console.log(`valor inicial: ${inicio}`)
    console.log(`valor final: ${fim}`)
    console.log(`valor de passos: ${passo}`)
    console.log(`===================================`)
}