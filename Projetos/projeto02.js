const prompt = require("prompt-sync")();
console.clear();
let jn; // COMANDO QUE REPETIRÁ O JOGO

// INÍCIO DO JOGO

do {

  console.log('Você está pronto para jogar Yu Gi OH?? Se sim, digite seu nome para iniciar... ');

  console.log();

  let nome = prompt('Digite seu nome: '); // NOME DO JOGADOR

  while (!isNaN(nome)) {
        
        console.log();
        console.log('Nome inválido, digite letras para validar');
        console.log();
        nome = prompt('Digite seu nome: ');
  };

  const cartas = ['monstro', 'magia', 'armadilha']; // ARRAY DE CARTAS

  console.clear();

  console.log();

  // INSTRUÇÕES DO JOGO

  console.log(`Olá ${nome}, bem-vindo ao jogo do Yu Gi Oh. Primeiro, vamos iniciar com as instruções: 

                                     -----Instruções-----

  Você deve escolher o número de rodadas que deseja jogar, ao final das rodadas você saberá em quantas rodadas você venceu. Depois você deve escolher um dos três tipos de cartas abaixo: 

  ${cartas}
 
  Cada tipo de carta interage de modo diferente com outro, fazendo você ganhar ou perder o jogo.

  Após escolher, você deve digitar o tipo da carta. Você jogará contra o computador que também escolherá uma carta. 


  O jogo segue as sequintes regras: cartas do tipo monstro vencem cartas de armadilha, mas perdem para cartas de magia; cartas de magia vencem cartas de monstro mas perdem para cartas de armadilha; cartas de armadilha vencem cartas de magia, mas perdem para cartas de monstro, e caso ambos escolham cartas iguais será empate...

  Para cada vitória sua você receberá um ponto, a máquina receberá a mesma quantidade a cada vitória dela. Caso o resultado seja empate, nenhum dos dois pontuam...

  então é isso, que começem os jogos e Boa Sorte!!`);


  let vrp = 0; // VITÓRIAS DO USUÁRIO
  let vpc = 0; // VITÓRIAS DA MÁQUINA
  let ep = 0; // EMPATES
  

  console.log();

  let rodadas = +prompt('Digite o número, entre 1 e 100, de rodadas que você deseja jogar: ');

  while(rodadas <= 0 || rodadas > 100) {
      
    
    console.log();
    console.log('Erro, digite um número entre 1 e 100');
    console.log();
    rodadas = +prompt('Digite o número de rodadas que você deseja jogar: ');
  };
  
  while (isNaN(rodadas)) {
        
    console.log();
    console.log('Número inválido, digite apenas números para validar');
    console.log();
    rodadas = +prompt('Digite o número, entre 1 e 100, de rodadas que você deseja jogar: ');
};

  for (let i = 1; i <= rodadas; i++) {

    console.log();

    console.log('----VAMOS A BATALHA----')

    console.log();

    let rp = prompt('Escolha um tipo de carta: ').toLocaleLowerCase();

    while (rp != cartas[0] && rp != cartas[1] && rp != cartas[2]) {

      console.clear();
      console.log();
      console.log('Digite uma resposta válida, lembre-se de digitar monstro, magia ou armadilha');
      console.log();
      rp = prompt('Escolha um tipo de carta: ').toLocaleLowerCase();
      console.log();
    };

    let pc = cartas[Math.floor(Math.random() * 3)];

    console.log();

    console.log(`Você escolheu uma carta do tipo ${rp}`);

    console.log();

    console.log(`O computador escolheu uma carta do tipo ${pc}`);

    console.log();

    if (rp == cartas[0] && pc == cartas[2] ||
        rp ==  cartas[1] && pc == cartas[0] ||
        rp == cartas[2] && pc == cartas[1]
    ) {
      console.log(`${rp} vence cartas de ${pc}, Parabéns, Você venceu a rodada!!`)
      vrp++;
    }
    
    else if (pc == cartas[0] && rp == cartas[2] ||
             pc == cartas[1] && rp == cartas[0] ||
             pc == cartas[2] && rp == cartas[1]
             ) {
      console.log(`${rp} perde para cartas de ${pc}, Infelizmente você perdeu a rodada....`);
      vpc++;
    }

    else {
      console.log(`cartas de ${rp} são iguais a cartas de ${pc}, nínguem venceu na rodada`)
      ep++;
    };     

    console.log();

    if (i < rodadas) {
      console.log('Vamos para uma nova rodada');}

      else if (i == rodadas) {
      prompt('Acabaram as rodadas, pressione enter para continuar ')}
    
    }
  
  console.log();

  console.log(`Acabou a jogo, foram jogadas ${rodadas} Rodada(s).

        TABELA DE RESULTADOS

  ----Você venceu ${vrp} Rodada(s)----
  
  ----A máquina venceu ${vpc} Rodada(s)----
  
  ----Houveram ${ep} empate(s)----`
  );

  console.log();

  if (vrp > vpc) {
    console.log(`EXODIA, OBLITERARRRRR Parabéns ${nome}, você venceu o jogo e provou seu poder no reino dos duelistas`);
  }

  else if (vpc > vrp) {
    console.log(`AHHHHH NÃO, UMA FORÇA ESPELHO!!!! Infelizmente Você perdeu o jogo ${nome}, mas não desista, você têm muito a provar no reino dos duelistas `)
  }

  else { console.log(`EMPATEEEEE fim de jogo ${nome}... O resultado foi empate, ninguém venceu o jogo`)};

  console.log();

  jn = prompt('O jogo acabou, obrigado por ter jogado!! Deseja jogar novamente? ').toLocaleLowerCase();

  console.log();

  console.clear();
}
while (jn == 'sim' || jn == 's');



