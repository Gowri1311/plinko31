const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[]
var particles=[]

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,380,800,20);
    division1=new Division(100,300,20,145)
    division2=new Division(200,300,20,145)
    division3=new Division(300,300,20,145)
    division4=new Division(400,300,20,145)
    division5=new Division(500,300,20,145)
    division6=new Division(600,300,20,145)

    //pinko1 = new Plink(10,50);


    for(var x =20 ;x <=800; x=x+80){
      plinkos.push(new Plinko(x,50))
    }
    for(var x =40 ;x <=800; x=x+80){
      plinkos.push(new Plinko(x,100))
    }
    for(var x =20 ;x <=800; x=x+80){
      plinkos.push(new Plinko(x,150))
    }
    for(var x =40 ;x <=800; x=x+80){
      plinkos.push(new Plinko(x,200))
    }
    

    
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  Engine.update(engine)
//plinkos[p1,p2,p3,,,,,]= 10
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
if(frameCount%60===0){
particles.push(new Particle(random(0,800),0))
}
for (var i = 0; i < particles.length; i++) {
     
  particles[i].display();
  
}
}