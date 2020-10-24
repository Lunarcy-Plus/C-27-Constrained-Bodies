class Chain{
    constructor(a,b){
    var properties = {
    bodyA:a,
    bodyB:b,
    length:10,
    stiffness:0.5
    }
    this.chain = Matter.Constraint.create(properties);
    World.add(world,this.chain)
    }
    display(){
       var pointA = this.chain.bodyA.position
       var pointB = this.chain.bodyB.position
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }   
}