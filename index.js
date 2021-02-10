const {getResult} = require('./funtions/funtions.js')

const input = document.getElementById('numInput')
const counter = document.getElementById('counter')
const sourceArrHTML = document.getElementById('sourceArr')
const paramHTML = document.getElementById('param')
const buttonBig = document.getElementById('>')
const buttonSmall = document.getElementById('<')
const result = document.getElementById('processedArr')

let counterValue = 10
let param = false
const sourceArr = []

input.addEventListener('keypress', onKeyEnter)
buttonBig.addEventListener('click', () => changeParam(true))
buttonSmall.addEventListener('click', () => changeParam(false))

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
        if (counterValue == 0) {
            getResult(sourceArr, param, result)
        }
    }
}

function changeParam(value) {
    param = value
    if (param) {
        paramHTML.textContent = '>'
    } else {
        paramHTML.textContent = '<'
    }
}
