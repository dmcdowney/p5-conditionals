var x = 0;
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    
    //i wrote this so background changes to pink when clicked
    if(mouseIsPressed){
        background(66,244,241);
    }
    
    //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(0,255,0);
    }
    else{
        noFill();
    }
    
    
    //a cirlce 
    ellipse(x,200,100,100);
    
    //this code is going to get the cirle to movew on its own
    if(x>width || x<0){
        console.log("CIRLCE IS OFF THE SCREEN!!!!")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
}