class Paper 
{ 
  constructor(x,y,r)
  {
  var options = 
  {
    isStatic: false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
  }

  this.body = Matter.Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world,this.body);
  }
    
  display()
  {
    var pos = this.body.position;
    push()
    
    rectMode(CENTER);
    strokeWeight(2);
    fill(0,255,0)
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.r);
    pop()
  }
}