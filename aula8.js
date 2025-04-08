const prompt = require('prompt-sync')()

let altura = Number(prompt("digite sua altura"))
let peso = Number(prompt("Digite seu peso"))
let imc = peso / (altura ** 2)
if(imc < 18.5){
    console.log(`abaixo do peso ideal`)
}else if(imc >= 18.5 && imc < 25){
    console.log(`peso ideal`)
}else if ( imc >= 25 && imc < 30){
    console.log(`sobrepeso`)
}else{
    console.log(`Obesidade`)
}

//receber o lado 1
let lado1 = Number(prompt("Digite o valor lado 1"))
let lado2 = Number(prompt("Digite o valor lado 2"))
let lado3 = Number(prompt("digite o valor lado 3"))

//lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3) 
let es = (lado1 != lado2) && (lado2 != lado3)

console.log(`triangulo equilatero?`, eq, `triangulo escaleno`, es)

//receber o valor do lado
let lado4 = Number(prompt("Digite o valor lado 1"))
let lado5 = Number(prompt("Digite o valor lado 2"))
let lado6 = Number(prompt("digite o valor lado 3"))
if(lado1 == lado2 && lado2 == lado3){
    console.log(`Triangulo Equilatero`)

}else if(lado4 != lado5 && lado5 != lado6 && lado6 != lado4){
    console.log(`triangulo escaleno`)
}else{
    console.log(`triangulo isosceles`)
}

//descobrir a quantidade de horas trabalhadas
let horas = Number(prompt(`Total de horas trabalhadas`))
let vendas = Number(prompt(`Total de vendas`))

//validar se uma das condições foi atendida 
// (mais de 5000 vendas ou mais de 40 horas de trabalho)
if(vendas > 5000 || horas > 40){
    console.log("Tem direito ao bonus")
}
else{
    console.log("Nao tem direito ao bonus")
}