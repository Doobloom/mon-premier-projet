$(function(){ //charge le dom avec Jquery

					var scorej1=0;
					var scorej2=0;
					var nbe=5; //nombre de jets de dés
					var partie=true;//booléen

					$(".regle").click(function(){

						$("p").slideToggle();
						$(".ferme").hide();

					});//fin des règles
					
		$(".jouer").click(function(){
					nbe--;
			if(nbe<=0){partie=false //si nbe=0 alors partie fini
			$('.jouer').fadeOut(200,function(){
												$('.reload').fadeIn(200)
															.click(function(){location.reload() });
												});//fin reload
			
			};

			if (partie==true){

				$(".face1").html('<img src="images/des3D.gif"/>');
				$(".face2").html('<img src="images/des3D.gif"/>');

				setTimeout(function(){
							
			//le jeu se déroule ici
			var de1=Math.floor((6)*Math.random()+1);
			var de2=Math.floor((6)*Math.random()+1);

			$(".face1").html('<img src="images/des_0'+de1+'.png"/>');
			$(".face2").html('<img src="images/des_0'+de2+'.png"/>');

			if(de1>de2){
				scorej1++;
			 $('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score joueur2 = '+scorej2)
			}
				else if (de1<de2) {
						scorej2++;
					$('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score joueur2 = '+scorej2)
				}

					scorej1++; scorej2++;
					$('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score joueur2 = '+scorej2)
					

							},1000);
				} //fin du nombre de jets de dés

			//fin évènement bouton
			});

//fin Jquery
		});