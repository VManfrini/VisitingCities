const turista = prompt("Qual é o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma cidade? (Sim/Não)");
}

alert(
  `Turista: ${turista}\n Quantidade de cidades visitadas: ${contagem}\n Cidades visitadas: ${cidades}`
);
