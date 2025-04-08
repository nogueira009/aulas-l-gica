const prompt = require('prompt-sync')()

//ler dinheiro na carteira
let carteira = 150

//converter para dólar
let divisao = 150 / 5.79

//exibir o valor
console.log(`sua carteira brasileira tem: ${carteira}, e sua carteira americana tem: ${divisao}`)
