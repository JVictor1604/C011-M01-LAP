const prompt = require("prompt-sync")();
console.clear();

//TEMPO

let meses = [
  "",
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

let tempo = {
  dia: 29,

  mes: meses[10],

  ano: 1942,

  hora: 9,

  passarTempo: function (a) {
    this.hora = this.hora + a;

  },
};

// INVENTÁRIO

let inventario = [

  {alimento: 'Sopa', qtd: 2},
  {alimento: 'Estrogonofre', qtd: 3},
  {alimento: 'Peixe Frito', qtd: 2},
  {remedio: 'Analgésico', qtd: 1},
  {remedio: 'Antídoto', qtd: 1},
  {remedio: 'Vacina', qtd: 1},
];

function verInventário() {

  console.log(`
  
  Aqui está seu inventário:
  
  ${inventario[0].alimento} :${inventario[0].qtd}
  ${inventario[1].alimento} :${inventario[1].qtd}
  ${inventario[2].alimento} :${inventario[2].qtd}
  ${inventario[3].remedio} :${inventario[3].qtd}
  ${inventario[4].remedio} :${inventario[4].qtd}
  ${inventario[5].remedio} :${inventario[5].qtd}

  
  
  
  `)};




//STATUS

let status = {
  saude: 100,
  moral: 60,
  nivel: 1,
  exp: 0,
  fome: 30,
  dinheiro: 50,

  modificarSaude: function (b, a) {
    if (b == 1) {
      this.saude = this.saude + a;

      console.log();

      console.log(`sua saúde aumentou em ${a}`);

      console.log();
    } else {
      this.saude = this.saude - a;

      console.log();

      console.log(`sua saúde diminuiu em ${a}`);

      console.log();
    }
  },

  modificarMoral: function (b, a) {
    if (b == 1) {
      this.moral = this.moral + a;

      console.log();

      console.log(`A sua moral aumentou em ${a}`);

      console.log();
    } else {
      this.moral = this.moral - a;

      console.log();

      console.log(`A sua moral diminuiu em ${a}`);

      console.log();
    }
  },

  modificarFome: function (b, a) {
    if (b == 1) {
      this.fome = this.fome + a;

      console.log();

      console.log(`Sua fome aumentou em ${a}`);

      console.log();
    } else {
      this.fome = this.fome - a;

      console.log();

      console.log(`Sua fome diminuiu em ${a}`);

      console.log();
    }
  },

  aumentarNivel: function (a) {
    this.exp = this.exp + a;

    console.log();

    console.log(`Sua experiência aumentou em ${a}`);

    if (this.exp >= 15) {
      this.exp = this.exp - 15;
      this.nivel++;
      console.log();
      console.log('Seu nível aumentou')
      console.log();
    }

    console.log();
  },

  modificarDinheiro: function (b,a) {
    if (b == 1) {
      this.dinheiro = this.dinheiro + a;

      console.log();

      console.log(`Seu dinheiro aumentou em ${a} Rublos`);

      console.log();
    } else {
      this.dinheiro = this.dinheiro - a;

      console.log();

      console.log(`Seu dinheiro diminuiu em ${a} Rublos`);

      console.log();
    }
  },

  verStatus: function() {
   console.log(`
    
    Seus status são:
    ╔════════════
    ║ saúde = ${this.saude}
    ║ moral = ${this.moral}
    ║ nível = ${this.nivel}
    ║ experiência = ${this.exp}    
    ║ fome = ${this.fome}  
    ║ dinheiro = ${this.dinheiro}                
    ╚════════════
 
 `)
  }
};
//FUNÇÕES SECUNDÁRIAS

//FUNÇÕES PRINCIPAIS

function comer() {
  console.log();

  console.log(
    `----Você chegou ao refeitório, escolha uma refeição para preparar:----
    
    1 - SOPA          tempo de preparo = 1 horas
    2 - ESTROGONOFE   tempo de preparo = 2 horas
    3 - PEIXE FRITO   tempo de preparo = 3 horas
    
    Lembrando que uma refeição mais completa diminuirá mais sua fome, porém gastará mais tempo...
    
    Você possui: 

    ${inventario[0].alimento}  ${inventario[0].qtd}
    ${inventario[1].alimento}  ${inventario[1].qtd}
    ${inventario[2].alimento}  ${inventario[2].qtd}
    
    `

  );

  console.log();

  let cm = +prompt("Digite o número de sua refeição: ");

  console.log();

  while (cm != 1 && cm != 2 && cm != 3) {
    console.log("Valor inválido, digite 1,2 ou 3");
    console.log();
    cm = +prompt("Digite o número de sua refeição: ");
    console.log();
  }

  if (cm == 1 && inventario[0].qtd > 0) {
    console.log(
      "Você comeu uma sopa, ela estava um pouco fria mas não é de se reclamar."
    );
    inventario[0].qtd -= 1;
    status.modificarFome(2,10);
    tempo.passarTempo(1);

  } else if (cm == 2 && inventario[1].qtd > 0) {
    console.log(
      "Você fez um belo estrogonofre de frango."
    ),
    inventario[1].qtd -= 1;
    status.modificarFome(2,20);
    tempo.passarTempo(2);

  } else if (cm == 3 && inventario[2].qtd > 0) {
    console.log(
      "Você comeu um magnífico peixe frito."
    ),
    inventario[2].qtd -= 1;
      status.modificarFome(2,30),
      tempo.passarTempo(3);
  }  else {console.log(`Você não tem mais ${inventario[cm - 1].alimento}`)}

  console.log();
  console.log(`Sua fome agora é: ${status.fome}`);
  console.log();
}


function trabalhar() {
  console.log();
  
  console.log(
    "----Você chega na sala de enfermaria, vários soldados feridos esperam seu atendimento----"
  );

  let numAtendimentos = 0;

  console.log();

  while (numAtendimentos != 1 && numAtendimentos != 2) {
    if (status.moral > 50) {
      console.log(
        "Sua moral está alta, você pode fazer até dois atendimentos por hoje. "
      );

      console.log();

      numAtendimentos = +prompt(
        "Digite o número de atendimentos que deseja realizar: "
      );
    } else {
      "Sua moral está baixa, você só poderá atender um paciente hoje",
        (numAtendimentos = 1);
    }
    console.log();

    while (numAtendimentos != 1 && numAtendimentos != 2) {
      console.log("Número inválido, Digite 1 ou 2...");
      console.log();
      numAtendimentos = +prompt(
        "Digite o número de atendimentos que deseja realizar: "
      );
    }

    console.log();

    for (i = 0; i < numAtendimentos; i++) {
      numAle = Math.floor(Math.random() * 6);
        
        console.log();
        console.log('----Atendimento----');
        console.log();

      if (numAle == 1) {
        console.log("Você estava nervosa e seu atendimento não foi bom, o soldado continua ferido mas a longo prazo se recuperará");
        tempo.passarTempo(2);
        status.aumentarNivel(2);
        status.modificarFome(1,10);
        status.modificarDinheiro(1,5);
        status.modificarMoral(2,20);
      } else if (numAle >= 3 && numAle < 5) {
        console.log(
          "Foi um atendimento normal, apesar das tensões e da sua proecupação o paciente está se recuperando e logo estará de volta em sua casa"
        );
        tempo.passarTempo(2);
        status.aumentarNivel(5);
        status.modificarFome(1,5);
        status.modificarDinheiro(1,10);
        status.modificarMoral(1,5)
      } else {
        console.log(
          "Você fez um trabalho excepcional, nem parece que estamos aflitos com a frieza e profissionalidade que você trabalhou "
        );
        tempo.passarTempo(2);
        status.aumentarNivel(10);
        status.modificarFome(1,3);
        status.modificarDinheiro(1,15);
        status.modificarMoral(1,10);
      };

      console.log();

      prompt("Pressione enter para encerrar seu atendimento");

      console.log();

      if (numAtendimentos == 2) {
        console.log("Você irá atender um novo paciente");
      }
      console.log();
    }
  }
};

function loja() {

  console.log();

  console.log(`Bem-vinda a loja Stalin, O Líder Supremo.... O que você deseja comprar?
  
              Comidas 

    1 - Ingredientes para Sopa          - 10 rublos
    2 - Ingredientes para Estrogonofre  - 20 rublos
    3 - Ingredientes para Peixe frito   - 30 rublos

  
            Remédios 


    4 - Analgésico - 15 rublos
    5 - Antídoto - 25 rublos
    6 - Vacina - 40 rublos
  
    Glória a União Soviética!! Glória ao Exército Vermelho!! 
  `)

let rp = prompt('Digite o número de sua escolha: ');

if (rp == 1 && status.dinheiro >= 10) {

  console.log();
  console.log('Você comprou ingredientes para sopa, eles foram adicionados ao seu inventário');
  status.dinheiro -= 10;
  inventario[0].qtd++;
  console.log();


}

else if (rp == 2 && status.dinheiro >= 20) {

  console.log();
  console.log('Você comprou ingredientes para estrogonofe, eles foram adicionados ao seu inventário');
  status.dinheiro -= 20;
  inventario[1].qtd++;
  console.log();


}

else if (rp == 3 && status.dinheiro >= 30) {

  console.log();
  console.log('Você comprou ingredientes para peixe frito, eles foram adicionados ao seu inventário');
  status.dinheiro -= 30;
  inventario[2].qtd++;
  console.log();


}

else if (rp == 4 && status.dinheiro >= 15) {

  console.log();
  console.log('Você comprou um analgésico, ele foi adicionado ao seu inventário');
  status.dinheiro -= 15;
  inventario[3].qtd++;
  console.log();


}

else if (rp == 5 && status.dinheiro >= 25) {

  console.log();
  console.log('Você comprou um antídoto, ele foi adicionado ao seu inventário');
  status.dinheiro -= 25;
  inventario[4].qtd++;
  console.log();


} 

else if (rp == 6 && status.dinheiro >= 40) {

  console.log();
  console.log('Você comprou uma vacina, ela foi adicionada ao seu inventário');
  status.dinheiro -= 40;
  inventario[5].qtd++;
  console.log();


} 


else if (rp < 4) {console.log(`Você não tem dinheiro para comprar ${inventario[rp - 1].alimento}`)}

else {console.log(`Você não tem dinheiro para comprar ${inventario[rp - 1].remedio}`)};

};


console.log(
  `29 de Outubro de 1942... O relógio marca ${tempo.hora}:00 da manhã

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

– Apesar de ser respeitada e conhecida por causa do meu pai, me sinto sozinha nesse vasto hospital de guerra. Minha mãe morreu faz 7 anos e meu pai vive nas frentes de batalha. Minhas rotina é ver corpos e mais corpos por todos os lados, dor e sofrimento de todos que fogem da invasão nazista. Quanto a mim? não resta escolha a não ser tentar sobreviver a tudo isso...

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
`
);

console.log();

prompt("Pressione enter para iniciar a jornada");

console.log();

jogo : for (let i = 0; i < 8; i++) {
  
  console.log(`Dia ${tempo.dia} de ${tempo.mes} de ${tempo.ano}.....`);

  dia : while (tempo.hora <= 21) {
    console.log();

    console.log(`São ${tempo.hora} horas`);

    console.log();

    console.log(` 

Escolha sua ação:

1 - Comer
2 - Cuidar de soldados feridos
3 - Visitar a loja
4 - Ver status
5 - Ver Inventário

`);

    let escolha = +prompt("Digite o número da sua ação: ");

    if (escolha == 1) {
      comer();
    } else if (escolha == 2) {
      trabalhar();
    } else if (escolha == 3) {
      loja();
    } else if (escolha == 4) {
      status.verStatus();
    } else if (escolha == 5) {
      verInventário();
    } else if (escolha == 0) {
      break jogo;
    }

  };


  console.log();

  if (tempo.hora >= 21) {
      tempo.hora = 9;

     tempo.dia++;

      console.log();

      console.log('Vamos para um novo dia');

      console.log();

};


  if (tempo.dia > 30) {
     tempo.dia = 1;
     let x = 10;
     tempo.mes = meses[x+1];

     console.log(
    `Hoje começa o mês de ${meses[x+1]}`)
    console.log();
};
  };



