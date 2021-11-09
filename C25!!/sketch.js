
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)
	paperBall = new Paper(100, 100, 30)

	//side2 = createSprite(505, 690, 165, 15)
	//side1 = createSprite(430, 650, 15, 80)
	//side3 = createSprite(580, 650, 15, 80)

	//side1.shapeColor = color(255, 0, 0)
	//side2.shapeColor = color(255, 0, 0)
	//side3.shapeColor = color(255, 0, 0)
	box1 = new Box(505, 690, 165, 15)
	box2 = new Box(430, 650, 15, 93)
	box3 = new Box(580, 650, 15, 93)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperBall.display();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:-10})
	}
	if(keyCode == DOWN_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:0, y:10})
	}
	if(keyCode == LEFT_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:-5, y:0})
	}
	if(keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:5, y:0})
	}
}

