var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);

// operador ternário

var idade = 19;
var naoPossuiDiabetes = false;
var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

// if abreviado

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
