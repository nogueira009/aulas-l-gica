const prompt = require('prompt-sync')()

//ler o km corrido
let KmCorrido = Number(prompt("Digite o KmCorrido"))

//ler dias alugados
let diasAlugado = Number(prompt("Digite os diasAlugado"))

//ler valor diaria
let diaria = 60.00

//ler valor por km 
let km = 0.15

//calcular o valor a pagar por km
let valorPorKm = KmCorrido * km
console.log(valorPorKm)

//calcular valor diaria
let valorDiaria = diasAlugado * diaria
console.log(valorDiaria)

//somar valorPorKm com valorDiaria
let valorPagarDiaria = valorPorKm + valorDiaria
console.log(valorPagarDiaria)
