class Sand{
    constructor(x, y, RADIUS) {
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':4
        }
        this.body = Bodies.circle(x, y, 5,  options);
        this.radius = 5;
        
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(1);
        fill("red");
        ellipse(0, 0, this.radius);
        pop();
      }
    };