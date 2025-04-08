const prompt = require('prompt-sync')()
let vendas = Number(prompt(`Digite o total de vendas do mes`))
if(vendas > 5000){
    let comissao = vendas * 0.05
    console.log(`À comissão para o mes é de: ${comissao}`)
}else{
    let comissao = vendas * 0.03
    console.log(`À comissão para o mes é de: ${comissao}`)
}