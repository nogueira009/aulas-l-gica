const prompt = require('prompt-sync')()

// ler um número
let numero = Number(prompt("Digite um numero"));
let numero2 = Number(prompt("Digite um numero"));

//somar os números
let soma = numero + numero2
console.log(soma)

//dividir e descobrir a média
let divisao = soma / 2
console.log(`A divisão entre ${soma} / ${2} é igual ${divisao}`);