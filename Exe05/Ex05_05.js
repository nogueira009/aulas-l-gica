const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite um numero: "))

let fatorial = 1
let i = numero
let sequencia = numero + "! = "

while(i >= 1){
    fatorial = fatorial * i
    sequencia = sequencia + i
    if(i > 1){
        sequencia = sequencia + ` * `
    }
    i --
}
sequencia = sequencia + " = " + fatorial
console.log(sequencia)