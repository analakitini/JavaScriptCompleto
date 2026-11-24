// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul

function Dom(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista = new Dom("ul");
lista.ativo("ativo");

const lastLi = new Dom("li:last-child");
lastLi.ativo("ativo");
