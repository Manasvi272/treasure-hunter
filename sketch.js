var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200,250,80,30);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(300,350,30,80);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.x =mouseX;
  movingRect.y=mouseY; 

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}