class Particle {
    constructor(x,y) {
      var options = {
          
          restitution:0.5
          

      }
      this.body = Bodies.circle(x,y,10,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, 10,10);
    }
  };