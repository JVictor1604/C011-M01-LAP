const prompt = require("prompt-sync")();
console.clear();

// INÍCIO DO JOGO

console.log('Vamos jogar pedra, papel e tesoura?? Digite sim para iniciar ');

console.log();

let iniciar = prompt('Digite sua resposta: ').toLocaleLowerCase(); // COMANDO PARA INICIAR O JOGO

while (iniciar != 'sim') { 

    console.log();
    
    iniciar = prompt('Você não comecou o jogo, digite novamente sua resposta: ').toLocaleLowerCase();
}


let elemento = ['pedra','papel','tesoura']; // ARRAY DE ELEMENTOS

console.clear();

// INSTRUÇÕES DO JOGO

console.log(`Primeiro, vamos iniciar com as instruções: 

Você deve escolher o número de rodadas de deseja jogar, ao final das rodadas você saberá em quantas rodadas você venceu. Depois você deve escolher um dos três elementos abaixo: 

${elemento}
 
após escolher, você deve digitar o nome do elemento quando for perguntado. Você jogará contra a máquina que também escolherá um elemento aleatoriamente. De acordo com seu elemento e o elemento escolhido pelo computador, você vence ou perde o jogo. 
Lembrando que: pedra vence tesoura mas perde para papel, papel vence pedra mas perde para tesoura, tesoura vence papel mas perde para pedra, e caso ambos escolham elementos iguais será empate...

Para cada vitória sua você receberá um ponto, a máquina receberá a mesma quantidade a cada vitória dela. Caso o resultado seja empate, os dois pontuam 1(um) ponto...

então é isso, começe o jogo e Boa Sorte!!`);

let rodadas = 0; // NÚMERO DE RODADAS
let cr = 1; // CONTADOR DE RODADAS JOGADAS
let vrp = 0; // VITÓRIAS DO USUÁRIO
let vpc = 0; // VITÓRIAS DA MÁQUINA

console.log();

rodadas = +prompt('Digite o número, entre 1 e 100, de rodadas que você deseja jogar: ');

console.log();

while (rodadas > 100 || rodadas <= 0) {
    
    rodadas = +prompt('Número inválido, Digite o número de rodadas que deseja jogar: ')
}

while (cr <= rodadas) {

  console.log();

  let rp = prompt('Escolha um elemento: ').toLocaleLowerCase();

  while (rp != elemento[0] && rp != elemento[1] && rp != elemento[2]) {

    console.log();
    console.log('Digite uma resposta válida, lembre-se de digitar pedra, papel ou tesoura');
    console.log();
    rp = prompt('Escolha um elemento: ').toLocaleLowerCase();
    console.log();
}

  let pc = elemento[Math.floor(Math.random()*3)]

  console.log();

  console.log

  console.log(`Você escolheu ${rp}`);

  console.log();

  console.log(`O computador escolheu ${pc}`);

  console.log();

  if (rp == 'papel' && pc == 'pedra' ||
      rp == 'pedra' && pc == 'tesoura'||
      rp == 'tesoura' && pc == 'papel'
) 
    {console.log(`${rp} vence ${pc}, Parabéns, Você venceu!!`)
    vrp++ 
    };

  if (pc == 'papel' && rp == 'pedra' ||
      pc == 'pedra' && rp == 'tesoura'||
      pc == 'tesoura' && rp == 'papel'
) {
    console.log(`${rp} perde para ${pc}, Infelizmente você perdeu....`);
    vpc++}

  if (pc == rp) 
    {console.log(`${rp} é igual a ${pc}, deu empate`)
     vrp++; vpc++;
};

    cr++;
    
    console.log();

    if (cr <= rodadas) {console.log('Vamos para uma nova rodada')}

  console.log();};

  console.log(vrp);

  console.log();

  console.log(vpc);