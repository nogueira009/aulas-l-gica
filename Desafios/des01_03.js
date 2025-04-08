const prompt = require('prompt-sync')()

let gasolina = Number(prompt(`qual tipo vai abastecer hoje? `))
let Etanol = Number(prompt(`Qual tipo vai abastecer hoje? `))
let calculos = (gasolina * 70) / 100

if(etanol < gasolina){
    console.log(`abasteça com alcool`)
}else{
    console.log(`abasteça com gasolina, pois o valor é melhor`)
}