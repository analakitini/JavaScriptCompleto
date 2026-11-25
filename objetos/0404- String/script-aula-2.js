const frase = "Ta";

frase.repeat(5); // TaTaTaTaTa

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

const listaItens2 = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens2.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

// serve para você comparar strings sem se preocupar com maiúsculas e minúsculas, então você pode usar o toLowerCase() ou toUpperCase() para padronizar a comparação.

const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// remove espaços em branco no início e no final da string, útil para limpar dados de entrada do usuário, como nomes, senhas ou valores monetários.
