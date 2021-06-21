const left = document.querySelector('.left')
const right = document.querySelector('.right')
const border = document.querySelector('.border')

let x = 0;

function mouseDown(e) {
    window.addEventListener('mousemove', mouseMove)
    x = e.clientX
}


function mouseMove(e) {
    console.log(window.clientWidth)
    left.style.width = left.clientWidth + (e.clientX - x) + 'px'
    x = e.clientX
}

function mouseUp() {
    window.removeEventListener('mousemove', mouseMove)
}


border.addEventListener('mousedown', mouseDown)
window.addEventListener('mouseup', mouseUp)