class Ground
{
	constructor(x,y,width,height)
	{
		var gnd_options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(x, y, width, height , gnd_options);
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;

 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("teal");
			rect(0,0,this.width, this.height);
			pop()
			
	}

}