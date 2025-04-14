const carrosStr = 'Gol;Corsa;Palio;Monza;Fusca;';
const carros = carrosStr.split(';').filter(carro => carro !== '');

carros.forEach((carro, index) => {
  console.log(`Posição ${index}: ${carro}`);
});
