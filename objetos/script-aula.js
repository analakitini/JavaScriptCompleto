var pessoa = {
  nome: "Carol",
  idade: 28,
  profissao: "Desenvolvedora",
};

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

/ Objetos servem para organizar o código em pequenas partes reutilizáveis, que podem ser chamadas quando necessário. /;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";

menu.color = "blue";
var bg = menu.backgroundColor;
