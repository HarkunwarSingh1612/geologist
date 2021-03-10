
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1, engine, world, ground, stone1, rubber1, sand1, sand2, sand3, sand4, sand5, iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    	engine = Engine.create();
		world = engine.world;
		hammer1=new Hammer(100, 100);
		stone1= new Stone(600, 300, width, height);
		rubber1= new Rubber(100, 200, RADIUS);
		ground = new Ground(600,height,1200,20);
		sand1= new Sand(400, 200, RADIUS);
		sand2= new Sand(400, 200, RADIUS);
		sand3= new Sand(400, 200, RADIUS);
		sand4= new Sand(400, 200, RADIUS);
		sand5= new Sand(400, 200, RADIUS);
		iron1= new Iron(200, 300, width, height);
		
		
	//Create the Bodies Here.



  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background(" blue");
  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron1.display();
  ground.display();
  
  drawSprites();
 
}



