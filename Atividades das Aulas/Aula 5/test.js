const prompt = require('prompt-sync')(); 

console.clear();

let senha = 2004

let senha2 = 'oi'

while (senha2 != senha ) {senha2 = +prompt('Diga a senha de 4 dígitos: ');

console.log();

if (senha2 != senha) {console.clear(); 
    console.log('Senha errada, Digite novamente')};

console.log();

};

console.log();

console.log('Parabéns, você digitou a senha correta');

console.log();

let x = 0

while (x < 5) {

    console.log('x é menor que 5');
    x++
}