class Stone{
	constructor(x,y)
	{
		var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
		}
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width = 50;
        this.height = 50;
        this.x=x;
        this.y=y;
		World.add(world, this.body);
	}

    display()
	{
	
			push()

			rectMode(CENTER)
			//strokeWeight(4);
			fill("grey")
            rect(this.x,this.y, this.width, this.height);
			pop()
			
	}

}