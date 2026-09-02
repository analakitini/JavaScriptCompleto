"use strict"; // Modo estrito, evita erros silenciosos e torna o código mais seguro

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// variavel global (erro)

function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// escopo de função (pai)

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

// escopo de bloco

if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro

// const e let no lugar de var

if (true) {
  const carro = "Fusca";
  console.log(carro);
}
console.log(carro); // erro, carro is not defined

// {} para criar um bloco
{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

// for loop

for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// for loop com let para nao vazar do escopo

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

// Const, mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data = "Janeiro"; // erro

// let - Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
