//Created this class To Make the orginal boxes that the ball is going to hit this class is hidden
class RBox{
    constructor(x,y,width,height,color){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        //this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        this.color = color;
        World.add(world, this.body)
    }
    display(){
        fill(this.color);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
    }
}