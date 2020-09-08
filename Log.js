class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    strokeWeight(4);
    stroke(200,100,1);
    Matter.Body.setAngle(this.body, angle);
  }
}