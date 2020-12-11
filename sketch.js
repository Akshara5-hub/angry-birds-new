const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var box3,box4,log2,log3,log4,pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    ground = new Ground(600,height,1200,10)
    pig1=new Pig(800,350)
    log1=new Log(800,320,300,PI/2)
    box3= new Box(700,300,70,70);
    box4= new Box(900,300,70,70);
    log2= new Log(800,270,300,PI/2)
    bird1= new Bird(200,200,100,100)
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    bird1.display();
}