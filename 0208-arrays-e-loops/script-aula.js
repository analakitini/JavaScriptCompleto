//var videoGames = ["Switch", "PlayStation", "Xbox"];

// var ultimoItem = videoGames.pop(); // Remove o último item do Array

// videoGames.push("3DS"); // Adiciona um item no final do Array

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

var videoGames = ["Switch", "PlayStation", "Xbox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PlayStation") {
    break;
  }
}

var frutas = ["Banana", "Morango", "Amora", "Limao", "Pitaya"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
