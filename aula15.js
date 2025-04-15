const prompt = require('prompt-sync')
function Cabecalho(texto){
    console.log('----------------------')
    console.log(texto)
    console.log('----------------------')
}
//criando outra função, função de saudação
function saudação(){
    let nome = prompt('Digite seu nome: ')
    console.log(`${nome} tenha um bom dia`)
}

//chamando a função
//passando o parametro junto com a função
 Cabecalho('SESI/SENAI')
 //posso declarar uma variavel e passa-la como parametro para função
 let escola = 'Sesi 025'
 Cabecalho(escola)
saudação()

//criei a função soma que ira receber dois valores como parametro
// a partir desses valores, realizara o calculo e mostrara o resultado
function Soma(n1,n2){
    let resultado = n1 + n2
    console.log(resultado)
}

Soma(5,6)
Soma(8,9)
Soma(8,18)

//criando uma nova função
//função ParImpar
function ParImpar(numero){
    if(numero % 2 == 0){
        console.log(`${numero} é par`)
    }else{
        console.log(`${numero} é impar`)
    }
}
ParImpar(5)
ParImpar(10)

function Media(n1,n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}

console.log(Media(6,8))