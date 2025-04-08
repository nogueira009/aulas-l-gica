//Importano a biblioteca para receber dados
const prompt = require('prompt-sync')();
// Variaveis e constantes
// passo 1: receber o nome da pessoa
let nome= "Nogueira";
// passo 2: receber a idade da pessoa
let idade= "16";
// passo 3: receber o peso da pessoa
let peso= "59,5";
// passo 4: exibir o nome, a idade e o peso
console.log (nome,idade,peso)

// Receber e armazena o texto em uma variavel
let curso   =             "Desenvolvimento de Sistemas"
// #tipo nome recebe valor           na variavel

//Exibir o valor armazenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso" , curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 44// valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "Gabiru"

console.log("Olá", nome2, "você tem:", idade2, "e hoje está fazendo", temperatura, "ºC" );

//Usando template string
console.log(` Ola ${nome2}, você tem ${idade2} e hoje está fazendo: ${temperatura}ºC `)

let chovendo = false
let dia = true
// as constantes não podem ser reatribuidos novos valores
const PI = 3.1415;
console.log(PI)

// Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('Qual é seu nome?')
//usando o parseInt ou parseFloat converte os valores
//que vem como string para int ou float
idade = parseInt(prompt("Qual sua idade: "))
peso = parseFloat(prompt('qual é seu peso?'))

console.log(`Seu nome é ${nome}, você tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)