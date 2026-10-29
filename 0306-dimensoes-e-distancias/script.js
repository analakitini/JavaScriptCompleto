// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeraImagem = document.querySelector("img");
console.log(primeraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
const todasImagens = document.querySelectorAll("img");
const somaLarguraTodasImagens = Array.from(todasImagens).reduce(
  (total, img) => {
    return total + img.offsetWidth;
  },
  0,
);
console.log(`A largura total das imagens é: ${somaLarguraTodasImagens}px`);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksPagina = document.querySelectorAll("a");
linksPagina.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(`O link ${link.innerText} possui o tamanho adequado`);
  } else {
    console.log(`O link ${link.innerText} não possui o tamanho adequado`);
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu");
if (window.innerWidth < 720) {
  menu.classList.add("menu-mobile");
} else {
  menu.classList.remove("menu-mobile");
}

// FORMA QUE O PROFESSOR RESOLVEU OS EXERCÍCIOS //

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui boa acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
