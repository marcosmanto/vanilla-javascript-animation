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

const rotatingSquare = document.getElementById('web-animation')

rotatingSquare.animate(
  [
    {backgroundColor: '#000'},
    {backgroundColor: '#440000'},
    {backgroundColor: '#000'},

  ],
  {
    duration: 1000,
    iterations: 7
  }
)
