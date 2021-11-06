const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var ball;

function setup() { 
    createCanvas(400,400);
     engine=Engine.create(); 
     world=engine.world; 
     
     var ground_options={isStatic:true}; 
     ground=Bodies.rectangle(200,390,50,50,ground_options);
      World.add(world,ground);
      
      var ball_options={restitution:1.0}; 
      ball=Bodies.circle(200,100,20,ball_options); 
      World.add(world,ball);
    } 
    
    function draw() { 
        background('black'); 
        Engine.update(engine); 
        fill ('red');
        rectMode(CENTER); 
        rect(ground.position.x, ground.position.y, 400, 20); 
        fill('green');
        ellipseMode(RADIUS); 
        ellipse(ball.position.x, ball.position.y, 20, 20);  
    }