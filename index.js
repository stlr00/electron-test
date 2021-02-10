const input = document.getElementById('numInput')
const counter = document.getElementById('counter')
const sourceArrHTML = document.getElementById('sourceArr')

let counterValue = 10;
input.addEventListener('keypress', onKeyEnter)

const sourceArr = []

function onKeyEnter(event) {
    const val = event.target.value
    if (
        event.keyCode == 13 &&
        val <= 9999 &&
        val >= 1000 &&
        counterValue > 0
    ) {
        counterValue--
        counter.textContent = counterValue.toString()
        input.value = ''
        sourceArr.push(val)
        sourceArrHTML.insertAdjacentText('beforeend', ' ' + val + ' ')

    }
}
