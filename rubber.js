class Rubber{
    constructor(x, y, RADIUS) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, 20,  options);
        this.radius = 50;
        
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill("red");
        ellipse(0, 0, this.radius);
        pop();
      }
    };
