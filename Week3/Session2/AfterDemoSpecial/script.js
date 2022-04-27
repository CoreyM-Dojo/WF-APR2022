var img = document.querySelector('.screen');
var knob = document.querySelector('#off')

var buttons = document.querySelectorAll('.channel') // [matching queries]
console.log(buttons)
function highlight(e) {
    console.log(e.target)
    e.target.style.color = "red"
    e.target.style.backgroundColor ="black"
    e.target.style.border ="1px solid red"
}

function noHighlight(e){
    e.target.style.color = "black"
    e.target.style.backgroundColor ="grey"
    e.target.style.border ="none"
}

function removeButton(e) {
    e.target.remove()
}

function pictureOne() {
    console.log(img)
    img.src = "images/guitar.jpg"
}
function pictureTwo() {
    console.log(img)
    img.src = "images/login_guitar.jpg"
}

function powerOff() {
    alert('Power off')
}

knob.addEventListener('click', powerOff , false);

for (var button of buttons) {
    button.addEventListener('mouseover', highlight, false)
    button.addEventListener('mouseout', noHighlight, false)
    button.addEventListener('click', removeButton, false)
}