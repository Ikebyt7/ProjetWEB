var background = new Array("Images/slide1.jpg","Images/slide2.jpg", "Images/slide3.jpg");
var cptSlide = 0;
var Temp;
count = background.length

function slider(sens) {
    cptSlide += sens;
    if (cptSlide < 0)
        cptSlide = count - 1;
    if (cptSlide > count - 1)
        cptSlide = 0;
    document.getElementById("slide").src = background[cptSlide];
    Temp = setTimeout("slider(1)", 4000);
}
function Stop(){
    clearTimeout(Temp)
}
slider(1);