const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ')

if (isNaN(nome)) {
    console.log('É uma string')} 

    else {console.log('é um número')}