const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let container = document.querySelector('#container')

for (let i = 0; i < 500; i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('mouseover',()=> addBackgroundColor(box))
    box.addEventListener('mouseout',()=> removeBackgroundColor(box))

}

function addBackgroundColor(element){
    let color = randomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function removeBackgroundColor(element){
    element.style.background='#000'
    element.style.boxShadow = "0 0 2px #000"
}

function randomColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}