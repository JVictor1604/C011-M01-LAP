// const prompt = require('prompt-sync')();

// console.clear();

// let idades = [16,20,56,70,45];

// console.log(idades);

// console.log();

// let nomes = ['José Victor','Mirrely','Vitória','Ruthe'];

// console.log(nomes);

// console.log(nomes[0])


// // IndexOf procura o índice de um elemento de uma array 

// console.log(nomes.indexOf('José Victor'))


// Exercícios 1

const prompt = require('prompt-sync')();

console.clear();

let vezes = 0;
let numeros = [];
let resposta = 0;
let id = 0
let par = []
let impar = []

while (vezes < 20) {
   resposta = +prompt('Digite um número: ');
   console.log();
   numeros.push(resposta); 
   
   if (numeros[id] % 2 == 0) { 

    par.push(resposta)} else {impar.push(resposta)}
   

   vezes++
   id++
};

console.log(numeros);

console.log();

console.log(par);

console.log();

console.log(impar);