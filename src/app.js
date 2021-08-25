import './app.css'

/*
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
} */

/**
 * CANVAS CODE
 */
const canvas = document.getElementById('animated-canvas')
const context = canvas.getContext('2d')
let circleX = 60

function canvasAnimation() {
    circleX++
    drawCircle(circleX, canvas.height/2, 25)
    canvasInterval = requestAnimationFrame(canvasAnimation)
}

function drawCircle(x, y, rad) {
    clearCanvas()
    context.fillStyle = 'crimson'
    context.beginPath()
    context.arc(x, y, rad, 0, 2 * Math.PI)
    context.fill()
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height)
}


let canvasInterval = requestAnimationFrame(canvasAnimation)