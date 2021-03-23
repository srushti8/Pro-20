var tom,tomI,jerry,jerryI,backgroundI,backgroundP,tom1,tom2,jerry1;

function preload() {
   tomI = loadAnimation ("images/tomOne.png","images/tomTwo.png","images/tomThree.png","images/tomFour.png");

   tom1 = loadImage ("images/tomOne.png")

   tom2 = loadImage ("images/tomFour.png")

   jerryI = loadAnimation ("images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png");

   jerry1 = loadImage ("images/jerryOne.png")

   backgroundI = loadImage ("images/garden.png");
}

function setup(){
    createCanvas(1000,1000);

    backgroundP =  createSprite(200,400,0,0);
    backgroundP.addImage(backgroundI);
    //backgroundP.scale=2.0;
    
    tom = createSprite(500, 650, 50, 80);
    tom.addImage(tom1);
    tom.scale=0.15;
    tom.addAnimation("tomSleeping", tomI); 
    jerry.addAnimation("jerryStanding", jerryI);

    jerry = createSprite(150, 600, 80, 30);
    jerry.addImage(jerry1);
    jerry.scale=0.1;

    jerry.debug=true;
}

function draw() {

    background(255);
    
    if (tom.isTouching(jerry)){
        tom.velocityX=0;
    }

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3); 
        tom.x =300; tom.scale=0.2; 
        tom.changeAnimation("tomLastImage"); 
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage"); 
        }

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){ 
    tom.velocityX = -5; tom.addAnimation("tomRunning", tomImg2);
     tom.changeAnimation("tomRunning");
     jerry.addAnimation("jerryTeasing", jerryImg2);
     jerry.frameDelay = 25;
     jerry.changeAnimation("jerryTeasing");
    }
}
