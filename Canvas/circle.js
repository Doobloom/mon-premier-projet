var circle = function(context, data){ //data contiendra toutes les données propres aux petits cercles qu'on va créer

	this.context = context;

	this.X = data.x;
	this.Y = data.y;
	this.Radius = data.radius;
	this.debAngle = 0; //point de départ du cercle
	this.finAngle = 2*Math.PI; //point de fin du cercle
	this.couleurint = data.couleurint;
	this.couleurext = data.couleurext;
	this.speed = data.speed;

}

circle.prototype.draw = function(){

	this.context.beginPath();
	this.context.arc(
		this.X,
		this.Y,
		this.Radius,
		this.debAngle,
		this.finAngle
		);

		this.context.fillStyle = this.couleurint;
      	this.context.fill();
      	this.context.lineWidth = 1;
      	this.context.strokeStyle = this.couleurext;
      	this.context.stroke();

}