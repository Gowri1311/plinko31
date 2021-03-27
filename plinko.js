class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0

      }
      this.body = Bodies.circle(x,y,20,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y, 20,20);
    }
  };