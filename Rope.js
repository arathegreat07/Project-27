class Rope {

    constructor(bodyA, bodyB, offsetX) {
       
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 100,
            pointB:{x: this.offsetX, y: 0}
        }
        
        this.offsetX = offsetX;
        this.rope = Constraint.create(options);
        
       
        World.add(world, this.rope);
    }

    display() {
        
        stroke("white");
        strokeWeight(3);
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
    }
        
    
}