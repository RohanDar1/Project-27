var bob1, bob2, bob3, bob4, bob5, roof1;
var rope1, rope2, rope3, rope4, rope5
var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	roof1= new roof(width/2, height/4, width/7, 20)

	bobDiameter=40;

	BobPositionY=height/4+500
	bob1=new bob(width/2-bobDiameter*2, BobPositionY, bobDiameter);
	bob2=new bob(width/2-bobDiameter, BobPositionY, bobDiameter);
	bob3= new bob(width/2,BobPositionY,bobDiameter);
	bob4= new bob(width/2+bobDiameter, BobPositionY, bobDiameter);
	bob5= new bob(width/2+bobDiameter*2,BobPositionY,bobDiameter);

	rope1= new rope (bob1.body, roof1.body, -bobDiameter*2, 0)
	rope2= new rope (bob2.body, roof1.body, -bobDiameter*1, 0)
	rope3= new rope (bob3.body, roof1.body, 0, 0)
	rope4= new rope (bob4.body, roof1.body, bobDiameter*1, 0)
	rope5= new rope (bob5.body, roof1.body, bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();


 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed()
{
	if (keyCode===RIGHT_ARROW){

		Matter.Body.applyForce(bob1.body, bob1.body.position,{x: -50, y: -20})
	}
}


