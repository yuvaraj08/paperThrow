
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	paper=new Paper(350,100,10,10);
	dustbin=new Dustbin(100,350,10,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbbin.display();
  drawSprites();
 
}



