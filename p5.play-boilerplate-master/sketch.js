const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bodies;
var object;

function setup() {
  engine= Engine.create();
  world=engine.world;
var object_options = {
  isStatic : true
}
  createCanvas(400,400);
  object= Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  console.log(object)
  console.log(object.position.x)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER) 
  rect (object.position.x,object.position.y,50,50)
  drawSprites();
}