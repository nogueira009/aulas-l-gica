const prompt = require('prompt-sync')()
let nota1 = Number (prompt("Digite um numero?"));
let nota2 = Number (prompt("Digite um numero?"));
let soma = nota1 + nota2;
console.log(`A soma entre ${nota1} + ${nota2} é igual: ${soma}`);
let divisao = soma / 2
console.log(`A divisão entre ${soma} / ${2} é igual ${divisao}`);
if(divisao > 7){
    console.log(`aprovado`)
}
else if(divisao >= 5 && divisao <= 7){
    console.log(`recuperacao`)
}else if(divisao < 5){
    console.log(`reprovado`)
}