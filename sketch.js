
var barco,barco_running;
var seaImg
var sea
function preload(){
  seaImg= loadImage("sea.png");
barco_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400,400,400);
  sea=createSprite(200,200,400,400)
  barco=createSprite(150,180,20,50)
  barco.addAnimation("corriendo",barco_running)
  barco.scale=0.4
  sea.addImage(seaImg)
  sea.scale=0.3
 
}

function draw() {
  background("blue");
 drawSprites()
sea.velocityX=1

 if(sea.x>400){sea.x=width/2;}

}