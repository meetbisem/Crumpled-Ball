const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var Dustbin1,Dustbin2,Dustbin3,Dustbin4,Dustbin5;
var Ground;
var PaperObject,PaperIMG,PaperSprite;


function preload()
{
	
	//PaperIMG=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.

    Dustbin1=new dustbin(700,620,20,300);
    Dustbin2=new dustbin(500,620,20,300);
	Dustbin3=new dustbin(600,645,180,20);
	//Dustbin4=new dustbin(570,620,20,300);
//	Dustbin5=new dustbin(640,620,20,300);
	Ground=new ground(width/2, height-25, width,40);
	PaperObject=new paper(100,600,40);

	Engine.run(engine);
  
}


function draw() {
 
background("yellow");
 
Dustbin1.display();
Dustbin2.display();
Dustbin3.display();
//Dustbin4.display();
//Dustbin5.display();
Ground.display();
PaperObject.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:65,y:-65});
	}
}