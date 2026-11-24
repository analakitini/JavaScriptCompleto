// Sempre que foi criar uma função construtora, o nome dela deve começar com letra maiúscula.

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 20000);
const fiat = new Carro("Fiat", 30000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);
