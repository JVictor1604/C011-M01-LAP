const prompt = require('prompt-sync')();
console.clear();

let r = +prompt('Digite o dinheiro que Ruthe depositou: ');


console.log();

let v = +prompt('Digite o dinheiro que Victor depositou: ')

console.log();

console.log(`Victor e Ruthe juntaram ${r+v}R$`);

console.log();