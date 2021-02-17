class block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("block.png");
      this.visible=255;
    }
    display(){
     
      push();
      if(this.body.position.y>555){
        World.remove(world,this.body)
        this.visible=this.visible-5;
        tint(255,this.visible)
        imageMode(CENTER)
        image(this.image,this.body.position.x, this.body.position.y,30,40)
      }else{
        super.display();
      }
      pop();
    }
   scoreboard(){
    if(this.visible===250){
      score=score+1;
    }
   }
  
    }

  