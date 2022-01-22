console.clear();

var prompt = require('prompt-sync')();

// EXERCICIO 1

let x = +prompt('Digite um número: ');

console.log();

let y = +prompt('Digite outro número: ');

console.log();

if (x > y) {console.log(x)} else if (x < y) {console.log(y)} else {console.log('Os dois números são iguais')};

console.log();

// EXERCICIO 2

let r1 = +prompt('Digite sua 1º nota: ');

console.log();

let r2 = +prompt('Digite sua 2º nota: ');

console.log();

let r3 = +prompt('Digite sua 3º nota: ');

console.log();

let r4 = +prompt('Digite sua 4º nota: ');

console.log();

let media = ((r1+r2+r3+r4)/4);

console.log(media);

if (media >= 7) {console.log('Você está aprovado')} else if (media < 5) {console.log('Você está reprovado')} else {console.log('Você está em recuperação')};

console.log();

//EXERCICIO3 

x = +prompt('DIgite um número: ');

console.log();

if (x % 2 == 0) {console.log(`O número ${x} é par`)} else {console.log(`O número ${x} é ímpar`)};

console.log();

