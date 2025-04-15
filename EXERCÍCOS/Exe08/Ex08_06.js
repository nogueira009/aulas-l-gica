const prompt = require('prompt-sync')(); // Para rodar esse, instale o pacote com `npm install prompt-sync`

const palavra = prompt('Digite uma palavra: ');
const vogais = palavra.match(/[aeiouAEIOU]/g);
const quantidade = vogais ? vogais.length : 0;

console.log(`A palavra "${palavra}" tem ${quantidade} vogal(is).`);
