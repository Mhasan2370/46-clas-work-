let ground;
let lander;
var lander_img;
var bg_img;
var meteor,meteorsG, meteorImg;
var meteorTL,meteorBL,meteorBR,meteorTR;

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  meteorTL = loadImage("meteorTL.png");
  meteorTR = loadImage("meteorTR.png");
  meteorBL = loadImage("meteorBL.png");
  meteorBR = loadImage("meteorBR.png")
  
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  meteorsG = new Group ();
  

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  //push()
  //fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  //pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  spawnMeteors();
  

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

function spawnMeteors(){
  if (frameCount %60 ===0){

    var leftOrRight = Math.round(random(1,2));
    if(leftOrRight === 1){
      xPos=0;
      yPos = Math.round(random(0,700));
      xVel = Math.round(random(3,10))
      if(yPos < 350){
        yVel = Math.round(random(3,5));
        meteorImg = meteorTL
      }else{
        yVel = Math.round(random(-5,-3));
        meteorImg = meteorBL
      }
    }
    else{
      xPos=1000;
      yPos = Math.round(random(0,700));
      xVel = -(Math.round(random(3,10)))
      if(yPos < 350){
        yVel = Math.round(random(3,5));
        meteorImg = meteorTR;
      }else{
        yVel = Math.round(random(-5,-3));
        meteorImg = meteorBR;
      }

    }
    meteor = createSprite(xPos, yPos, 30, 30);
    meteor.addImage(meteorImg)
    meteor.scale= 0.05;
    meteor.velocityX = xVel,
    meteor.velocityY  = yVel,
    meteorsG.add(meteor)
  }
}
