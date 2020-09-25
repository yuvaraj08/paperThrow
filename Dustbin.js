class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=100;
        this.y=150;
        this.height=100;
        this.width=200;
        this.thickness=0.5;
        this.angle=PI/2;

        this.bottomBody=bodies.rectangle;
    }
    display(){
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;
        push();
        translate(posLeft.x,posleft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
    }
}



















