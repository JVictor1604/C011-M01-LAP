const prompt = require('prompt-sync')(); 

console.clear();

let senha = 'Victor 2004'

let senha2 = 'oi'

while (senha2 != 'Victor 2004') {senha2 = prompt('Diga a senha :')

senha = senha2

};

console.log();

console.log('Parabéns, você digitou a senha correta');

console.log();