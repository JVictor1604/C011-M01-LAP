const prompt = require('prompt-sync')();

// EXERCÍCIOS 3

console.clear();

// let num = +prompt('Digite um número: ');

// console.log();

// for (let x = 1; x <= 10; x++) {
//     console.log(`${num} x ${x} = ${num * x}`)
// }

// console.log();

// EXERCÍCIOS 2

let num1 = +prompt('Digite um número para ver seu fatorial: ')
let res = 1;

for (x = num1; x > 0; x--) {
    
    res = res * x;
    
    
        
};

console.log(res);
