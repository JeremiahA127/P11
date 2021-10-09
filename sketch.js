
function preload(){
  //pre-load images
pathImage = loadImage("path.png")
runnerImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4
  path.scale = 1.2
runner = createSprite(180,350,30,30)
runner.addAnimation("runningBoy",runnerImage)
runner.scale = 0.08
leftBoundary = createSprite(0,0,100,600)
leftBoundary.visible = false
rightBoundary = createSprite(410,0,100,600)
edges = createEdgeSprites()
rightBoundary.visible = false
runner.collide(edges[3])
runner.collide(leftBoundary)
runner.collide(rightBoundary)
}

function draw() {
  background(0);

if(path.y > 400){
  path.y = height/2
}
runner.x = mouseX
drawSprites() 
}
