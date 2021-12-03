let backgroundImage;
let playerShip,playerShipImage;
let enemyShip1,enemyship2,enemyShip1Image,enemyShip2Image;
let enemyShipDeath;
let enemyShipGroup;
globalThis.leftWall
globalThis.rightWall;
let leftWallGroup,rightWallGroup;
let playerBulletGroup;
let playerBulletSound


function preload(){
playerShipImage = loadImage("Images/playerShip.png");
playerShipBulletImage = loadImage("Images/playerBullet.png");

enemyShip1Image = loadImage("Images/enemyship1.png");
enemyShip2Image = loadImage("Images/enemyship2.png");

enemyShipDeath = loadImage("Images/normalExplosion.gif")

playerBulletSound = loadSound("Sounds/playerBulletSound.mp3")

    
}
function setup(){
    var gameCanvas = createCanvas(1850,930);

    rightWallGroup = new Group();
    leftWallGroup = new Group();

    enemyShipGroup = new Group();

    playerBulletGroup = new Group();

    playerShip = createSprite(925,855,50,50);
    playerShip.addImage(playerShipImage);
    playerShip.scale = 2;
    playerShip.friction = 0.95;

     
     

     leftWall = createSprite(0,50,90,50)
     leftWall.visible = false
     leftWallGroup.add(leftWall);

     rightWall = createSprite(1850,50,90,50);
     rightWall.visible = false;
     rightWallGroup.add(rightWall);
     
    }

function draw(){
    background("black");
    leftWall.visble = false;
playerShip.x = mouseX;

if(enemyShipGroup.collide(leftWall)){
  enemy.velocityX = 4
}

if(enemyShipGroup.collide(rightWall)){
   
  enemy.velocityX = 4
}

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);
 
if(playerBulletGroup.isTouching(enemyShipGroup)){
enemy.remove();
enemy.destroy();
enemy.lifetime = 0;

}


  if(frameCount%180 ===0){
     enemySpawner();

  }
    
drawSprites();

}

function mouseClicked() {
  //learn how to use set interval so i dont forget to use...
  //might work with setTimeout
  //setInterval(shoot(){ alert("Hello"); }, 3000);
shootBullet();


  }

function shootBullet(){

 globalThis.playerBullet;

 playerBullet = createSprite(0,playerShip.y,50,50);
playerBullet.addImage(playerShipBulletImage);
playerBullet.x = playerShip.x


playerBullet.depth = playerShip.depth;
playerShip.depth = playerShip.depth+1;

playerBullet.lifetime = 100

 
playerBullet.velocityY = -20;


playerBulletGroup.add(playerBullet);

playerBulletSound.play();
playerBulletSound.play();
}



function enemySpawner(){
  globalThis.enemy;

 enemy = createSprite(900,50,50,50)
 enemyShipGroup.add(enemy);
 enemy.scale = 2.1;
 enemy.debug = true;
 enemy.lifetime = 600;



 

 var rand,rand1;
 

 rand = Math.round(random(1,2));
 rand1 = Math.round(random(1,3));

if(rand === 1){
  enemy.velocityX = 4;
}
if(rand = 2){
  enemy.velocityX = -4;
}


console.log(rand1)
if(rand1 === 1){
  enemy.addImage(enemyShip2Image);

}
else{
  enemy.addImage(enemyShip1Image);

  
}


}


function enemyShoot(){






}