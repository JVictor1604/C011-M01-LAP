
var prompt = require('prompt-sync')();

console.clear();

let sal = +prompt('Informe seu salário: ');

let tax = 0;

let au = 0;

let ns = 0;

if (sal <= 280) {
    
    tax = 20;
    au = sal * tax/100; 
    ns = (sal + au) };

console.log();

if (sal > 280 && sal <= 700) {
    
    tax = 15;
    au = sal * tax/100; 
    ns = (sal + au) };

console.log();

if (sal > 700 && sal < 1500 ) {
    
    tax = 10;
    au = sal * tax/100; 
    ns = (sal + au) };

console.log();

if (sal >= 1500) {
    
    tax = 5;
    au = sal * tax/100; 
    ns = (sal + au) };

console.log();

console.log(
` Seu salário é de ${sal}R$

 O percentual aumentado foi de ${tax}%
 
 O valor aumentado foi de ${au}R$
 
 Seu novo salário é de ${ns}R$`

);


