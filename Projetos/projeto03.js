const prompt = require("prompt-sync")();
console.clear();


//TEMPO
let dia = 01;
const meses = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
var mes = meses[10];
var ano = 1942;
let hora = 9;

//STATUS
let status = {
    saude: 100,
    moral: 60,
    nível: 1,
    exp: 0,
    fome: 30,
    $: 50,
}


//FUNÇÕES

function comer() {

    console.log(

`Você chegou ao refeitório, escolha uma refeição para preparar:
    
  1 - SOPA 
  2 - ESTROGONOFE
  3 - PEIXE FRITO
    
Lembrando que uma refeição mais completa diminuirá mais sua fome, porém gastará mais tempo...
    
    `)
    let cm = +prompt('Digite o número de sua refeição: ')

    console.log();

    if (cm == 1) {
        console.log(
            'Você comeu uma sopa, ela estava um pouco fria mas não é de se reclamar. Sua fome diminuiu em 10!!'); status.fome -= 10; hora += 2;

    } else if (cm == 2) {
        console.log(
            'Você fez um belo estrogonofre de frango. Sua fome diminuiu em 20!!'), status.fome -= 20; hora += 3;

    } else { console.log('Você comeu um magnífico peixe frito. Sua fome diminuiu em 30!!'), status.fome -= 30, hora += 4 };

    console.log();
    console.log(`Sua fome agora é: ${status.fome}`);
    console.log();

};

function st() {
    console.log(`
   
   Seus status são:
   ╔════════════
   ║ saúde = ${status.saude}
   ║ moral = ${status.moral}
   ║ nível = ${status.nível}
   ║ exp = ${status.exp}    
   ║ fome = ${status.fome}  
   ║ dinheiro = ${status.$}                
   ╚════════════

`)
}


function trabalhar() {

    console.log();

    console.log('Você chega a sua sala de enfermaria, vários soldados esperam seu atendimento');

    let numAtendimentos = 0;
    console.log();
    
    while (numAtendimentos != 1 && numAtendimentos != 2) {

        if (status.moral > 50) {
            
            console.log('Sua moral está alta, você pode fazer até dois atendimentos por hoje. ')

            numAtendimentos = +prompt('Digite o número de atendimentos que deseja realizar: ')
        }

        else { 'Sua moral está baixa, você só poderá atender um paciente hoje', numAtendimentos = 1 }
        console.log();
        
        while (numAtendimentos != 1 && numAtendimentos != 2) {

            console.log('Número inválido, Digite 1 ou 2...')
            console.log();
            numAtendimentos = +prompt('Digite o número de atendimentos que deseja realizar: ')
        }

        console.log();

        for (i = 0; i < numAtendimentos; i++) {
            
            console.log('Atendi um paciente');

            hora += 2; status.exp += 5;status.fome +=2;

            if (status.exp >= 15) { status.exp = 0; status.nível++, console.log(`Você subiu de Nível!!`)};

        }
    }
};



console.log(
    `01 de Outubro de 1942... O relógio marca ${hora}:00 da manhã

– Mais um dia de tensão na União Sóviética, o exército nazista avança pelas ruas da tão almejada cidade de Stalingrado, e agora eu preciso lutar contra a morte nesses que podem ser meus últimos dias de vida...

Você olha sua identidade e lá estão seus dados: 

╔════════════════════════════════╗
║              URSS              ║
║ Nome: Nina Litvinova           ║
║ Data de nascimento: 10/09/1915 ║
║ Registro: 161988US             ║
║ Função: Enfermeira             ║
║                                ║
║ Notas: Filha do general        ║
║ Gueorgui Júkov                 ║
╚════════════════════════════════╝

–Apesar de ser respeitada e conhecida por causa do meu pai, me sinto sozinha nesse vasto hospital de guerra. Minha mãe morreu faz 7 anos e meu pai vive nas frentes de batalha. Minhas rotina é ver corpos e mais corpos por todos os lados, dor e sofrimento de todos que fogem da invasão nazista. Quanto a mim? não resta escolha a não ser tentar sobreviver a tudo isso...

Esses são meus status:

╔════════════════════════╗
║   saúde = 100          ║
║   moral = 60           ║
║   nível = 0            ║
║   experiência = 0      ║
║   fome = 30            ║
║   dinheiro = 50 rublos ║               
╚════════════════════════╝

Agora está na hora de dar tudo de mim mesma na luta pela sobrevivência 
`);

console.log();

prompt('Pressione enter para iniciar a jornada')

console.log();

console.log(`Dia ${dia} de ${mes} de ${ano}.....`)


while (hora <= 21) {

    console.log(`São ${hora} horas`)

    console.log(` 
Escolha sua ação:

1 - Comer
2 - Cuidar de soldados feridos
3 - Ver status
`);

    let escolha = +prompt('Digite o número da sua ação: ');

    if (escolha == 1) { comer() }

    else if (escolha == 2) {trabalhar()}

    else if (escolha == 3) { st() }

    else if (escolha == 0) { break }
};