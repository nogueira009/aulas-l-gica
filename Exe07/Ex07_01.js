const prompt = require('prompt-sync')()
let filmes = ["Transformers 2" , "Velozes e Furiosos 3" , "Homem Aranha 3" , "Batman" , "Jurassic Park" , "Ben 10" , "Godzilla"]
console.log(filmes)

console.log(filmes)
console.log(filmes[0])
console.log(filmes[3])

filmes[6] = "Até o último homem"
console.log(filmes)

filmes[filmes.length -1] = "Capitão América"
console.log(filmes)

filmes.push(`Thor: Ragnarok`)
console.log(filmes)

filmes[7] = "Justiceiro"
console.log(filmes)

filmes.shift()

filmes.pop()

console.log(filmes.slice(0,2))
console.log(filmes)

console.log(filmes.slice(-4))

console.log(filmes.length)

filmes.reverse()
console.log(filmes)