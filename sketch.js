
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

ground = new Ground(400,400,600,20)
bob1 = new Bob(200,600,50)
bob2 = new Bob(300,600,50)
bob3 = new Bob(400,600,50)
bob4 = new Bob(500,600,50)
bob5 = new Bob(600,600,50)
rope1 = new Rope(bob3.body,ground.body,0,0)
rope2 = new Rope(bob1.body,ground.body,-200,0)
rope3 = new Rope(bob2.body,ground.body,-100,0)
rope4 = new Rope(bob4.body,ground.body,100,0)
rope5 = new Rope(bob5.body,ground.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
ground.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();

 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-500})
}


}
