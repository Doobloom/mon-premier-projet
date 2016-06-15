/*
	var Carre = function(top, left, bgcolor){
	top=50;
	left=50;
	bgcolor= 'blue';
	$dom= $("#carre");
	distanceX= 500;
	distanceY= 0;
}

var interval = setInterval(function(){
	Carre.reload();
},200);

Carre.prototype.reload = function(){
	this.$dom.css({
		top: this.top,
		left: this.left,
		"background-color": this.bgcolor
	});
}

var carre = new Carre("#carre", "red");

var interval = setInterval(function(){
	carre.reload();
}, 100);

carre.prototype.create = function(id){
	var id = 0;
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	var a = Math.floor((Math.random() * 255) + 1);
	var color = "rgba ("+r+","+g+","+b+","+a+",1)";
	var dom = document.createElement("<div id = carre></div>");

	dom.setAttribute("id");
	dom.setAttribute("class", "cube");
	this.$dom = $(dom);
	$("body").append(this.$dom);
		if(id < 20){
		var carre = new Carre("#carre", bgcolor);
		id++;
	}
	else {

	}
}

*/

var Carre = function(top, left, bgcolor){
	top = 50;
	left = 50;
	bgcolor = 'red';
	$dom = $('#carre');
	distanceX = 500;
	distanceY = 0;
}

Carre.prototype.reload = function(){
	this.$dom.css({
		top: this.top,
		left: this.left,
		"background-color": this.bgcolor
	});
}

var interval = setInterval(function(){
	var rond = new Carre(, left, bgcolor);
	rond.reload();
},200);

