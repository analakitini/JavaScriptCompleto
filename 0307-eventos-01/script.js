const img = document.querySelector("img");

img.addEventListener("click", (event) => {
  console.log(event);
});

const animaisLista = document.querySelectorAll(".animais-lista");

animaisLista.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.currentTarget);
  });
});

const linkExterno = document.querySelector("a[href^='http']");

linkExterno.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.currentTarget.href);
});

const h1 = document.querySelector("h1");

/* h1.addEventListener("click", (event) => {
  console.log(event.type, event);
});

h1.addEventListener("mouseenter", (event) => {
  console.log(event.type, event);
});

window.addEventListener("scroll", (event) => {
  console.log(event.type, event);
});

window.addEventListener("resize", (event) => {
  console.log(event.type, event);
});

window.addEventListener("keydown", (event) => {
  console.log(event.type, event);
}); */

function handleKeyboard(event) {
  if (event.key === "a") document.body.classList.toggle("azul");
  else if (event.key === "v") document.body.classList.toggle("vermelho");
}

window.addEventListener("keydown", handleKeyboard);
