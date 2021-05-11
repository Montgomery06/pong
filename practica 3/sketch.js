let x = 200;
let y = 300;
let enter = true;
let x2 = 200;
let y2 = 300;
let b;
let player1P = 0;
let player2P = 0;



function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background("black");


	if(enter){
		push();
		textSize(40);
		fill("blue");
		textAlign(CENTER, CENTER);
		text("Press intro", width / 2, height /2);
		pop();
	}

	fill("white")



	if (keyIsDown(DOWN_ARROW) && !enter) {
		y++;
	}	

	if (keyIsDown(UP_ARROW) && !enter) {
		y--;
	}	

	if (keyIsDown(83) && !enter) {
		y2++;
	}	

	if (keyIsDown(87) && !enter) {
		y2--;
	}	



	if (!enter){

		rect(x,y,50,100);
		rect(width - x2,y2,50,100);
		b.display();       
		b.hasCollision(x,y,y2,player1P,player2P);

	}




}

function keyPressed() {

	if(keyCode === ENTER){
	    b = new Ball(width / 2,height / 2,20); 
		enter = false;
	} 


}







