var ball,ballimg,paddleimg,paddle;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   
  ball = createSprite(200,200,20,20);
  ball.addImage (ballimg);
  ball.velocityX = 9;
  
  paddle = createSprite(400,200,20,60);
  paddle.addImage(paddleimg);
}

function draw() {
  background(220,0,60);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);

  ball.bounceOff(paddle)
  
  if(keyDown(UP_ARROW)) {
  paddle.velocityX = 0;
  paddle.velocityY =-2;
  }
  
  if(keyDown(DOWN_ARROW)) {
  paddle.velocityX = 0;
  paddle.velocityY =+2;
  }
  
  random();
  
  drawSprites();
}

function random(){
  ball.velocityY=random(1,9);
}

