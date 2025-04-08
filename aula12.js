const prompt = require('prompt-sync')()
for(let i = 0; i < 100; i++){
    console.log(i)
}

//entregando os notebooks por ordem
console.log("entregando notebooks")
for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`quem é o número ${nr}`)
    let presente = prompt(`O/A ${nome} está presente? S ou N`)
    if(presente == `S`){
        console.log(`pegar notebook ${nr}`)
        console.log(`pegar mouse ${nr}`)
        console.log(`pegar fonte ${nr}`)
        console.log(`levar notebook até ${nome}`)
    }
    else{
        consolr.log(`não pegar notebook ${numero}`)
    }
}