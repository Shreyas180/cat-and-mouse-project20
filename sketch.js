var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1;
var garden;
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    garden = loadImage('images/garden.png');
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600,20,20);
    cat.addAnimation("catslepping",catImg1);
    cat.scale = 0.2;
     mouse = createSprite(200,600,20,20);
     mouse.addAnimation("happymouse",mouseImg1);
     mouse.scale = 0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
cat.velocityX = 0;
cat.addAnimation("catstop",catImg3);
cat.scale = 0.2;
cat.changeAnimation("catstop");



mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation('catrunning',catImg2);
        cat.changeAnimation("catrunning")
        mouse.addAnimation("mouseTeasing", mouseImg2);
     
       
        
        mouse.changeAnimation("mouseTeasing");
    }

}
