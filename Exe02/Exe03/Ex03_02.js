const prompt = require('prompt-sync')()

let AnoAtual = Number(prompt("Digite o ano atual"))
let anoNascimento = Number(prompt("Digite seu ano de nascimento"))
let subtracao = AnoAtual - anoNascimento
console.log(`A subtração entre ${AnoAtual} - ${anoNascimento} é igual ${subtracao}`);
if(subtracao <= 10){
    console.log(`voce é uma criança`)
}
else if(subtracao >= 11 && subtracao <=  17){
    console.log(`voce é um adolescente`)
}else if(subtracao >= 18 && subtracao <= 59){
    console.log(`voce é um adulto`)
    }else{(subtracao > 60)
    console.log(`voce é um idoso`)}