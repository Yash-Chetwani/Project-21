var canvas;
var music;
var surface1,surface2,surface3,surface4,surface5,surface6;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    surface1=createSprite(100,560,175,20);
    surface1.shapeColor="red";

    surface2=createSprite(300,560,175,20);
    surface2.shapeColor="blue";

    surface3=createSprite(500,560,175,20);
    surface3.shapeColor="green";

    surface4=createSprite(700,560,175,20);
    surface4.shapeColor="yellow";

    surface5=createSprite(100,100,120,20);
    surface5.shapeColor="purple";

    surface6=createSprite(700,100,120,20);
    surface6.shapeColor="purple";

    box=createSprite(random(400,400));
    box.width=20;
    box.height=20;
    box.shapeColor="white";

    //create box sprite and give velocity

    box.velocityY=8;
    box.velocityX=8;

}

function draw() {
    background(rgb(169,169,169));
    
   if(surface1.isTouching(box)){
       box.bounceOff(surface1);
       box.shapeColor="red";
   }

   if(surface2.isTouching(box)){
    box.bounceOff(surface2);
    box.shapeColor="blue";
    
}


if(surface3.isTouching(box)){
    box.bounceOff(surface3);
    box.shapeColor="green";
}


if(surface4.isTouching(box)){
    box.bounceOff(surface4);
    box.shapeColor="yellow";
}

if(surface5.isTouching(box)){
    box.bounceOff(surface5);
    box.shapeColor="purple";
}

if(surface6.isTouching(box)){
    box.bounceOff(surface6);
    box.shapeColor="purple";
}

  edge=createEdgeSprites();
  box.bounceOff(edge);

    drawSprites();
}
