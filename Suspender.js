class Suspender{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            //stroke(0);
            strokeWeight (1)
            var Anchor1 = pointA.x
            var Anchor2 = pointA.y
            
            var Anchor3 = pointB.x+this.offsetX
            var Anchor4 = pointB.y+this.offsetY
            line (Anchor1,Anchor2,Anchor3,Anchor4);
        }
        
}