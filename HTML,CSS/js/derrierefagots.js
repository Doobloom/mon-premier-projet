$(document).ready(function(){

$('#blue').click(function(){
	var i=0;
	if(i==0){
		$(this).animate({left:'5%',top:'5%'},1000,"linear");//définie l'animation qui doit durer 1seconde
		i++;
	}
	else{$(this).animate({left:'55%',top:'50%'},1000,'linear');
		i--;
	}
	});


$('#yellow').click(function(){
		$(this).animate({left:'5%',top:'95%'},1000,"linear"); //définie l'animation qui doit durer 1seconde
	});

$('#green').click(function(){
		$(this).animate({left:'95%',top:'95%'},1000,"linear"); //définie l'animation qui doit durer 1seconde
	});

$('#red').click(function(){
		$(this).animate({left:'95%',top:'5%'},1000,"linear"); //définie l'animation qui doit durer 1seconde
	});

});