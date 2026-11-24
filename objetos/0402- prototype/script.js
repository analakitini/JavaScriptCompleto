// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const andre = new Pessoa("Andre", "Silva", 30);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// R: colocar no console nodeList.prototype, HTMLCollection.prototype, Document.prototype, assim você terá acesso a todos os métodos e propriedades disponíveis para cada um desses tipos de dados.

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

// Pesquisar no console dessa forma  ex: li.constructor.name

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

// R: string
