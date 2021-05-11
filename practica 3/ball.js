class Ball {
	constructor(x,y,d){
		this.x  = x;
		this.y  = y;
		this.d  = d;
		this.stepY = 0
		this.stepX = 1
		this.player1P = 0;
		this.player2P = 0;
	}

display(){
	push();
	fill("white");
	circle(this.x,this.y,this.d);
	this.move();
	//this.hasCollision();
	pop();
}

move(){
	this.y += this.stepY;
	this.x += this.stepX;
}

hasCollision(stickX,stickY,stickY2){
text(player1P, width / 2, 20);
text(player2P, width / 2 + 20 , 20);


if ( (this.x - this.d / 2 <= stickX + 50 && this.x >= stickX ) && ( this.y >= stickY && this.y <= stickY + 100) ){
	this.stepY = Math.floor(Math.random()*3)-1;
	this.stepX = 1;
}

if ( (this.x + this.d <= width - stickX + 50 && this.x >= width - stickX ) && ( this.y >= stickY2 && this.y <= stickY2 + 100) ){
	this.stepY = Math.floor(Math.random()*3)-1;
	this.stepX = -1;
}




	if (this.x <= 0) {
		player1P++;
		this.reset();
	}else if(this.x + this.d / 2 >= width){
		player2P++;
		this.reset();
	}


	if (this.y  <= 0 && this.x < width / 2 ) {
		player2P++;
		this.reset();

	}else if(this.y + this.d / 2 >= height  && this.y > width / 2){

		player1P++;
		this.reset();
	}
		


}

reset(){
	this.x = width / 2;
	this.y = height / 2;
	this.stepY = 0;
	this.stepX = 1;
}

 
}