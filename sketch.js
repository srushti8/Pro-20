var tom,tom1,tom2,tom3,tom4,jerry,jerry2,jerry3,jerry4,backgroundI,background;

function preload() {
   backgroung = loadImage("images/garden.png");

   tom1 = loadImage("images/tomOne.png");
   tom2 = loadImage("image/tomTow.png");
   tom3 = loadImage("image/tomThree.png");
   tom4 = loadImage("image/tomFour.png");

   jerry1 = loadImage("image/jerryOne.png");
   jerry2 = loadImage("image/jerryTow.png");
   jerry3 = loadImage("image/jerryThree.png");
   jerry4 = loadImage("image/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);

    background =  createSprite(200,400,0,0);
    background.addImage(backgroundI);
    
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tom1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerry1);
    jerry.scale = 0.15; 
}

function draw() { 
    background(bg); 
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
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2); 
        tom.changeAnimation("tomRunning"); 
        jerry.addAnimation("jerryTeasing", jerryImg2); 
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
        } 
}
