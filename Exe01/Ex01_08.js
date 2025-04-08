const prompt = require('prompt-sync')()

//ler altura em metros
let alturaMetros = Number(prompt("Digite alturaMetros"));

//ler largura em metros 
let larguraMetros = Number(prompt("Digite larguraMetros"))

//calcular área 
let area = alturaMetros * larguraMetros
console.log(area)

//calcular litros
let litros = area / 2
console.log(litros)
