const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const primeraLi = document.querySelector("li");
console.log(primeraLi);

const primeiraUl = document.querySelector("Ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSelectionHTML = document.getElementsByClassName("grid-section");

const gridSelectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSelectionHTML);
console.log(gridSelectionNode);

gridSelectionNode.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

const arrayGrid = Array.from(gridSelectionHTML);

arrayGrid.forEach((item) => {
  console.log(item);
});
