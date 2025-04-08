const prompt = require('prompt-sync')()

let temperatura = Number(prompt(`quantos graus está fazendo hoje? `))
if (temperatura <= 15){
    console.log(`hoje esta bastante frio`)
} else if (temperatura > 15 && temperatura <= 25){
    console.log(`hoje o clima está agradável`)
} else if (temperatura > 26 && temperatura <= 35){
    console.log(`hoje o clima está quente`)
} else { (temperatura > 35)
    console.log(`hoje está muito quente`)
}