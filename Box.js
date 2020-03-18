class Box{
constructor() {
    var options = {
        restitution:1,
        friction:2,
        density:2.1

    }
    this.body = Bodies.rectangle(30,40,30,40,options);

    World.add (world,this.body);


}
display(){
 var pos=this.body.position;
 var angle= this.body.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 rectMode(CENTER);
 fill (255);
 rect(pos.x,pos.y,this.width,this.height) ;
 pop();


} 
    
}