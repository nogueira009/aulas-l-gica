const prompt = require('prompt-sync')()

//estruturas condicionais e operadores relacionais
let a = 2
let b = 3

console.log(a == b)
console.log(a != b)
console.log(a > b)
console.log(a >= b)
console.log( a <= b)

//estruturas condicionais
let tenhoIngresso = true
if(tenhoIngresso == true){console.log(`Posso entrar!`)}

//recebendo o valor da idade
let idade = Number(prompt(`Qual sua idade?`))

//verificar se é maior ou igual a 18
if(idade >= 18){
    console.log(`Maior de idade`)
}

//estruturas condicionais
 tenhoIngresso = false
if(tenhoIngresso = true){
    console.log(`Posso entrar!`)
}else{
    console.log(`Estou barrado no baile`)
}

//outro exemplo
idade = Number(prompt(`Digite a idade`))
//verificar se e maior que 18
if(idade >= 18){
    console.log(`Você é maior de idade`)
}else{
    console.log(`Você é menor de idade`)
}