const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);

const frase = "A melhor comida";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

const frase2 = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseCompleta = frase2.concat(linguagem, "!!");

// const fruta = 'Banana';
const listaFrutas = "Melancia, Banana, Laranja";

// const fruta = "Banana";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

const fruta = "Banana";

fruta.endsWith("nana"); // true
fruta.startsWith("Ba"); // true
fruta.startsWith("na"); // false

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// const linguagem = 'JavaScript';
// linguagem.substring(3,5); // aS
// linguagem.substring(0,4); // Java
// linguagem.substring(4); // Script
// linguagem.substring(-3); // JavaScript

const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
instrumento.indexOf("ta"); // 3

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....
