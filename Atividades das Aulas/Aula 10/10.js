const prompt = require('prompt-sync')();


console.clear();
let num = +prompt('Digite um número inteiro: ');
let divisores = 0;
console.log();

for (let i = 1; i <= num;i++) {
  
    if (num % i == 0) {divisores ++};
  
    };


    console.log(`O número ${num} possui ${divisores} divisores`);

    console.log();

    if (divisores == 2)   {
        console.log(`Portanto O número ${num} é primo`)
    }

    else {
        console.log(`Portanto O número ${num} não é primo`)
    };

    console.log();
// let rp;
// let nomes = [];

    
//     do { let nome = prompt('Digite o nome que você quer adicionar a lista: ')

//     console.log();

//     nomes.unshift(nome);

//     console.log(`O nome ${nome} foi adicionado`)

//     console.log();

//     rp = prompt('Deseja adicionar outro nome? ').toLocaleLowerCase();

      

//     } while (rp == 'sim' || rp == 's');

//     console.log(nomes);