const prompt = require("prompt-sync")();
console.clear();

let recomeçarJogo;

//TEMPO
do {
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

    mes: meses[12],

    ano: 1942,

    hora: 9,

    passarTempo: function (a) {
      this.hora = this.hora + a;
    },
  };

  // INVENTÁRIO

  let inventario = [
    { alimento: "Sopa", qtd: 2 },
    { alimento: "Estrogonofre", qtd: 2 },
    { alimento: "Peixe Frito", qtd: 1 },
    { remedio: "Analgésico", qtd: 1 },
    { remedio: "Antídoto", qtd: 1 },
    { remedio: "Vacina", qtd: 1 },
  ];

  function verInventário() {
    console.log(`
  
  Aqui está seu inventário:
  
    SOPA: ${inventario[0].qtd}
    ESTROGONOFE: ${inventario[1].qtd}
    PEIXE FRITO: ${inventario[2].qtd}
    ANALGÉSICO: ${inventario[3].qtd}
    ANTÍDOTO: ${inventario[4].qtd}
    VACINA: ${inventario[5].qtd}  
  
  `);
  };

  //STATUS

  let status = {
    saude: 70,
    moral: 60,
    nivel: 1,
    exp: 0,
    fome: 50,
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
      };

      if (this.saude > 100) {
        this.saude = 100;
        console.log("Sua saúde está máxima");
        console.log();
      };
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
      };

      if (this.moral > 100) {
        this.moral = 100;
        console.log("Sua moral está máxima");
        console.log();
      };
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

        if (this.fome < 0) {
          this.fome = 0;
          console.log("Você está sem fome");
          console.log();
        };
      };
    },

    aumentarNivel: function (a) {
      this.exp = this.exp + a;

      console.log();

      console.log(`Sua experiência aumentou em ${a}`);

      if (this.exp >= 15) {
        this.exp = this.exp - 15;
        this.nivel++;
        console.log();
        console.log("Seu nível aumentou");
        console.log();
      };

      console.log();
    },

    modificarDinheiro: function (b, a) {
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
      };
    },

    verStatus: function () {
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
 
 `);
    },
  };

  //FUNÇÕES SECUNDÁRIAS

  function receberItem(a) {
    let num = Math.floor(Math.random() * a);
    let numitem = Math.floor(Math.random() * inventario.length);

    if (num < 2) {
      inventario[numitem].qtd++;
      if (numitem > 2) {
        console.log(
          `Você recebeu um ${inventario[numitem].remedio} pelo seu bom atendimento`
        );
      } else {
        {
          console.log(
            `Você recebeu um ${inventario[numitem].alimento} pelo seu bom atendimento`
          );
        };
      };
    };
  };

  function serRoubada() {
    let num = Math.floor(Math.random() * 10 + status.moral / 50);

    if (num < 5) {
      let x = 0;
      if (status.nivel < 4) {
        x = 30;
      } else if (status.nivel < 8) {
        x = 20;
      } else {
        x = 10;
      };

      console.log();
      console.log(
        `Ficar aqui é muito perigoso, infelizmente você foi roubada. Você perdeu ${x} rublos`
      );
      status.modificarDinheiro(2, x);
      console.log();
    }
  }

  function serFerida() {
    
    let num = Math.floor(Math.random() * 10);
    

    if (num == 5) {
      let x = 0;
      if (status.nivel < 4) {
        x = 40;
      } else if (status.nivel < 8) {
        x = 30;
      } else {
        x = 20;
      };

      console.log();
      console.log(
        `Ficar aqui é muito perigoso, Você atingida por uma bomba aérea.`
      );
      status.modificarSaude(2, x);
    };
  };

  function verificarNumero(rp) {
    while (rp != 1 && rp != 2 && rp != 3 && rp != 4) {
      console.log("Número inválido, Digite um número inteiro de 1 a 4");

      console.log();

      rp = +prompt("Digite sua resposta: ");

      console.log();
    };
  };

  //FUNÇÕES PRINCIPAIS

  function comer() {
   
    console.log();

    console.log(
      `----Você chegou ao refeitório, escolha uma refeição para preparar:----
    
    1 - SOPA          tempo de preparo = 1 horas
    2 - ESTROGONOFE   tempo de preparo = 2 horas
    3 - PEIXE FRITO   tempo de preparo = 3 horas

    Digite 4 para voltar
    
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

    verificarNumero(cm);

    if (cm == 1 && inventario[0].qtd > 0) {
      console.log(
        "Você comeu uma sopa, ela estava um pouco fria mas não é de se reclamar."
      );
      inventario[0].qtd -= 1;
      status.modificarFome(2, 10);
      status.modificarSaude(1, 3);
      tempo.passarTempo(1);
    } else if (cm == 2 && inventario[1].qtd > 0) {
      console.log("Você fez um belo estrogonofre de frango."),
        (inventario[1].qtd -= 1);
      status.modificarFome(2, 20);
      status.modificarSaude(1, 4);
      tempo.passarTempo(2);
    } else if (cm == 3 && inventario[2].qtd > 0) {
      console.log("Você comeu um magnífico peixe frito."),
        (inventario[2].qtd -= 1);
      status.modificarFome(2, 30);
      tempo.passarTempo(3);
      status.modificarSaude(1, 5);
    } else if (cm == 4) {
      console.log("Você voltou a página principal");
    } else {
      console.log(`Você não tem mais ${inventario[cm - 1].alimento}`);
    };

    console.log();
    console.log(`Sua fome agora é: ${status.fome}`);
    console.log();
  };

  function trabalhar() {
    console.log();

    console.log(
      "----Você chega na sala de enfermaria, vários soldados feridos esperam seu atendimento----"
    );

    console.log();

    console.log("Quantos atendimentos você deseja realizar?");

    console.log();

    let numAtendimentos = +prompt("Digite sua resposta: ");

    atendimentos: for (let i = 0; i < numAtendimentos; i++) {
      console.log();

      let eficiencia = Math.floor(Math.random() * 2);

      console.log();
      console.log("----Atendimento----");
      console.log();

      console.log(`Estamos em tempo de guerra, não temos tempo para fazer exames ou diagnósticos, escolha um remédio para tratar o paciente: 
        
          1 - ANALGÉSICO  QUANTIDADE: ${inventario[3].qtd}
          2 - ANTÍDOTO    QUANTIDADE: ${inventario[4].qtd}
          3 - VACINA      QUANTIDADE: ${inventario[5].qtd}
          

          Digite 4 para voltar
      
        `);

      console.log();

      let rp = +prompt("Digite sua resposta: ");
      let remedio;

      console.log();

      verificarNumero(rp);

      if (rp != 4) {
        remedio = inventario[rp + 2].remedio;
        console.log();
      };

      if (rp == 1 || rp == 2 || rp == 3) {
        while (inventario[rp + 2].qtd < 1) {
          console.log(`Você não tem mais ${inventario[rp + 2].remedio}`);

          console.log();

          rp = +prompt("Escolha outro remédio: ");

          console.log();

          remedio = inventario[rp + 2].remedio;
        };
      };

      if (rp == 1 && inventario[3].qtd > 0) {
        inventario[3].qtd--;
        console.log();
        console.log("Você usou um Analgésico");
        console.log();
      } else if (rp == 2 && inventario[4].qtd > 0) {
        inventario[4].qtd--;
        console.log();
        console.log("Você usou um Antídoto");
        console.log();
      } else if (rp == 3 && inventario[5].qtd > 0) {
        inventario[5].qtd--;
        console.log();
        console.log("Você usou uma Vacina");
        console.log();
      } else if (rp == 4) {
        console.log();
        console.log("Você voltou para o menu inicial");
        console.log();
      };

      if (rp == 1 || rp == 2 || rp == 3) {
        if (status.saude / 50 + eficiencia <= 1) {
          console.log(
            `Você usou ${remedio} e infelizmente não foi efetivo, o paciente reagiu mal a medicação e se dirigiu para outro posto de atendimento`
          );
          console.log();
          serFerida();
          tempo.passarTempo(2);
          status.aumentarNivel(2);
          status.modificarFome(1, 10);
          status.modificarDinheiro(1, 5);
          status.modificarMoral(2, 15);
        } else if (status.saude / 50 + eficiencia <= 2) {
          console.log(
            `Você usou ${remedio} e infelizmente não foi muito efetivo, porém o paciente está se recuperando aos poucos e logo ficará melhor`
          );
          console.log();
          serFerida();
          tempo.passarTempo(2);
          status.aumentarNivel(5);
          status.modificarFome(1, 5);
          status.modificarDinheiro(1, 10);
          status.modificarMoral(1, 5);
        } else if (status.saude / 50 + eficiencia <= 3) {
          console.log(
            `Você usou ${remedio} e foi muito efetivo, o paciente em poucas horas reagiu muito bem e não irá demorar até que sua recuperação seja total`
          );
          console.log();
          serFerida();
          tempo.passarTempo(2);
          status.aumentarNivel(10);
          status.modificarFome(1, 3);
          status.modificarDinheiro(1, 15);
          status.modificarMoral(1, 10);

          if (status.nivel > 2) {
            receberItem(4);
          } else if (status.nivel > 5) {
            receberItem(6);
          } else if (status.nivel > 10) {
            receberItem(10);
          };

          console.log();

          prompt("Pressione enter para encerrar seu atendimento");

          console.log();

          if (i < numAtendimentos) {
            console.log("Você irá atender um novo paciente");
          }
          console.log();
        };
      } else {
        break atendimentos;
      };
    };
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
  `);

    let rp = +prompt("Digite o número de sua escolha: ");

    if (rp == 1 && status.dinheiro >= 10) {
      console.log();
      console.log(
        "Você comprou ingredientes para sopa, eles foram adicionados ao seu inventário"
      );
      status.dinheiro -= 10;
      inventario[0].qtd++;
      console.log();
    } else if (rp == 2 && status.dinheiro >= 20) {
      console.log();
      console.log(
        "Você comprou ingredientes para estrogonofe, eles foram adicionados ao seu inventário"
      );
      status.dinheiro -= 20;
      inventario[1].qtd++;
      console.log();
    } else if (rp == 3 && status.dinheiro >= 30) {
      console.log();
      console.log(
        "Você comprou ingredientes para peixe frito, eles foram adicionados ao seu inventário"
      );
      status.dinheiro -= 30;
      inventario[2].qtd++;
      console.log();
    } else if (rp == 4 && status.dinheiro >= 15) {
      console.log();
      console.log(
        "Você comprou um analgésico, ele foi adicionado ao seu inventário"
      );
      status.dinheiro -= 15;
      inventario[3].qtd++;
      console.log();
    } else if (rp == 5 && status.dinheiro >= 25) {
      console.log();
      console.log(
        "Você comprou um antídoto, ele foi adicionado ao seu inventário"
      );
      status.dinheiro -= 25;
      inventario[4].qtd++;
      console.log();
    } else if (rp == 6 && status.dinheiro >= 40) {
      console.log();
      console.log(
        "Você comprou uma vacina, ela foi adicionada ao seu inventário"
      );
      status.dinheiro -= 40;
      inventario[5].qtd++;
      console.log();
    } else if (rp < 4) {
      console.log(
        `Você não tem dinheiro para comprar ${inventario[rp - 1].alimento}`
      );
    } else {
      console.log(
        `Você não tem dinheiro para comprar ${inventario[rp - 1].remedio}`
      );
    };
  };

  function visitarosPrisioneiros() {
    console.log();
    console.log("----Você chegou na sala dos prisioneiros de guerra----");
    console.log();

    let prisioneiros = [
      "Adolf Abel",
      "Josef Abel",
      "Ulrich Abel",
      "Arnulf Abele",
      "Erich Abraham",
      "Erich Max Robert Abraham",
      "Rudolf Abrahamczik",
      "Herbert Abratis",
    ];

    let numprisioneiros = Math.floor(Math.random() * prisioneiros.length);
    let prisioneiro1 = prisioneiros[numprisioneiros];
    prisioneiros.splice(numprisioneiros, 1);

    let numprisioneiros2 = Math.floor(Math.random() * prisioneiros.length);
    let prisioneiro2 = prisioneiros[numprisioneiros2];
    prisioneiros.splice(numprisioneiros2, 1);

    let numprisioneiros3 = Math.floor(Math.random() * prisioneiros.length);
    let prisioneiro3 = prisioneiros[numprisioneiros3];
    prisioneiros.splice(numprisioneiros3, 1);

    console.log(`Escolha sua ação:

    1 - ATENDER OS PRISIONEIROS (PERIGO!!)
    2 - DAR SUA COMIDA PARA OS PRISIONEIROS (PERIGO!!)
    
  
  `);
    let rp = +prompt("Digite o número de sua ação: ");

    if (rp == 1) {
      if (rp == 1) {
        console.log();
        console.log(`Você pode atender um paciente, você não usará remédios pois não ha remédios para prisioneiros de guerra, apenas tente ajudar a pessoa correta para não acabar morrendo... escolha um para atender:
    
      1 - ${prisioneiro1}
      2 - ${prisioneiro2}
      3 - ${prisioneiro3}
     

    `);

        let rp1 = +prompt("Digite sua resposta: ");

        let sorte = Math.floor(Math.random() * 2);

        if (rp1 == 1 || rp1 == 2 || rp1 == 3) {
          console.log();

          console.log("----CUIDADO COM OS PRISIONEIROS----");

          console.log();

          prompt("Pressione enter para atender...");

          console.log();

          if (status.moral / 50 + sorte <= 1) {
            console.log(
              `No momento do atendimento você se descuida e o prisioneiro foge...  Ainda Desferiu um duro golpe contra você que abalou sua moral e te machucou, não se deve confiar em todos prisioneiros...`
            );
            console.log();
            tempo.passarTempo(2);
            status.aumentarNivel(1);
            status.modificarFome(1, 15);
            status.modificarDinheiro(1, 5);
            status.modificarMoral(2, 10);
            serRoubada();
          } else if (status.moral / 50 + sorte <= 2) {
            console.log(
              `Você atendeu o prisioneiro, e apesar de não ter sido muito efetivo, você saiu no lucro por não ter tido agredida confiando tanto em..... Nazistas.....`
            );
            console.log();
            tempo.passarTempo(2);
            status.aumentarNivel(5);
            status.modificarFome(1, 8);
            status.modificarDinheiro(1, 10);
            status.modificarMoral(1, 5);
            serRoubada();
          } else if (status.moral / 50 + sorte <= 3) {
            console.log(
              `Seu atendimento foi um sucesso, o prisioneiro parecia mais cachorro quieto do que um soldado de guerra, você mostrou qual o verdadeiro valor do povo Soviético`
            );
            console.log();
            tempo.passarTempo(2);
            status.aumentarNivel(15);
            status.modificarFome(1, 3);
            status.modificarDinheiro(1, 15);
            status.modificarMoral(1, 10);
          };
        };
      };
    } else if (rp == 2) {
      let num = Math.floor(Math.random() * 3);

      console.log(`Você pode dar sua comida para um prisioneiro, podendo receber algo em troca ou não, as vezes precisamos de sorte, minha cara amiga... ATENÇÃO, TENTAR FAZER AMIZADE COM NÍVEL OU MORAL BAIXA É EXTREMAMENTE PERIGOSO.... Escolha para quem você dará comida:

      1 - ${prisioneiro1}
      2 - ${prisioneiro2}
      3 - ${prisioneiro3}
  
  `) + prompt("Digite sua resposta: ");

      console.log(`Escolha qual alimento você irá dar:
  
    1- ${inventario[0].alimento}  ${inventario[0].qtd}
    2- ${inventario[1].alimento}  ${inventario[1].qtd}
    3- ${inventario[2].alimento}  ${inventario[2].qtd}
    4- Voltar ao menu principal`);
      console.log();
      let rp = +prompt("Digite sua resposta: ");

      verificarNumero(rp);

      console.log();

      if (rp == 1 && inventario[0].qtd > 0) {
        console.log("Você deu uma Sopa para os prisioneiros");
        inventario[0].qtd -= 1;
      } else if (rp == 2 && inventario[1].qtd > 0) {
        console.log("Você deu um estrogonofe para os prisioneiros"),
          (inventario[1].qtd -= 1);
      } else if (rp == 3 && inventario[2].qtd > 0) {
        console.log("Você deu um peixe frito para os prisioneiros"),
          (inventario[2].qtd -= 1);
      } else if (rp == 4) {
        console.log("Você voltou a página principal");
      };

      if (rp != 4) {
        if (num + status.nivel / 2 < 3) {
          serRoubada();
          console.log();
          console.log(
            "Você não recebeu nada em troca, sua tentativa foi um fracasso e você ainda acabou atingida por uma barra de ferro arremessada..."
          );
          status.modificarSaude(2, 20);
          status.modificarMoral(2, 15);
          tempo.passarTempo(2);
          console.log();
        } else if (num + status.nivel / 2 < 5) {
          console.log();
          console.log(
            "Sua tentativa foi boa, mas você não sabe se terá algo em troca. Pelo menos seus status aumentaram!!"
          );
          status.modificarSaude(1, 5);
          status.modificarMoral(1, 5);
          tempo.passarTempo(2);
          receberItem(6);
        } else if (num + status.nivel / 2 < 7) {
          console.log();
          console.log(
            "Sua tentativa foi um sucesso, você aumentou seus status e recebeu um item do prisioneiro!!!"
          );
          status.modificarSaude(1, 10);
          status.modificarMoral(1, 10);
          tempo.passarTempo(2);
          receberItem(1);
        };
      };
    };
  };

  console.log(
    `29 de Dezembro de 1942... O relógio marca ${tempo.hora}:00 da manhã

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

Agora está na hora de dar tudo de mim mesma na luta pela sobrevivência...

Esses são seus objetivos: 

-- Sobreviver por 15 dias a Guerra e fome
-- Cuidar dos pacientes 
-- Tentar cuidar dos prisioneiros
-- Manter sua Moral alta


`
  );

  console.log();

  prompt("Pressione enter para iniciar a jornada");

  console.log();

  jogo: for (let i = 0; i < 3; i++) {

    console.log(`Dia ${tempo.dia} de ${tempo.mes} de ${tempo.ano}.....`);

    dia: while (tempo.hora <= 21) {
      console.log();

      if (status.moral <= 0 || status.fome >= 100 || status.saude <= 0) {
        break jogo;
      };

      console.log(`São ${tempo.hora} horas`);

      console.log();

      console.log(` 

Escolha sua ação:

1 - Comer
2 - Cuidar de soldados feridos
3 - Visitar Prisioneiros
4 - Visitar a loja
5 - Ver Inventário
6 - Ver status
`);

      let escolha = +prompt("Digite o número da sua ação: ");

      if (escolha == 1) {
        comer();
      } else if (escolha == 2) {
        trabalhar();
      } else if (escolha == 3) {
        visitarosPrisioneiros();
      } else if (escolha == 4) {
        loja();
      } else if (escolha == 5) {
        verInventário();
      } else if (escolha == 6) {
        status.verStatus();
      };

      if (status.saude < 1 || status.moral < 1 || status.fome > +100) {
        console.log(status.saude, status.moral, status.fome);

        break jogo;
      };
    };

    console.log();

    if (tempo.hora >= 21) {
      tempo.hora = 9;

      tempo.dia++;

      console.log();

      console.log("Vamos para um novo dia");

      console.log();
    };

    if (tempo.dia > 30) {
      tempo.dia = 1;
      let x = 10;
      tempo.mes = meses[x + 1];

      console.log(`Hoje começa o mês de ${meses[x + 1]}`);
      console.log();
    };
  };

  if (status.saude <= 0) {
    console.log();
    console.log(`Dia ${tempo.dia} de ${tempo.mes} de ${tempo.ano}..... Após um período tentando sobreviver a todo o caos, você morreu após ser atingida por uma bala... Querida Nina Litvinova Seu legado estará sempre guardado nos destroços de Stalinngrado. Vencemos a guerra, e seu nome figura entre os heróis da nossa nação, Apesar de toda a dor.... seu pai está orgulhoso da filha que teve....
    
    Você perdeu mas não desista, tente novamente. Glória a União Soviética!!
    `);
  } else if (status.fome >= 100) {
    console.log();
    console.log(`Dia ${tempo.dia} de ${tempo.mes + 1} de ${
      tempo.ano
    }..... Após um período tentando sobreviver a todo o caos, você morreu de fome... Querida Nina Litvinova Seu legado estará sempre guardado nos destroços de Stalinngrado. Vencemos a guerra, e seu nome figura entre os heróis da nossa nação, Apesar de toda a dor.... seu pai está orgulhoso da filha que teve....
  
  Você perdeu mas não desista, tente novamente. Glória a União Soviética!!
  `);
  } else if (status.fome >= 100) {
    console.log();
    console.log(`Dia ${tempo.dia} de ${tempo.mes + 1} de ${
      tempo.ano
    }..... Após um período tentando sobreviver a todo o caos, você perdeu muita moral e acabou sendo presa ao tentar fugir. Seu psicológico está totalmente abalado e, apesar de vencer a guerra, seu legado ficou totalmente esquecido. Agora São só apenas memórias vagando pelos seus sonhos....

    Você perdeu mas não desista, tente novamente. Glória a União Soviética!!`);
  } else {
    console.log();
    console.log(`Dia ${tempo.dia} de ${tempo.mes} de ${tempo.ano}..... Glória a União Soviética!!! Está tudo acabado, as tropas Soviéticas avançam em direção ao território Alemão e estamos livres de qualquer ameaça... Seu legado está marcado pelas ruas destroçadas de Stalingrado, seu nome será lembrado por séculos como a enfermeira Soviética de Stalin!!
      
      Você vencer o jogo!! Parabéns!!`);
  };
  console.log();

  prompt("Pressione enter para encerrar ");

  console.log();

  recomeçarJogo = prompt("Deseja Jogar novamente? ").toLocaleLowerCase();

  console.log();

} while (recomeçarJogo == "sim" || recomeçarJogo == "s");
