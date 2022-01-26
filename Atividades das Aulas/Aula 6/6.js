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
let id = 1
let par = []
let impar = []

while (vezes < 20) {
   resposta = +prompt(`Digite o ${id}º número: `);
   console.log();
   numeros.push(resposta); 
   
   if (resposta % 2 == 0) { 

    par.push(resposta)} else {impar.push(resposta)}
   

   vezes++
   id++
};

console.log(
   `Os números totais são ${numeros}`);

console.log();

console.log(`os números pares são ${par}`);

console.log();

console.log(`Os números ímpares são ${impar}`);