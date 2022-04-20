let imagens = [

    './assents/img/22746-klopp-triste.jpg',
        'assents/img/kloppfeliz.png',
        'assents/img/1024.jpg'
]

let textos = [

    'Goleiro frangou',
    'Poolzão Ganhou mais uma',
    'Jogador machucado de novo :('
]

let img = document.querySelector('#foto')

let h2 = document.querySelector('#texto')

let contador = 0

function mudarHumor() {


    console.log('Executou')

    if (contador == 0) {

        h2.innerHTML = textos[0];
        img.src = imagens[0];
        img.alt = "imagem do Klopp triste";
        contador++;

    }   else if (contador == 1) {

        h2.innerHTML = textos[1];
        img.src = imagens[1];
        img.alt = "imagem do Klopp feliz";
        contador++;
    }  
        else if (contador == 2) {
        
        h2.innerHTML = textos[2];
        img.src = imagens[2];
        contador= 0;
        img.alt = "imagem do Klopp indiferente"
    };
   
};


let hino = document.querySelector('#hino')


function mudarMusica() { 

    if(hino.paused) {

        hino.play();

    }

    

};

