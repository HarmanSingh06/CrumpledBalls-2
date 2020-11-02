//This class is the class whic is getting displayed but its not present in the class
class Box{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        this.color = color;
        //World.add(world, this.body)
    }
    display(){
        //fill(this.color);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
    }
}