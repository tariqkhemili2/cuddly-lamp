var PLAY;
var END;
var gameState=PLAY;
var player, playerImage;
var bomb, bombImage;
var explodinga;
var score=0;


function preload(){
  playerImage = loadImage("penguin.jpg");  
  bombImage = loadImage("bomb2.png");
  explodinga = loadAnimation("frame1.png","frame2.png","frame3.png","frame4.png","frame5.png")
}

function setup() {
  createCanvas(600, 600);
  player = createSprite(50,50,10,10);
  enemyGroup = createGroup();
  
}

function draw() {
  background("white");
  text("Score: " + score,20,20);
  if(gameState === PLAY){
      if(keyDown(UP_ARROW)){
        player.y = player.y - 5;
      }
    if(keyDown(DOWN_ARROW)){
      player.y = player.y + 5;
    }
  player.addImage(playerImage);
  player.scale=0.13
  enemy();
  }
  else if(gameState === END){
    enemyGroup.destroyEach();
    enemyGroup.setVelocityEach(0);
    score=0;
  }
   if(player.isTouching(enemyGroup)){
    player.destroy();
    gameState=END;
   bomb.addAnimation("boom",explodinga);
     
  }

  drawSprites();
}

function enemy(){
   if(frameCount%80===0){
  var bomb=createSprite(600,Math.round(random(50,500)),20,20);
  var r=Math.round(random(1,2));
  switch(r){
    case 1: bomb.addImage(bombImage);
      break;
   
    default: bomb.addImage(bombImage);
      break; 
   } 
  score++
    bomb.scale=0.2;
  bomb.velocityX = -4;
     bomb.setLifetime=150;
     enemyGroup.add(bomb);
  }
}