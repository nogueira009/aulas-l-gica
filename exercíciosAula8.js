const prompt = require('prompt-sync')()

//crie um algoritimo que receba um caractere e verifique se ele é
//vogal ou consoante
let letra = prompt('Digite uma letra: ')
    let vogal = ("a" ||vogal == "e" ||vogal == "i" ||vogal == "o" ||vogal == "u")
    if(letra == vogal ){
        console.log('Sua letra é uma vogal!')
    }else{
        console.log('Sua letra é uma consoante')
    }
