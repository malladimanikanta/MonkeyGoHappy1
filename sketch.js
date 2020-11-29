var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
monkey_running=loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x); 
  
  
   } 
function draw() {
  background(245);
  
  if(ground.x<0){
 ground.x = ground.width/2;
     }
  if(keyDown("space")) {
    monkey.velocityY = -12;
    
    }
monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  
 var score = 0;
  
 stroke = "white";
 textSize(20)
 fill("white");
 text("Score:"+score,500,50);
 
 stroke = "black";
 textSize(20)
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:" +survivalTime,120,50);
 
 
 if (frameCount%80 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    banana.addAnimation("banana", bananaImage);
     banana.scale = 0.1;
    banana.velocityX = -4
    banana.lifetime = 220;
   
}
drawSprites();
 if (frameCount%200 === 0){
    
    obstace = createSprite(188,340,50,50);
    obstace.addImage(obstaceImage);  
    obstace.scale = 0.13 ;
    obstace.velocityX = -4
    obstace.lifetime = 220;
   
    
  }
}
function Food(){
  if(frameCount % 80===0){
  banana = createSprite(620,120,50,50)
  banana.addImage(bananaImage)  
  
  var rand = Math.round(random(120,200));
  banana.velocityX = -4;
  
  banana.setLifetime =50;
    
  FoodGroup.add(banana)
}
}

function obstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -6
   
    //generate random obstacles
    var rand = Math.round(random(120,60));
    obstacle.setLifetime =50;
   
   obstacleGroup.add(obstacles)
 }
}