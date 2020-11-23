
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, bin1, bin2, bin3, paper;
var engine, world;

function setup() 
{
	createCanvas(1600, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 500, width, 20);
    
	paper = new Paper(200, 450, 20);

    bin1 = new Dustbin(1110, 438, 20, 100);
	bin2 = new Dustbin(1290, 438, 20, 100);
	bin3 = new Dustbin(1200, 478, 200, 20);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);

  background(0);
  
  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
  }
}