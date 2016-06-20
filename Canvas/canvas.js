var GAME = {

	canvas: document.getElementById("Mycanvas"),
	context: document.getElementById('Mycanvas').getContext('2d'),
	width: 1000,
	height: 600,
	player : null,
	mouse: {
		x:0,
		y:0
	},
	circles: [],
	initGame : function(){
		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}
};

GAME.initGame();

GAME.player = new circle(GAME.context,{
	x:100,
	y:100,
	radius:50,
	couleurint: 'green',
	couleurext: 'yellow',
	speed: 20
})



function step(){
/**/
	GAME.context.clearRect(0 /*X*/, 0 /*Y*/, 1000 /*Width*/, 600 /*Height*/);

	GAME.player.draw();

	for(var i in GAME.circles){
		GAME.circles[i].draw();
	}
	
/*	if(Mathabs(GAME.mouse.x - GAME.player.X)> GAME.mouse.speed){
	if(GAME.mouse.x > GAME.player.X){

		GAME.player.X = GAME.player.X;
	}
	else if(GAME.mouse.x < GAME.player.X){

		GAME.player.X = GAME.player.X-2;
	}
	if(GAME.mouse.y > GAME.player.Y){

		GAME.player.Y = GAME.player.Y+2;
	}
	else if(GAME.mouse.y < GAME.player.Y){

		GAME.player.Y = GAME.player.Y-2;
	}

	/*if(GAME.player.X >= 1000 && GAME.player.Y >= 300){
		GAME.player.X++;
		GAME.player.Y--;
	}
	else if(GAME.player.X < 1000 && GAME.player.Y < 300){
		GAME.player.X++;
		GAME.player.Y++;
	}
*/
	var diffX = GAME.mouse.x - GAME.player.X;
	var diffY = GAME.mouse.y - GAME.player.Y;

	GAME.player.X += diffX/GAME.player.speed;
	GAME.player.Y += diffY/GAME.player.speed;

/**/
	requestAnimationFrame(step);

}

requestAnimationFrame(step); //Premier appel de la function step

GAME.canvas.addEventListener('mousemove', function(event){

	GAME.mouse.x = event.pageX;
	GAME.mouse.y = event.pageY;

});

GAME.canvas.addEventListener('click', function(){
	var circle2 = new circle(
		GAME.context,
		{
			x: GAME.player.X,
			y: GAME.player.Y,
			radius: 10,
			couleurint: 'red',
			couleurext: 'yellow',
			speed: 8
		});
	GAME.circles.push(circle2);
})