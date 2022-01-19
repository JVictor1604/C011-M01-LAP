const prompt = require("prompt-sync")(); // COMANDO PARA O PROMPT


console.clear(); // COMANDO PARA LIMPAR O TERMINAL

// Início da história 

console.log(`No século XIV, vários piratas partiram em seus barcos na busca de um grande tesouro
localizado em uma ilha desconhecida no pacífico, agora, chegou a sua vez de partir capitão. 
Tudo o que você tem é um pergaminho junto com um fragmento um mapa e algumas moedas de ouro....  não deixe essa chance passar...

`);

console.log();

console.log(prompt('Pressione enter para iniciar essa jornada...'));

console.log();

let nome = prompt('Primeiro, Qual o seu nome Capitão?'); // VARIÁVEL DO NOME

console.log();

console.log(`é um prazer conhece-lo, Capitão ${nome}, vamos iniciar sua jornada pelos mares sombrios...`);

console.log();

let x = 0 // VARIÁVEL QUE CONTARÁ OS NUMEROS DE ZEROS


// PERGUNTA 1 

console.log(`Você encontrou sua tripulação, e agora precisa de um barco para partir em direção ao oriente. 
Deseja comprar um novo barco forte e equipado com as suas moedas de ouro?`);

console.log();

let rpt1 = prompt('Digite sua Resposta: ');

console.log(`Sua resposta foi ${rpt1}`);

console.log();

//PERGUNTA 2

console.log(`Durante a viagem, próximo a Índia, você se depara com navios piratas inimigos, 
eles não parecem muito fortes mas são agéis para te pegar se decidir fugir, deseja lutar?`);

console.log();

let rpt2 = prompt('Digite sua Resposta: ');

console.log(`Sua resposta foi ${rpt2}`);

console.log();

// PERGUNTA 3

console.log("Durante uma madrugada fria, seu barco sofre com uma grande tempestade e você precisa ajudar sua tripulação, você ajudou sua tripulação?");

console.log(); 

let rpt3 = prompt('Digite sua resposta: '); 

console.log(`Sua resposta foi ${rpt3}`);

console.log();

// PERGUNTA 4

console.log('Após dias navegando, você percebeu que sua tribulação está faminta, você precisa de comida!! Você trouxe comida?');

console.log();

let rpt4 = prompt('Digite sua resposta: ');

console.log(`Sua resposta foi ${rpt4}`);

// PERGUNTA 5 

console.log();

console.log("Você está quase no fim da jornada, porém a ilha está repleta de piratas furiosos prontos para arrancar sua cabeça, a única coisa que vai te salvar é a sua espada, você trouxe ela?");

console.log();

let rpt5 = prompt('Digite sua resposta: ');

console.log(`Sua resposta foi ${rpt5}`);

console.log();

// TOTAL DE RESPOSTAS

console.log(`Suas respostas foram: ${rpt1},  ${rpt2},  ${rpt3},  ${rpt4},  ${rpt5}. `);

