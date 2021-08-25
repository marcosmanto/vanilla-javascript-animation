import "./app.css"

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
// const canvas = document.getElementById("animated-canvas")
// const context = canvas.getContext("2d")
// let circleX = 60

/**
 * Interpolation with 0..1 range
 * http://sol.gfxile.net/interpolation/
 *
 */

/*********** Easing filters  ********************/
// const SMOOTHSTEP = (x) => (x) * (x) * (3 - 2 * (x))
// const SMOOTHERSTEP = (x) => ((x) * (x) * (x) * ((x) * ((x) * 6 - 15) + 10))
// const SIMPLEPOWER = (x) => x * x // ease-in
// const SIMPLEPOWERREVERSE = (x) => 1 - (1 - x) * (1 - x) // ease-out

/*********** / Easing filters  ********************/

/*
const steps = 100
const origin = 10
const destination = 590

let i = 0

function canvasAnimation() {
  i++
  i = i % steps

  drawCircle(
    generalInterpolation(origin, destination, i, steps, SIMPLEPOWERREVERSE)
    , canvas.height / 2, 25
  )

  // stop animation if i is not repeating, comment steps modulus  applied
  if (i == steps) {
    cancelAnimationFrame(canvasInterval)
    return
  }

  canvasInterval = requestAnimationFrame(canvasAnimation)
}

function generalInterpolation(origin, destination, currTime, steps, easing) {

  let velocity = currTime / steps

  // velocity is the changing rate
  if (easing !== undefined) {
    velocity = easing(velocity)
  }

  return destination * velocity + origin * (1 - velocity)
}

function drawCircle(x, y, rad) {
  clearCanvas()
  context.fillStyle = "crimson"
  context.beginPath()
  context.arc(x, y, rad, 0, 2 * Math.PI)
  context.fill()
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.height)
}

let canvasInterval = requestAnimationFrame(canvasAnimation) */


/**
 *  WEB ANIMATION API
 *
 */

/*
const btnPlay = document.getElementById('play')
const btnPause = document.getElementById('pause')
const btnSpeedUp = document.getElementById('speedup')
const btnSlowDown = document.getElementById('slowdown')

const rotatingSquare = document.getElementById('web-animation')
  .animate(
    [
      {backgroundColor: '#000', opacity: 1, transform: 'rotate(0deg) translate3D(0, 0, 0)'},
      {backgroundColor: '#440000', opacity: 0.3},
      {backgroundColor: '#000', opacity: 1, transform: 'rotate(360deg) translate3D(0, 0, 0)'},

    ],
    {
      duration: 500,
      iterations: Infinity,
      easing: 'ease-in-out'
    }
  )


btnPlay.addEventListener('click', () => rotatingSquare.play())
btnPause.addEventListener('click', () => rotatingSquare.pause())
btnSpeedUp.addEventListener('click', () => rotatingSquare.playbackRate+=0.2)
btnSlowDown.addEventListener('click', () => rotatingSquare.playbackRate-=0.2)
*/



/**
 * SPRITE ANIMATION
 */

const canvas = document.getElementById('canvas')
const counter = document.getElementById('counter')
const ctx = canvas.getContext('2d')
const img = new Image()
let count = 0
let x
let y
let xpos = 0
let ypos = 0
let start

function draw(time) {
  /*
  if(count !== 60) requestAnimationFrame(draw) // pause in a specific frame
  else
    console.log(new Date() - start) // in my tests vary between 900..1150 ~ 60fps
  */

  requestAnimationFrame(draw)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  counter.innerText = count
  x = (count % 9) * 212
  y = Math.floor(count/9) * 201

  ctx.drawImage(img, x, y, 212, 201, xpos++, ypos++, 212, 201)

  if (count === 149)
    count = 0
  else
    count++

}

img.src = 'img/sprite_sheet.png'
img.onload = () => {
  console.log('start time')
  start = new Date()
  draw()
}

