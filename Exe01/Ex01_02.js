const prompt = require('prompt-sync')()

//ler um numero
let numero = Number(prompt("Digite um numero"));

//mostrar seu sucessor
let sucessor = numero + 1

//mostar seu antecessor
let antecessor = numero - 1
console.log(`A subtração entre ${numero} - ${1} é igual ${antecessor} e a soma `);