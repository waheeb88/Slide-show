 let myImage = document.getElementById("img")
let Images = [
    "img/cat-01.jpg",
    "img/cat-02.jpg",
    "img/cat-03.jpg",
    "img/cat-04.jpg",
    "img/cat-05.jpg",
    "img/cat-06.jpg"
]
let x = 1

function Slideshow (){
    myImage.setAttribute('src', Images[x])
    x++
    if(x == Images.length){
        x = 0
    }
    setTimeout(Slideshow, 2000)
}
Slideshow ()
//  setInterval(Slideshow,2000);
