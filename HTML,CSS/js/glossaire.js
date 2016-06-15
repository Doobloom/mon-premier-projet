$(function(){

		$('#p1').click(function(){
			$('html,body').animate({scrollTop:$('#1').offset().top}, 1000);	
		});


	
});


/*	 var posY=$('#bougera').offset().top; //fonction qui fait une fenètre qui suis le haut de l'écran quand on y arrive
		$(window).scroll(function(){
			

		var scrollY=$(document).scrollTop();
		if (scrollY>=posY){
				$('#bougera').addClass('fixed');
			}
			else{
				$('#bougera').removeClass('fixed');
			}
			
		});//fin de la fonction de suivi de la case

		$(".menu_chapitre").click(function(){ //début du menu déroulant
			$(this).next(".menu_point").slideToggle(2000).siblings(".menu_point").slideUp(2000);

	});//fin du menu déroulant */