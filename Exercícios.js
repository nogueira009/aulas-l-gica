const prompt = require('prompt-sync')();

console.log("Bem vindo ao curso JavaScript");
console.log("Estou aprendendo a usar o console.log");

console.log(15 + 25)
console.log(100 - 45)
console.log( 12 * 7)
console.log(144 / 12)
console.log( 20 & 3)
console.log(2 ** 5)

//exercicios variaveis
//receber o nome do aluno
let nomeAluno= "Nogueira"
//receber a altura do aluno
let altura= "1.73"
//receber o nome da escola
let escola= "Sesi025"
//receber o ano
let ano= "2027"

console.log(nomeAluno)
console.log(altura)
console.log(escola)
console.log(ano)

//receber o nome do professor
let professor= "Heitor"
//receber a materia do professor
let materia= "Educação Física"
//receber o ano de ingresso do professor
let anoIngresso= "2022"

console.log(professor)
console.log(materia)
console.log(anoIngresso)

nome = prompt('qual é seu nome?')
altura = parseFloat('qual é sua altura?')
escola = prompt('onde você estuda?')
ano = parseInt('qual ano estamos?')

professor = prompt('qual o nome do professor?')
materia = prompt('qual a matéria desse professor?')
anoIngresso = prompt('qual ano esse professor ingressou na escola?')

//Exibir valores das variaveis
console.log(`O professor ${nome do professor} que leciona a materia ${materia} no ${ano}. E ingressou na ${escola} no ano de ${anoIngresso}`)

