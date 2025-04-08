const prompt = require('prompt-sync')()

//digitar o ano de nascimento
let data = Number(prompt(`Qual sua data de nascimento?`))
if(data <= 2007){
    console.log(`Maior de idade`)
}else{
    console.log(`menor de idade`)
}