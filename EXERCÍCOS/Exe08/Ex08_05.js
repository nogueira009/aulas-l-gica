const numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

numeros.forEach(numero => {
  console.log(`Número: ${numero} | Dobro: ${numero * 2}`);
});
