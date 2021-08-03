class Boat{
    constructor(x,y,w,h,boatPos){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,
        }
        this.w=w;
        this.h=h;
        this.boatPosition=boatPos
        this.image=loadImage("assets/boat.png");
        
      this.body=Bodies.rectangle(x,y,w,h,options);
      World.add(world,this.body);


    }
     remove(index){
         Matter.World.remove(world,boats[index].body);
         boats.splice(index,1);
     }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image,0,this.boatPosition,this.w,this.h);
       noTint();
       pop();
    }
}