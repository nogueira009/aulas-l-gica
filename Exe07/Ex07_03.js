const prompt = require('prompt-sync')()
let comida = []

for(let i = 0; i < 6; i++){
    let comida = prompt(`digite o nome da comida ${i + 1}`)
    comida.push(comida)
}

console.log(comida)
console.log(comida[0])
