const startButton = document.getElementById("startButton");
const mastilTexture = document.querySelector('.texture.animated');
const pauseButton = document.getElementById("pauseButton");
let intervalo = null; // Inicialmente, no hay intervalo
let juegoPausado = false;
let isGameStarted = false;


startButton.addEventListener("click", () => {
    mastilTexture.style.animationPlayState = 'running';
    isGameStarted = true;
    startGame();
});

function updateGame() {
    if (isGameStarted) {
        collider();
    }
    
}

function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const play_flare_animation = function(id){
    let flare = document.getElementById(id);
    flare.classList.remove('hidden')
    flare.classList.add('animated')
    setTimeout(() => {
        flare.classList.remove('animated')
        flare.classList.add('hidden')
    }, 200);
}

function startGame() {

    intervalo = setInterval(() => { 
        let nota = document.getElementsByClassName('nota')
        let number = getRandomNumb(0, 5);
    
        console.log(number, nota);
        nota[number].classList.remove('hidden')
        nota[number].classList.toggle('animated')
    }, 2000);

    const key = {
        'map': keys
    }
    const buttom_green = document.getElementsByClassName('hit-button-green')[0]
    const buttom_red = document.getElementsByClassName('hit-button-red')[0]
    const buttom_yellow = document.getElementsByClassName('hit-button-yellow')[0]
    const buttom_blue = document.getElementsByClassName('hit-button-blue')[0]
    const buttom_orange = document.getElementsByClassName('hit-button-orange')[0]

    
    document.body.addEventListener('keydown', function (e) {
        playSound(e.key); 
        switch (e.key) {
            case key.map[0]:
                green_note = document.getElementsByClassName('n-green')[0]
                collider(green_note, buttom_green, 'fgreen')
                buttom_green.classList.add('hit');
                break;
            case key.map[1]:
                red_note = document.getElementsByClassName('n-red')[0]
                collider(red_note, buttom_red, 'fred')
                buttom_red.classList.add('hit');
                break;
            case key.map[2]:
                yellow_note = document.getElementsByClassName('n-yellow')[0]
                collider(yellow_note, buttom_yellow, 'fyellow')
                buttom_yellow.classList.add('hit');
                break;
            case key.map[3]:
                blue_note = document.getElementsByClassName('n-blue')[0]
                collider(blue_note, buttom_blue, 'fblue')
                buttom_blue.classList.add('hit');
                break;
            case key.map[4]:
                orange_note = document.getElementsByClassName('n-orange')[0]
                collider(orange_note, buttom_orange, 'forange')
                buttom_orange.classList.add('hit');
                break;
    
        }
    })
    
    document.body.addEventListener('keyup', function (e) {
        switch (e.key) {
            case key.map[0]:
                buttom_green.classList.remove('hit');
                buttom_green.classList.remove('hitted')
                break;
            case key.map[1]:
                buttom_red.classList.remove('hit');
                buttom_red.classList.remove('hitted')
                break;
            case key.map[2]:
                buttom_yellow.classList.remove('hit');
                buttom_yellow.classList.remove('hitted')
                break;
            case key.map[3]:
                buttom_blue.classList.remove('hit');
                buttom_blue.classList.remove('hitted')
                break;
            case key.map[4]:
                buttom_orange.classList.remove('hit');
                buttom_orange.classList.remove('hitted')
                break;
    
        }

        
})
}


pauseButton.addEventListener('click', () => {
    const pauseBox = document.getElementById('pauseBox');
    const continueButton = document.getElementById('continueButton');

    if (!juegoPausado) {
        clearInterval(intervalo); // Limpia el intervalo de generación de notas
        mastilTexture.style.animationPlayState = 'paused'; // Pausa la animación del mástil
        
        // Detiene las animaciones de las notas existentes
        const notas = document.getElementsByClassName('nota');
        for (let nota of notas) {
            nota.classList.remove('animated');
        }

        juegoPausado = true;
        pauseButton.innerText = 'Reanudar';

        // Muestra la caja de pausa
        pauseBox.style.display = 'block';
        pauseBox.style.width = '10%'; // Aumenta el ancho de la caja de pausa
        pauseBox.style.height = '30%'; // Aumenta la altura de la caja de pausa
    } else {
        mastilTexture.style.animationPlayState = 'running'; // Reanuda la animación del mástil
        
        // Reanuda la generación de notas
        intervalo = setInterval(() => {
            let nota = document.getElementsByClassName('nota');
            let number = getRandomNumb(0, 5);
        
            console.log(number, nota);
            nota[number].classList.remove('hidden');
            nota[number].classList.add('animated');
        }, 2000);
        
        juegoPausado = false;
        pauseButton.innerText = 'Pausa';

        // Oculta la caja de pausa
        pauseBox.style.display = 'none';
    }
});

// Agrega un evento de clic al botón de continuar
continueButton.addEventListener('click', () => {
    pauseButton.click(); // Simula un clic en el botón de pausa
});


const startBtn = document.getElementById("start-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const backBtn = document.getElementById("back-btn");

const welcomeScreen = document.querySelector(".welcome-screen");
const gameScreen = document.querySelector(".game-screen");
const instructionsScreen = document.querySelector(".instructions-screen");
const otherInterface = document.querySelector(".other-interface");

startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  gameScreen.style.display = "block"; // Muestra la pantalla de juego
});

instructionsBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  instructionsScreen.style.display = "block"; // Muestra las instrucciones
});

backBtn.addEventListener("click", () => {
  instructionsScreen.style.display = "none";
  welcomeScreen.style.display = "block"; // Muestra la pantalla de bienvenida nuevamente
});

