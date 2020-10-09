var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
// var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;
var particle;
var turn = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  wall1 = new Wall(2,400,10,800);
  wall2 = new Wall(797,400,10,800);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175)); 
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
}
 


function draw() {
  background("black");

  textSize(30);
  stroke("blue");
  fill("cyan");
  textFont("Algerian");
  text("Score:  " + score,20,30);

  text("500",15,530);
  text("500",95,530);
  text("500",175,530);
  text("500",255,530);

  text("100",333,530);
  text("100",413,530);
  text("100",493,530);

  text("200",575,530);
  text("200",655,530);
  text("200",735,530);

  if(score >= 2000){
    textSize(50)
    text("Game Over", 250,240);
  }

  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 300){ 
        score = score + 500;
        particle = null;

        if(score >= 2000) gameState = "end";
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 301){
      if(particle.body.position.x < 600){ 
        score = score + 100;
        particle = null;

        if(score >= 2000) gameState = "end";
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 601){
      if(particle.body.position.x < 900){ 
        score = score + 200;
        particle = null;

        if(score >= 2000) gameState = "end";
      }
    }
  }
  
  for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();
  }

  //if(frameCount%60===0){
    //particles.push(new Particle(random(20,780), 10,10));
    //score++;
  //}

  //for (var j = 0; j < particles.length; j++) {
    //particles[j].display();
  //}

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX,10,10,10);
     //score++;
  }
}