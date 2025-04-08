const prompt = require('prompt-sync')()
let times = ["Corinthians", "Internacional", "Ceará", "Fortaleza", "Botafogo", "Flamengo", "Palmeiras", "Juventude", "Fluminense", "Grêmio", "Vasco", "Cruzeiro", "Bahia", "São Paulo", "RB Bragantino", "Santos", "Mirassol", "Sport", "Atlético MG", "Vitória"]

console.log(`o time campeão foi ${times[15]}`)

console.log(`esses 4 times irão jogar a libertadores`)
console.log(times.slice(11,15))

console.log(`times rebaixados para série b`)
console.log(times.splice(17,20))