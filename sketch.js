
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,500);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  //monkey.addImage("banana.png");
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  foodGroup=new Group();
  obstaclesGroup=new Group();
  score=0;
}


function draw() {
  background(255);
  console.log(monkey.y)
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if((keyDown("space")||keyDown("up"))&&monkey.y>260){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  
 
  
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocity=0;
    monkey.velocity=0;
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("score: "+score,400,50);
  
}
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10);
    banana.y=random(128,200);
    banana.velocityX=-5;
    banana.lifetime=300;
    monkey.depth=banana.depth+1;
    banana.addImage(bananaImage);
    banana.scale=0.05
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%80===0){
    obstacle=createSprite(800,320,10,40);
    obstacle.velocityX=-6;
    obstacle.lifetime=300;
   // obstacle.depth=banana.depth+1;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15
    obstaclesGroup.add(obstacle);
  }
}





