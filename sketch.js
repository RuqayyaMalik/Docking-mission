var iss,spacecraft;
var issimg,spacebackg,space1,space2,space3,space4;
var hasDocked = false

function preload(){
issimg = loadImage("iss.png")
spacebackg = loadImage("spacebg.jpg")
space1 = loadImage("spacecraft1.png")
space2 = loadImage("spacecraft2.png")
space3 = loadImage("spacecraft3.png")
space4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 130);
  iss.addImage(issimg)
  iss.scale = 0.25;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(space1)
  spacecraft.scale = 0.15;

}

function draw() {
  background(spacebackg)

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

  }
  if (keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y-2
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(space2)
    spacecraft.x = spacecraft.x-1
  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(space3)
    spacecraft.x = spacecraft.x +1
  }
  if (keyDown("DOWN_ARROW")){
    spacecraft.addImage(space2)
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true
    textSize(25)
    fill("white")
    text("Docking Successfull!!!" ,200,300)
  }

  drawSprites();
}