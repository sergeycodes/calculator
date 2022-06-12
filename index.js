const inputBox = document.getElementById("input-el")
const numberBtn = document.querySelectorAll('.grey-btn')
const equalSign = document.querySelector('#equal-sign')
const plusSign = document.querySelector('#plus-sign')
const minusSign = document.querySelector('#minus-sign')
const multiplySign = document.querySelector('#multiply-sign')
const divideSign = document.querySelector('#divide-sign')
const clearEl = document.querySelector('#clear-el')

equalSign.addEventListener('click', equals)
plusSign.addEventListener('click', add)
minusSign.addEventListener('click', subtract)
multiplySign.addEventListener('click', multiply)
divideSign.addEventListener('click', divide)
clearEl.addEventListener('click', clearInput)

let sign = ""

let hasEqualed = false

let sum = 0
let num = 0


numberBtn.forEach(i => {
    i.addEventListener('click', function() {

        plusSign.style.background = "#FF9500"
        plusSign.style.color = "#FFEDED"
        minusSign.style.color = "#FFEDED"
        minusSign.style.background = "#FF9500"
        multiplySign.style.color = "#FFEDED"
        multiplySign.style.background = "#FF9500"
        divideSign.style.color = "#FFEDED"
        divideSign.style.background = "#FF9500"

        inputBox.value += this.innerHTML
    })
})


/*
clearEl.addEventListener('click', function() {
    inputBox.value = ""
    //add localstorage clear
})*/

function clearInput() {
    inputBox.value = ""
    sum = 0
    sign = ""
    hasEqualed = false

    plusSign.style.background = "#FF9500"
    plusSign.style.color = "#FFEDED"
    minusSign.style.color = "#FFEDED"
    minusSign.style.background = "#FF9500"
    multiplySign.style.color = "#FFEDED"
    multiplySign.style.background = "#FF9500"
    divideSign.style.color = "#FFEDED"
    divideSign.style.background = "#FF9500"
}

function add() {
    
    if(hasEqualed == false){
        sum += +inputBox.value
    }
    inputBox.value = ""
    sign = "+"
    hasEqualed = false 

    plusSign.style.background = "#FFEDED"
    plusSign.style.color = "#FF9500"
    minusSign.style.color = "#FFEDED"
    minusSign.style.background = "#FF9500"
    multiplySign.style.color = "#FFEDED"
    multiplySign.style.background = "#FF9500"
    divideSign.style.color = "#FFEDED"
    divideSign.style.background = "#FF9500" 
}

function subtract() {
    if((sum === 0) && (hasEqualed == false)) {
        sum = +inputBox.value
    }else if(hasEqualed == false){
        sum -= +inputBox.value
    }
    inputBox.value = ""
    sign = "-"
    hasEqualed === false

    minusSign.style.background = "#FFEDED"
    minusSign.style.color = "#FF9500"
    plusSign.style.color = "#FFEDED"
    plusSign.style.background = "#FF9500"
    multiplySign.style.color = "#FFEDED"
    multiplySign.style.background = "#FF9500"
    divideSign.style.color = "#FFEDED"
    divideSign.style.background = "#FF9500" 

}

function multiply() {
    if(sum === 0 && hasEqualed == false) {
        sum = +inputBox.value
    }else if(hasEqualed == false){
        sum *= +inputBox.value
    }
    inputBox.value = ""
    sign = "x"
    console.log("Multiply " + sum)
    hasEqualed === false

    multiplySign.style.background = "#FFEDED"
    multiplySign.style.color = "#FF9500"
    plusSign.style.color = "#FFEDED"
    plusSign.style.background = "#FF9500"
    minusSign.style.color = "#FFEDED"
    minusSign.style.background = "#FF9500"
    divideSign.style.color = "#FFEDED"
    divideSign.style.background = "#FF9500" 
}

function divide() {
    if(sum === 0 && hasEqualed == false) {
        sum = +inputBox.value
    }else if(hasEqualed == false){
        sum = sum / +inputBox.value
    }
    inputBox.value = ""
    sign = "/"
    console.log("Divide " + sum)
    hasEqualed === false

    divideSign.style.background = "#FFEDED"
    divideSign.style.color = "#FF9500"
    plusSign.style.color = "#FFEDED"
    plusSign.style.background = "#FF9500"
    minusSign.style.color = "#FFEDED"
    minusSign.style.background = "#FF9500"
    multiplySign.style.color = "#FFEDED"
    multiplySign.style.background = "#FF9500" 
}

function equals() {
    if(sign === "+"){
        sum += +inputBox.value
        inputBox.value = sum
        sign = ""
        hasEqualed = true
    }else if(sign === "-"){
        sum -= +inputBox.value
        inputBox.value = sum
        sign = ""
        hasEqualed = true
    }else if(sign === "x"){
        sum *= +inputBox.value
        inputBox.value = sum
        sign = "" 
        hasEqualed = true
    }else if(sign === "/"){
        sum /= +inputBox.value
        console.log("Equals " + sum)
        inputBox.value = sum
        sign = ""
        hasEqualed = true
    }
}