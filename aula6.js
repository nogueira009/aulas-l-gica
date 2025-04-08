const prompt = require('prompt-sync')()

//operação por variaveis
let nr1 = Number (prompt("Digite um numero?"));
let nr2 = Number (prompt("Digite um numero?"));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`);

//subtração
let subtracao = nr1 - nr2
console.log(`A subtração entre ${nr1} - ${nr2} é igual ${subtracao}`);

//divisão
let divisao = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual ${divisao}`);

//exponenciação
let exponenciacao = nr1 ** nr2
console.log(`A exponenciação entre ${nr1} ** ${nr2} é igual ${exponenciacao}`);

//multiplicação
let multiplicacao = nr1 * nr2
console.log(`A multiplicação entre ${nr1} * ${nr2} é igual ${multiplicacao}`);

//calculando valor do celular com desconto
let valor = Number(prompt('Digite o preço do celular: '));
let desconto = Number(prompt('Digite o preço do desconto: '));

valor = valor - desconto
console.log(`O valor do celular com desconto é R${valor}`)

let numero = Number(prompt("Digite um numero?"));
console.log(`O valor do dobro é: ${numero * 2}`)
console.log(`O valor da metade é: ${numero / 2}`)

//descobrir o valor da obra, as horas e o resultado
let horas_por_dia = 8;
let dias_totais = 15;
let horas_trabalhadas = horas_por_dia * dias_totais
let custoHora = 100;
let custoTotal = horas_trabalhadas * custoHora
//exibir resultado
console.log(custoTotal)

