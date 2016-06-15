$(".menu_point").css("display","none");

$(function(){

		$(".menu_chapitre").click(function(){
			$(this).next(".menu_point").slideToggle(2000).siblings(".menu_point").slideUp(2000);

	});//fin du menu déroulant


	//$('.menu_point li:first').css({backgroundColor:'yellow'}); // change la couleur de fond du premier li
	//$('.menu_point li:last').css({backgroundColor:'red'}); //change la couleur de fond du dernier li
	//$('.menu_point li:odd').css({backgroundColor:'blue'}); // change la couleur de fond des li impaires
	//$('.menu_point li:even').css({backgroundColor:'red'}); //change la couleur de fond des li paires
	//$('.menu_point li:eq(5)').css({backgroundColor:'black'}); //change la couleur de fond du 6ième li existant
	//$('.menu_point li:contains(Nature)').parent().css({backgroundColor:'red'}); //change la couleur de fond du li d'un menu_point qui contient'Nature' et tous ses parents avec
	//$('.menu_point li:first').next()
							// .css({backgroundColor:'red'}) //change la couleur de fond du premier li du premier menu_point
							// .addClass('content') //ajoute la class 'content' au premier li du premier menu_point
							// .end() //revient au premier li du premier menu_point
							// .children() //enfant
							// .css({backgroundColor:'yellow'}); //change la couleur du premier li du premier menu_point

		//$('li:first').attr('width','240px')
		//$('button').click(function(){

		//	$('table').attr('width',240);
			//alert($('table').attr('height'));


		

$('form').submit(function() {
	if($('input:first').val()=="login") {
		return true;
	}
	alert("Le mot de passe est invalide");
	 return false;
});

	$('#start').click(function(){
		$('#box').animate({left:150,width:200},1000,"easeInElastic") //définie l'animation qui doit durer 1seconde
		.delay(2000) //temps d'attente de 2secondes
		.animate({fontSize:"1em"},1000,"easeOutBounce")
		.animate({borderLeftWidth:15},1000,"easeOutCirc")
	});

		$('#reset').click(function(){
		$('#box').css({width:"",left:"",fontSize:"",borderLeftWidth:""}) //reset toute l'animation en remettant tout à zero
	});


});//fin Jquery

	function Site() {
	window.location.href='https://www.google.fr';	
}