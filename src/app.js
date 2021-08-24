import './app.css'

let ol = 0;
let circleInterval;
let isPlaying = false;

const circle = document.getElementById("circle")
let scale = 1

circle.style.backgroundColor = 'dimgrey'

document.getElementById('circle')
   .addEventListener('click', mouseClicked)

function circleAnimation(time) {
    ol++
    scale++
    circle.style.left = ol + 'px'
    circle.style.width = scale + 'px'
    circle.style.height = scale + 'px'
    circle.style.borderRadius = scale * 10 + 'px'
    circleInterval = requestAnimationFrame(circleAnimation)
}

function mouseClicked() {
    if(isPlaying) {
        isPlaying = false
        circle.style.backgroundColor = 'dimgrey'
        cancelAnimationFrame(circleInterval)
    } else {
        isPlaying = true
        circle.style.backgroundColor = 'crimson'
        circleInterval = requestAnimationFrame(circleAnimation)
    }
}


