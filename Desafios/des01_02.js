const prompt = require('prompt-sync')()

let horario = Number(prompt(`Que horas são agora?`))
if(horario >= 5 && horario <= 11){
    console.log(`Bom dia`)
} else if (horario >= 12 && horario <= 17){
    console.log(`boa tarde`)
} else if (horario >= 18 && horario <= 23){
    console.log(`boa noite`)
} else { (temperatura >= 0 && 4)
    console.log(`Boa madrugada`)
}
