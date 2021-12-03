let title,titleImg;
let nextButton, nextButtonImg, nextButtonImg2;
let backButton, backButtonImg, backButtonImg2;
let tinyObject;
function preload(){
    titleImg = loadImage("Images/titleImg.png");
    
    nextButtonImg = loadImage("Images/nextImage.png");
    nextButtonImg2 = loadImage("Images/nextImage2.png");

    backButtonImg = loadImage("Images/backImage.png");
    backButtonImg2 = loadImage("Images/backImage2.png");
    
}
function setup(){
    var storyCanvas = createCanvas(windowWidth/1/1.1,windowHeight/1/1.15);
     title = createSprite(windowWidth-1002,windowHeight-802,50,50)
     title.addImage(titleImg);
     
     backButton = createSprite(windowWidth-1700,windowHeight-200)
      backButton.addImage(backButtonImg);
      backButton.scale = 0.8

     nextButton = createSprite(windowWidth-400,windowHeight-200,50,50);
     nextButton.addImage(nextButtonImg);
     nextButton.scale = 0.8;

    tinyObject = createSprite(0,0,1,1);
    tinyObject.visible = false;


    }

function draw(){
    background("black");
     
    tinyObject.x = mouseX;
    tinyObject.y = mouseY;

   if(tinyObject.collide(nextButton)){
     nextButton.addImage(nextButtonImg2);



   }
    else {
        nextButton.addImage(nextButtonImg)



    }
    if(mousePressedOver(nextButton)){
        window.location = 'game.html';


    }

    if(tinyObject.collide(backButton)){
      backButton.addImage(backButtonImg2)
     


    }
    else {
        backButton.addImage(backButtonImg)
   


       }
       if(mousePressedOver(backButton)){
        window.location = 'index.html';
       }
drawSprites();

}



