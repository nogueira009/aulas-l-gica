//trabalhando com laços de repetição (while)

//executar o laço x vezes

let contador = 1;

//irá repetir enquanto a condição for verdadeira
//ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <= 5){
    console.log(`o contador é ${contador}`)

//incremento a variavel ou seja adicionando valor a ela
//para que continue o processo ate que a condução seja atingida
//contador = contador++;
    contador = contador + 1
}

console.log("fim")
const prompt = require(`prompt-sync`)()
let senha_senai = `GbPipoca10`

while(true){
    let senha = prompt("Digite a senha")
        if(senha_senai == senha){
            console.log(`você hackeou a senha`)
            break
    }else if(senha == `Desisto`){
        break
    }
}

let soma = 0
let qtd = 0
let encerrar = "SUB-TOTAL"
while(encerrar != "SUB-TOTAL"){
    let soma = 0
    let qtd = 0
    let valor = Number(prompt(`digite o valor do produto(0 para encerrar)`))
    if(valor == 0){
        break
    }
    else{
        soma = soma + valor
        qtd++
    }
}
console.log(`foram informados ${qtd}`)
//toFixed para colocar somente dois digitos apos a virgula
console.log(`valor total dos produtos ${soma.toFixed(2)}`)

//CRIE um jogo de adivinhação 
console.log("#############################################")
console.log("🦫        JOGO DA ADIVINHAÇÃO               🦫")
console.log("#############################################")
let nSorteado = Math.floor(Math.random() * 100 + 1)
let acertou = false

while(acertou){
    const chute = parseInt(prompt(`🦫 Digite um número 1 e 100 e tente adivinhar`))
    if(chute > nSorteado){
        console.log(`Você chutou ${chute}, tente um número menor`)
    }else if(chute < nSorteado){
        console.log(`Você chutou ${chute}, tente um número maior `)
    }else if(chute == nSorteado){
        console.log(`Você chutou ${chute}. Parabéns, você acertou`)
        acertou = true
    }
}

console.log(`Fim`)