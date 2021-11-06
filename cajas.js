const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var caja1,caja2;
var ground;

function setup() { 
    createCanvas(400,400);
     engine=Engine.create(); 
     world=engine.world; 
     caja1 = new box(100,200,50,50);
     ground = new suelo (200,100,400,30);

    } 
    
    function draw() { 
        background('black'); 
        Engine.update(engine); 
        caja1.display();
        ground.display();
    }