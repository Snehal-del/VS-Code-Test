var sprite1;
var sprite2;

function setup() {
  createCanvas(800,400);
  
  sprite1 = createSprite(400, 200, 50, 50);
  sprite1.shapeColor = "blue";
  
  sprite2 = createSprite(400, 300, 50, 50);
  sprite2.shapeColor = "blue"; 
}

function draw() {
  background(255,255,255);

  sprite2.x = World.mouseX;
  sprite2.y = World.mouseY;
  
  console.log(sprite2.x - sprite1.x);

  if(sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2 && sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
    && sprite2.y - sprite1.y <= sprite1.width/2 + sprite2.width/2 && sprite1.y - sprite2.y < sprite1.width/2 + sprite2.width/2) {
    sprite1.shapeColor = "red";
    sprite2.shapeColor = "red";
  } else {
    sprite2.shapeColor = "blue";
    sprite1.shapeColor = "blue";
  }
  
  drawSprites();
}