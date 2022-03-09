/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta();

const menssagem = "Boas vindas ao jogo Blackjack!";
console.log(menssagem);

let novaRodada = confirm("Quer iniciar uma nova rodada?");
/*
for (const i of novaRodada) {
   i = carta
  if (novaRodada === true){
     novaRodada = carta
     carta = carta.txt
     carta.txt = carta.valor
     console.log(`i ${novaRodada} ${carta.txt} ${carta.valor}` )
  } else 
  console.log("O jogo acabou!")

}
*/

function iniciandoJogo(array) {
  if (novaRodada === true) {
    console.log(`Nova Rodada`);

  } else novaRodada !== true;
  {
    console.log("O jogo acabou");
  }

  for (const array of novaRodada) {
    carta = array;
    console.log(carta.txt);
    console.log(carta.valor);
  }
}

