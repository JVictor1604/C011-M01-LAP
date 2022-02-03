const prompt = require('prompt-sync')();
console.clear();

// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)

let rp;
let lista = [];
let professores = [];
let programadores = [];
let qtdprof = 0;
let qtdpro = 0;

do {

    let dados = {};

    dados.nome = prompt('Digite seu nome: ');
    console.log();

    dados.cargo = prompt('Digite seu cargo: ');
    console.log();

    dados.salario = +prompt('Digite seu salário: ');
    console.log();

    lista.push(dados);
    

    rp = prompt('Deseja adicionar um funcionário? ').toLocaleLowerCase();
    console.log();

    if (dados.cargo == "professor") {
        qtdprof++; professores.push(dados.nome)
    } 
    
    else if (dados.cargo == "programador") {qtdpro++; programadores.push(dados.nome)

    }

} while (rp == 'sim');  

console.log(lista);
console.log();

console.log(programadores);
console.log();

console.log(qtdpro);
console.log();

console.log(professores)
console.log();

console.log(qtdprof);
console.log();