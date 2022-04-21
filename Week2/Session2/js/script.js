var h1 = document.querySelector('h1')
// var document.querySelector("#target")
var img = document.getElementById("target")
console.log("Connected to js")

var firstname = "Corey"
var lastname = "Mckeel"

function makeFullName(fn,ln) {
    return fn + " " + ln;
}

var fullname = makeFullName(firstname, lastname);
function fillTextOnPage() {
    h1.innerText = fullname

    
}

function changeTextColor() {
    h1.className = "purple-text bigWord";
}

function revert() {
    h1.className = "";
}

function changePic(dropdown) {
    img.src = "images/" + dropdown.value.toLowerCase() + ".png"
}