import './app.css'

let ol = 0;
let circleInterval;

function circleAnimation(time) {
    ol++
    document.getElementById("circle").style.left = ol + "px"

    if(time < 4000){
        circleInterval = requestAnimationFrame(circleAnimation)
    } else {
        document
            .getElementById("circle")
            .style.backgroundColor = "dimgrey"
            cancelAnimationFrame(circleInterval)
    }
}

circleInterval = requestAnimationFrame(circleAnimation)
