const prompt = require('prompt-sync')()

//ler número em metros
let numero = Number(prompt("Digite um numero"));

//transformar para centímetro
let multiplicacao = numero * 100
console.log(`A multiplicação entre ${numero} * ${100} é igual ${multiplicacao}`);

//transformar para milímetro
let multiplicar = numero * 1000
console.log(`A multiplicação entre ${numero} * ${1000} é igual ${multiplicar}`);

//transformar para km
let divisao = numero / 1000
console.log(`A divisão entre ${numero} / ${1000} é igual ${divisao}`);