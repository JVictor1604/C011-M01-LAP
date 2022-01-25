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

let x = 0;

let tentativas = 0

let senhar;

do {senhar = +prompt('Digite sua senha de 6 dígitos: ')


   if (senhar != 200516) {

   console.log(); 
   console.log('Senha errada');
   console.log();
   tentativas++;
   
}


   if (tentativas == 5) {console.log('Você atingiu o limite de tentativas')};

   console.log();

   if (tentativas == 5) {
    break; 
}



} while (senhar != 200516);


