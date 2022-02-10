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

let iventario = {

  listaComidas: ['sopa','estrogonofre','peixe frito'],

  quantidadeComidas: [1,1,1]

};


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

  modificarDinheiro: function (a) {
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

    ${iventario.quantidadeComidas[0]}  ${iventario.listaComidas[0]}
    ${iventario.quantidadeComidas[1]}  ${iventario.listaComidas[1]}
    ${iventario.quantidadeComidas[2]}  ${iventario.listaComidas[2]}
    
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

  if (cm == 1 && iventario.quantidadeComidas[0] > 0) {
    console.log(
      "Você comeu uma sopa, ela estava um pouco fria mas não é de se reclamar."
    );
    iventario.quantidadeComidas[0] -= 1;
    status.modificarFome(2,10);
    tempo.passarTempo(1);

  } else if (cm == 2 && iventario.quantidadeComidas[1] > 0) {
    console.log(
      "Você fez um belo estrogonofre de frango."
    ),
    iventario.quantidadeComidas[1] -= 1;
    status.modificarFome(2,20);
    tempo.passarTempo(2);

  } else if (cm == 3 && iventario.quantidadeComidas[2] > 0) {
    console.log(
      "Você comeu um magnífico peixe frito."
    ),
      iventario.quantidadeComidas[2] -= 1;
      status.modificarFome(2,30),
      tempo.passarTempo(3);
  }  else {console.log(`Você não tem mais ${iventario.listaComidas[cm - 1]}`)}

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
      } else if (numAle >= 3 && numAle < 5) {
        console.log(
          "Foi um bom atendimento seu, apesar das tensões o paciente está se recuperando e logo estará de volta em sua casa"
        );
        tempo.passarTempo(2);
        status.aumentarNivel(5);
        status.modificarFome(1,5);
      } else {
        console.log(
          "Você fez um trabalho excepicional, nem parece que estamos aflitos com a frieza e profissionalidade que você trabalhou "
        );
        tempo.passarTempo(2);
        status.aumentarNivel(10);
        status.modificarFome(1,3);
      }

      console.log();

      prompt("Pressione enter para encerrar seu atendimento");

      console.log();

      if (numAtendimentos == 2) {
        console.log("Você irá atender um novo paciente");
      }
      console.log();
    }
  }
}

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
3 - Ver status
`);

    let escolha = +prompt("Digite o número da sua ação: ");

    if (escolha == 1) {
      comer();
    } else if (escolha == 2) {
      trabalhar();
    } else if (escolha == 3) {
      status.verStatus();
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



