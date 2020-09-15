var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Render = Matter.Render;

var divisions=[];
var plinkos = [];
var draw1 = [];

var ground, particle,count,score;
var gamestates ="play";

var divisionHeight=300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  score=0;
  count =0;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
    Engine.run(engine); 
    Render.run(render);

}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(count === 5){
     gamestates="end"
   }

   ground.display();
   console.log(gamestates);
   Draw2();
}

function mousePressed(){
  if(gamestates!=="end")
  {
    count++;
    particle = new Particle(mouseX,10,10);
    particle.display();
    draw1.push(particle);
  }
}

function Draw2(){
    if(draw1.length < 0 ){
      particle.display();
    }
}
