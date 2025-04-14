let frutas = [`Maçã` , `Banana` , `Uva` , `Abacaxi`]

for(let x = 0; x < frutas.length; x++){
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = [`Biil Gates` , `Rafinha` , `Raul Seixas` , `Estves` , `Vieira`]

for(let nome of listaNomes){
    console.log(nome)
}

const prompt = require(`prompt-sync`)()
let vogais = [`a` , `e` , `i` , `o` , `u`]
let consoantes = [`b` , `c` , `d` , `f` , `g` , `h` , `j` , `k` , `l` , `m` , `n` , `o` , 
    `p` , `q` , `r` , `s` , `t` , `u` , `v` , `w` , `x` , `y` , `z`]
let letras = prompt(`Digite uma letra: `)

if(vogais.includes(letras.toLowerCase())){
    console.log(`é uma vogal`)
}else if(consoantes.includes(letras.toLowerCase())){
    console.log('consoante');}
    else{console.log('Não é uma letra');}

    //obtendo posição do item
for(let[pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`Posição${pos} e fruta ${fruta}`)
}

// separando os items em uma lista 
let produtos = 'Celular, notebook, Tv, tablet, headset'
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}

// percorrendo uma string como uma lista
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}
