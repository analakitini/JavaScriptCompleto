// 1- Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

// Resposta

let taxas = 0;
let recebimentos = 0;

transacoes.forEach((transacao) => {
  const valorNumerico = Number(transacao.valor.replace("R$ ", ""));

  if (transacao.descricao.startsWith("Taxa")) {
    taxas += valorNumerico;
  } else if (transacao.descricao.startsWith("Recebimento")) {
    recebimentos += valorNumerico;
  }
});

console.log("Total de taxas:", taxas);
console.log("Total de recebimentos:", recebimentos);

//2- Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");

//3- Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const novoHtml = html.replaceAll("span", "a");

console.log(novoHtml);

//4- Retorne o último caracter da frase
const frase = "Melhor do ano!";
frase.charAt(frase.length - 1);
console.log(frase.charAt(frase.length - 1)); // Saída: "!"

//5- Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

const totalTaxas = transacoes2.filter((transacao) => {
  const texto = transacao.trim().toLowerCase();

  return texto.startsWith("taxa");
});

console.log(totalTaxas.length);
