class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=250;
        this.y=200;
        this.radius=10;

        this.body=Bodies.circle(this.x,this.y,this.radius/2);

        World.add(world, this.paper);
    }

    display(){
        var paperPosition=this.body.position;
        push();
        translate
        rectMode(CENTER);
        fill(250,55,55);
        elcipse(0,0,this.radius,this.position);
    }
}