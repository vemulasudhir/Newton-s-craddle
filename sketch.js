
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

	//Create the Bodies Here.

ground = new Ground(600,100,1200,20)
bob1 = new Bob(200,600,50)
bob2 = new Bob(300,600,50)
bob3 = new Bob(400,600,50)
bob4 = new Bob(500,600,50)
bob5 = new Bob(600,600,50)
rope1 = new Rope(bob1.body,ground.body,-bob1*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()

  drawSprites();

 
}



