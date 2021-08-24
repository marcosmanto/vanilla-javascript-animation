import './app.css'

let ol = 0;
let circleInterval;
let isPlaying = false;

document.getElementById("circle").style.backgroundColor = 'dimgrey'

document.getElementById('circle')
    .addEventListener('click', mouseClicked)

function circleAnimation(time) {
    ol++
    document.getElementById("circle").style.left = ol + "px"
    circleInterval = requestAnimationFrame(circleAnimation)
}

function mouseClicked() {
    if(isPlaying) {
        isPlaying = false
        document.getElementById("circle").style.backgroundColor = 'dimgrey'
        cancelAnimationFrame(circleInterval)
    } else {
        isPlaying = true
        document.getElementById("circle").style.backgroundColor = 'crimson'
        circleInterval = requestAnimationFrame(circleAnimation)
    }
}


