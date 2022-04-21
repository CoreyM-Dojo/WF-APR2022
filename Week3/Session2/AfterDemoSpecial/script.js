var img = document.querySelector('.screen');

function highlight(channel) {
    channel.style.color = "red"
    channel.style.backgroundColor ="black"
    channel.style.border ="1px solid red"
}

function noHighlight(channel){
    channel.style.color = "black"
    channel.style.backgroundColor ="grey"
    channel.style.border ="none"
}

function pictureOne() {
    console.log(img)
    img.src = "images/guitar.jpg"
}
function pictureTwo() {
    console.log(img)
    img.src = "images/login_guitar.jpg"
}