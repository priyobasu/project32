const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate=0
var score=0;
var backgroundImg;
var bgcolor=getbackgroundimg();
function preload(){
    getbackgroundimg();
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    polygon= new Box(200,500,50,50)
    slingshot1 = new slingshot(polygon.body,{x:200, y:400});
    ground1= new Ground(1090,250,200,10)
    block1= new block(1030,235,30,40)
    block2= new block(1060,235,30,40)
    block3= new block(1090,235,30,40)
    block4= new block(1120,235,30,40)
    block5= new block(1150,235,30,40)
    block6= new block(1060,195,30,40)
    block7= new block(1090,195,30,40)
    block8= new block(1120,195,30,40)
    block9= new block(1090,155,30,40)

    ground2= new Ground(700,425,260,10)
    block10= new block(610,400,30,40)
    block11= new block(640,400,30,40)
    block12= new block(670,400,30,40)
    block13= new block(700,400,30,40)
    block14= new block(730,400,30,40)
    block15= new block(760,400,30,40)
    block16= new block(790,400,30,40)
    //block17= new block(700,400,30,40)
    block17= new block(640,360,30,40)
    block18= new block(670,360,30,40)
    block19= new block(700,360,30,40)
    block20= new block(730,360,30,40)
    block21= new block(760,360,30,40)

    block22= new block(670,320,30,40)
    block23= new block(700,320,30,40)
    block24= new block(730,320,30,40)

    block25= new block(700,280,30,40)

    ground3=new Ground(650,590,1300,10)

    
}

function draw(){
   
   if(backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
    textSize(20);
    text("Score: " + score, 20,100);
    textSize(60)
    fill("white")
    text("Drag the mouse and hit the blocks",180,100)
    textSize(40)
    text("Press SPACE to attach the polygon to the sling",180,150)
    polygon.display();
    slingshot1.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    ground3.display();


    block1.scoreboard();
    block2.scoreboard();
    block3.scoreboard();
    block4.scoreboard();
    block5.scoreboard();
    block6.scoreboard();
    block7.scoreboard();
    block8.scoreboard();
    block9.scoreboard();
    block10.scoreboard();
    block11.scoreboard();
    block12.scoreboard();
    block13.scoreboard();
    block14.scoreboard();
    block15.scoreboard();
    block16.scoreboard();
    block17.scoreboard();
    block18.scoreboard();
    block19.scoreboard();
    block20.scoreboard();
    block21.scoreboard();
    block22.scoreboard();
    block23.scoreboard();
    block24.scoreboard();
    block25.scoreboard();
    
}

function mouseDragged(){
    if(gamestate===0){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
   
}



function mouseReleased(){
    slingshot1.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(polygon.body)
    }
}
async function getbackgroundimg(){
    var request = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var response= await request.json();
    var hour= response.datetime.slice(11,13);
    console.log(hour);
    if(hour>06 && hour< 18){
       backgroundImg=loadImage("light.png");
    }else{
        backgroundImg=loadImage("dark.png");
    }

}