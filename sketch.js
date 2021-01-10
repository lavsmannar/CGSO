var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55.100);
  weight=random(400.3000);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor='black';

  car.velocityX=speed;
  deformation=(0.5*weight*speed*speed)/22500
}

function draw() {
  background(255,255,255);

  if(car.isTouching(wall)){
    if(deformation>180){
      car.shapeColor='red';
    }
    if(180>=deformation>80){
      car.shapeColor='yellow';
    }
    if(deformation<=80){
      car.shapeColor='green';
    }
    car.velocityX=0;
  }

  drawSprites();
}