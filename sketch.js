    
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;
var background;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
score=0;
  
  monkey=createSprite(80,400,20,20)
  monkey.addAnimation("monkey_moving", monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,400,900,10)
  ground.x=ground.width /2
  console.log(ground.x)
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("green")
    
      monkey.velocityY = monkey.velocityY + 0.3
      monkey.collide(ground)
    
     if(ground.x<0){
      ground.x=ground.width/2
      ground.velocityX=-4
    }
    if(World.frameCount%200===0){
      Food();
    }
    if(World.frameCount%300===0){
      stone();
    }
    if(keyDown("space")&&monkey.y >= 300){
      monkey.velocityY=-10
    }
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1
  }
 drawSprites();
  fill("orange")
  stroke("black")
  textSize(20)
  text("score:"+score,520,50)
  
  fill("yellow")
  stroke("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime,320,50)
}

function Food(){
  if(frameCount%200===0){
 var Food=createSprite(670,Math.round(random(170,230),10,10))
  Food.addImage(bananaImage);
  Food.scale=0.1
  Food.velocityX=-3
  FoodGroup.add(Food) 
  }
}

function stone(){
  if(frameCount % 300===0){
    obstacle=createSprite(670,380,10,10)
    obstacle.addImage(obstaceImage)
    obstacle.velocityX=-4
    obstacle.scale=0.2
    obstacleGroup.add(obstacle)
  }
}







