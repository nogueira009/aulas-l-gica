const prompt = require('prompt-sync')()
let idade = 0
let sexo;
let qtdH = 0
let qtdM = 0
let mediaH = 0
let mediaM = 0
for(let i = 0; i < 10; i++){
    idade = Number(prompt(`Digite a idade: `))
    sexo = prompt(`digite o sexo: (H ou M): `).toUpperCase()

    if(sexo == `M`){
        mediaH += idade
        qtdH++
    }else{
        mediaM += idade
        qtdM++
    }
} console.log(`a média da idade dos homens: ${mediaH / qtdH}`)
console.log(`a média da idade das mulheres: ${mediaM / qtdM}`)