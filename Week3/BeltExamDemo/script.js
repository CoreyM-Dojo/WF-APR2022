console.log("Connected to js")

var domain = "Flexexam.com";

function setWebsiteName() {
    var h1 = document.querySelector('h1');
    h1.innerText = domain;
}

function changePic(img) {
    img.src = "images/content_img1.png"
}
function changePicBack(img) {
    img.src = "images/content_img2.png"
}