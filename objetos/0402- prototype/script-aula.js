function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

Pessoa.prototype.andar = function () {
  console.log(`${this.nome} está andando.`);
};

const andre = new Pessoa("Andre", 30);
// andre.falar();

// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "Brasil";
const ciadade = new String("Rio de Janeiro");

pais.charAt(0); // B
ciadade.charAt(0); // R

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");

// transforma em uma array

const listaArray1 = Array.prototype.slice.call(lista); // linkado a Array.prototype

const listaArray2 = Array.from(lista); // linkado a Array

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
