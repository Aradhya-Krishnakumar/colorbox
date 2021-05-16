var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music,pSB;

function preload()
{
    music = loadSound("music.mp3");
    pSB = loadSound("pleasestandby.mp3")
}


function setup(){
    canvas = createCanvas(1045,600);

    block1 = createSprite(125,580,250,30);
    block1.shapeColor = "blue";

    block2 = createSprite(390,580,250,30);
    block2.shapeColor = "orange";

    block3 = createSprite(655,580,250,30);
    block3.shapeColor = "red";

    block4 = createSprite(920,580,250,30);
    block4.shapeColor = "cyan";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 5;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        music.stop();
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){       
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        pSB.play();
 }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        music.stop();
        ball.shapeColor = "red";
        music.play();
    }

    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        music.stop();       
        ball.shapeColor = "cyan";
        music.play();
    }

    
    drawSprites();
}
