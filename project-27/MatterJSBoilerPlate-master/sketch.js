
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(397,80,780,100);
	bob1 = new Bob(200,700,50,50);
	bob2 = new Bob(300,700,50,50);
	bob3 = new Bob(400,700,50,50);
	bob4 = new Bob(500,700,50,50);
	bob5 = new Bob(600,700,50,50);
	rope1 = new Rope(Bob.Body,{x:250,y:180});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



