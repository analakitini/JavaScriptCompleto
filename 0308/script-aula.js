/* const h1 = document.querySelector("h1");
const animaisDescricao = document.querySelector(".animais-descricao");

console.log(animaisDescricao.innerHTML);
console.log(h1.innerHTML);
console.log(h1.outerHTML);

//h1.outerHTML = "<h1>Olá mundo</h1>";

// Transversing: como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement); // pai

console.log(lista.parentElement.parentElement); // pai do pai = avô

console.log(lista.previousElementSibling); // elemento acima

console.log(lista.nextElementSibling); // elemento abaixo

console.log(lista.children); // HTMLCollection com os filhos

console.log(lista.children[0]); // primeiro filho

console.log(lista.children[--lista.children.length]); // último filho

console.log(lista.querySelectorAll("li")); // todos os li's

console.log(lista.querySelector("li:last-child")); // último li

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

//lista.appendChild(tituloContato); // move o título para dentro da lista
//animais.appendChild(tituloContato); // move o título para dentro de animais

//contato.insertBefore(animais, mapa); // move animais para antes do mapa

//contato.removeChild(tituloContato); // remove o título do contato

contato.replaceChild(mapa, tituloContato); // substitui o título pelo mapa

// Criação de elementos pelo JS
const novoh1 = document.createElement("h1");
novoh1.innerText = "Novo título";
novoh1.classList.add("titulo");

mapa.appendChild(novoh1); // adiciona o novo h1 no final do mapa
console.log(novoh1);
 */

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true); // true = com filhos, false = sem filhos

cloneH1.classList.add("azul"); // adiciona a classe azul no clone do h1
faq.appendChild(cloneH1); // adiciona o clone do h1 no final da faq
