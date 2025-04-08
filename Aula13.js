let listaVazia = []
console.log(listaVazia)

let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])

let nomes = ["Ana", "João", "Maria"]
console.log(nomes)

let ListaMista = [1, "dois", true, 2.5]
console.log(ListaMista)

let listaComLista = [
    ["Coca cola", "Cachorro quente"]
    [5.0 , 10.0]
]
console.log(listaComLista)

let frutas = [`Maça`, `Pera`, `Uva`, `Abacaxi`]
console.log(frutas)
frutas.push(`Laranja`)
console.log(frutas)

frutas = [...frutas, `Banana` ]
console.log(frutas)

frutas.splice(2, 0, `Morango`)
console.log(frutas)

frutas.splice(3,1)
console.log(frutas)
frutas.shift()
frutas.pop()
console.log(frutas)

console.log(frutas[3])
console.log(frutas.slice(0,4))
console.log(frutas.slice(1))
console.log(frutas.slice(-1))
console.log(frutas.length)

console.log(frutas)
frutas.sort()
console.log(frutas)
frutas.reverse()
console.log(frutas)