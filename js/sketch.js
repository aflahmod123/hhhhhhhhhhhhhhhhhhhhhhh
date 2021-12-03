var spaceShip

var ground

var playButton
var playButtonImg1,playButtonImg2

var title
var titleImg

var tinyObject

var HelpButton
var HelpButtonImg1,HelpButtonImg2

function preload(){
    titleImg = loadImage("Images/titleImg.png");
    playButtonImg1 = loadImage("Images/PlayButtonImg.png");
    playButtonImg2 = loadImage("Images/PlayButtonImg2.png");

}
function setup(){
    var canvas = createCanvas(displayWidth/3,940);

    tinyObject = createSprite(10,10,0.1,0.1);
    tinyObject.visible = true;


    playButton = createSprite(displayWidth/6,545,400,70);
    playButton.addImage(playButtonImg1)
    
    HelpButton = createSprite(displayWidth/6,700,400,70);

    title = createSprite(displayWidth/6,200,400,70);
    title.addImage(titleImg)
    title.scale = displayWidth/2345;

}

function draw(){
    background("black");

    tinyObject.x = mouseX;
    tinyObject.y = mouseY;

    if(tinyObject.collide(playButton)){
    playButton.addImage(playButtonImg2)
}
else{

playButton.addImage(playButtonImg1)
}

if(mousePressedOver(playButton)){
    window.location = 'story.html';
    

}

drawSprites();

}



