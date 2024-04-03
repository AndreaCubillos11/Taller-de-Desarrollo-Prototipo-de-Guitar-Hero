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
