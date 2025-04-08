const prompt = require('prompt-sync')()

//receber dois números
let numero = Number(prompt("Digite um numero "))
let numero2 = Number(prompt("Digite um numero "))

//validar qual é o maior e qual o menor
let maior = numero > numero2 
let menor = numero < numero2
if (numero > numero2){
    console.log(`O numero ${numero} é maior que ${numero2}`)
}
else { (numero < numero2)
    console.log(`O numero ${numero} é menor que ${numero2}`)
}
