class Iron{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
		}
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height, options);
		this.width = 30;
        this.height = 60;
        this.x=x;
        this.y=y;
		World.add(world, this.body);
	}
    display()
	{
	
			push()

			rectMode(CENTER)
			//strokeWeight(4);
			fill("brown")
            rect(this.x, this.y, this.width, this.height);
			pop()
			
	}
}