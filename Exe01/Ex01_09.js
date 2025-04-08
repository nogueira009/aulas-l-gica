const prompt = require('prompt-sync')()

//ler o preço do produto
let preco = Number(prompt("Digite preco"));

//calcular o desconto
let desconto = 5 / 100

//calcular o valor final com desconto
let valorFinal = preco - desconto
console.log(valorFinal)