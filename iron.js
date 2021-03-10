class Iron{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 150, 70, options);
        this.width = 70;
        this.height = 50;
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(1);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
