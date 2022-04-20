const prompt = require("prompt-sync")();
console.clear();

console.log();

let contarVotos = {

    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    votoBranco: 0,
    votoNulo: 0,

    exibirResultados: function () {console.log(`


        resultado oficial da votação:
    ╔════════════
    ║ Júlio Prestes            : ${this.candidato1} Votos
    ║ Getúlio Vargas        : ${this.candidato2} Votos
    ║ Ruy Barbosa         : ${this.candidato3} Votos
    ║ 
    ║ Votos em Branco : ${this.votoBranco} Votos
    ║ Votos nulo      : ${this.votoNulo} Votos
    ║               
    ╚════════════
    
    
    
    `)

    if (this.candidato1 > this.candidato2 && this.candidato1 > this.candidato3) {

        console.log();
        console.log(`Júlio Prestes venceu a eleição com ${this.candidato1} Votos`);
        console.log();
    }   else if (this.candidato2 > this.candidato1 && this.candidato2 > this.candidato3) {

        console.log();
        console.log(`Getúlio Vargas venceu a eleição com ${this.candidato2} Votos`);
        console.log();
    }   else if (this.candidato3 > this.candidato1 && this.candidato3 > this.candidato2 ) {

        console.log();
        console.log(`Ruy Barbosa venceu a eleição com ${this.candidato3} Votos`);
        console.log();
    }   else {

        console.log('Houve um empate, ninguém venceu as eleições ')
    };

}};

function verificarNumero (a) {

    if (isNaN(a)) {

        console.log();
        console.log(`número inválido, digite um número válido`)
        console.log();

        a = +prompt('Digite um número válido: ')
        console.log();
    };
};

function autorizaVoto (anoNascimento) {

    if (2022 - anoNascimento >= 18 && 2022 - anoNascimento < 70) {

        return 'Obrigatório';
    } 
    
    else if (       
                    2022 - anoNascimento >= 16 &&
                    2022 - anoNascimento <= 17 ||
                    2022 - anoNascimento >= 70) {
                    
                    console.log();
                    console.log('Seu voto é facultativo, deseja votar? ')
                    console.log();

                    let desejaVotar = prompt('Digite sua resposta: ').toLocaleLowerCase();

                    if (desejaVotar == 's' || desejaVotar == 'sim')
                       
                    return "Obrigatório";

                       else {

                        return 'Negado'
                       }
                    }

    else {
        
        return 'Negado';
    };
};

function votar(autorização) {


    if (autorização == 'Obrigatório') {

    console.log();
    console.log('Você chegou na urna eletrônica');
    console.log();
    
    console.log(`Escolha seu voto: :
        
                           1 - Candidato Júlio Prestes
                           2 - Candidato Getúlio Vargas 
                           3 - Candidato Ruy Barbosa

                           4 - Voto em branco



                Digite o número que aparece na frente do candidato para votar no mesmo, ou digite 4 para votar em branco.  

        `); 

        console.log();

    let voto = +prompt('Digite o número do seu voto: ');

    console.log();

    return voto;};
};

function votação(autorização,voto) {

    if (autorização == 'Negado') {

        console.log();

        return console.log("Você não pode ou decidiu não votar, acesso negado");
        
    } 
    
        else {
            
            console.log('Você está na faixa etária obrigada a votar, ou você decidiu facultativamente votar.');
            
            }

    console.log();
    
    

    if (voto == 1) {
        
        console.log('Você votou em Júlio Prestes');
        contarVotos.candidato1++;
    
    } else if (voto == 2) {
        
        console.log('Você votou em Getúlio Vargas');
        contarVotos.candidato2++;
    
    } else if (voto == 3) {
        
        console.log('Você votou em Ruy Barbosa');
        contarVotos.candidato3++;
    }   
    
    else if (voto == 4) {
        
        console.log('Você votou em branco');
        contarVotos.votoBranco++;
    
    
    }   else {

        console.log('Seu voto foi nulo');
        contarVotos.votoNulo++;
    };};






do {

let anodeNascimento = +prompt('Digite o ano do seu nascimento: ');

verificarNumero(anodeNascimento);

console.log();

votação(autorizaVoto(anodeNascimento),votar(autorizaVoto(anodeNascimento)));

console.log();

var maisVoto = prompt('Tem mais alguém para votar? ').toLocaleLowerCase();

console.log();

} while (maisVoto == 'sim' || maisVoto == 's');


contarVotos.exibirResultados();





