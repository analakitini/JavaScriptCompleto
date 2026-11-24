var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}
var x = 10;
console.log(x !== 11);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (5 - 10 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional);

var corFavorita = "verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "amarelo":
    console.log("Olhe para o sol");
    break;
  case "verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("feche os olhos");
}
