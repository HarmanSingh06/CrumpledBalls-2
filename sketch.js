
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,500);

	//Engine.run(engine);
	engine = Engine.create();
	world = engine.world;

	//Creating Ground
	ground = new Ground(800,450,9000,10);
	//Create the Bodies Here.
	ball = new Ball(200,200,20);
	box1 = new Box(1400,340,150,220,"green");
	box4 = new RBox(1480,340,20,160,"green");
	box3 = new RBox(1410,435,150,20,"green");
	box2 = new RBox(1330,340,20,160,"green");
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  //Displaying Everything
  ball.display();
  box1.display();
  ground.display();

  //No nedd to display box2,box3,box4 because the image is already added
  //box2.display();
  //box3.display();
  //box4.display();
  drawSprites();
 
}
//Making the ball jump
function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body, ball.body.position, {x:103,y: -103});
	}
  }




