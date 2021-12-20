class Iron{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
		}
        this.body = Bodies.rectangle(x,y,30,60, options);
		this.width = 30;
        this.height = 60;
      
		World.add(world, this.body);
	}
    display()
	{
	
			var ironpos=this.body.position;		
			push()

			rectMode(CENTER)
			//strokeWeight(4);
			fill("brown")
            rect(ironpos.x, ironpos.y, this.width, this.height);
			pop()
			
	}
}