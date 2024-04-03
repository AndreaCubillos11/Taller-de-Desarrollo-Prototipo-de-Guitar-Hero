const play_flare_animation = function(id){
    let flare = document.getElementById(id);
    flare.classList.remove('hidden')
    flare.classList.add('animated')
    setTimeout(() => {
        flare.classList.remove('animated')
        flare.classList.add('hidden')
    }, 200);
}


setInterval(() => {
    let nota = document.getElementsByClassName('nota')
    let number = getRandomNumb(0, 5);

    console.log(number, nota);
    nota[number].classList.remove('hidden')
    nota[number].classList.toggle('animated')
}, 3000);


function getRandomNumb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

