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

console.log("Boas vindas ao jogo Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  const cartaComputador1 = comprarCarta();
  const cartaComputador2 = comprarCarta();
  const cartaUsuario1 = comprarCarta();
  const cartaUsuario2 = comprarCarta();
  const resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
  const resultadoComputador = cartaComputador1.valor + cartaComputador2.valor;
  console.log(`As suas cartas foram: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} pontuação final: ${resultadoUsuario}`)
  console.log(`As suas cartas foram: ${cartaComputador1.texto} e ${cartaComputador2.texto} pontuação final: ${resultadoComputador}`)
  if(resultadoUsuario === resultadoComputador) {
console.log("Empate!")

  }else if (resultadoUsuario > resultadoComputador) {
    console.log("O usuário ganhou!")
  }else if (resultadoComputador > resultadoUsuario) {
    console.log("O computador ganhou!")
  }
  //console.log(`${resultadoUsuario === resultadoComputador} Empate!`)
  //console.log(`${resultadoUsuario > resultadoComputador} O usuário ganhou!`)
  //console.log(`${resultadoComputador > resultadoUsuario} O computador ganhou`)

} else {
 alert(`O jogo acabou bêbê!!`)
}



/*
if (novaRodada === true) {
  console.log(`As suas cartas foram: ${resultadoUsuario} pontuação final: `);
} else {
  alert("O jogo acabou!");
}
*/
/*
let novaRodada = confirm("Quer iniciar uma nova rodada?");
console.log(novaRodada);
if (novaRodada === true) {
  
console.log(`${cartaUsuario1} - carta: ${carta.valor}`)

} else {
  alert("O jogo acabou!");
}
*/
