const numbersArr = document.querySelectorAll('.numbers');
console.log(numbersArr)
let isF = true
var temp = numbersArr
for (let i = 0; i < numbersArr.length; i++) {
    numbersArr[i].innerText = Math.floor(convertToF(numbersArr[i].innerText))
}

function convertToC(f) {
    f = ((f-32) * 5)/9
    return f
}

function convertToF(c) {
    c = ((c * (9/5)) + 32)
    return c
}

function backToC() {
    if (isF) {
        for (let i = 0; i < numbersArr.length; i++) {
            numbersArr[i].innerText = Math.floor(convertToC(numbersArr[i].innerText))
        }
        isF = false;
    }
}