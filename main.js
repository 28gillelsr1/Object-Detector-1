img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(320,100);
}
function draw(){
    image(img, 0,0,640,420);
    fill("#FF0000");
    noFill();
    stroke("#FF0000")
    rect(30,60,450,350);
    text("Dog", 45, 75)
}