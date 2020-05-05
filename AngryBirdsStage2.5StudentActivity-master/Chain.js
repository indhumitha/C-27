class Chain{
    constructor(a,b){

    var option = {
      bodyA : a,
      bodyB: b,
      stiffness:0.04,
      length:100
    }
    this.chain = Constraint.create(option);
    World.add(world,this.chain);
}
display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}