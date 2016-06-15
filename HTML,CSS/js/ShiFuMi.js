$(function(){ //charge le dom avec Jquery

					var scorej1=0; //score du joueur 1
					var scordi=0; //score de l'ordinateur
					var pierre=1;
					var feuille=2;
					var ciseaux=3;
					var nbe=15; //nombre de parties au total
					var partie=true;//booléen

					$("#regle").click(function(){

						$("p").slideToggle();

							$("#ferme").click(function(){
								$("#regle").hide(100);
							});//fin de la fonction ferme

					});//fin des règles

					

					$("#pierre").click(function(){ //fonction click si le joueur choisi la pierre
						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image du joueur 2 pour le jeu

						if(symbol==1){
							$("#result").html("Egalité ! il reste encore le round suivant pour te rattraper");

						} else if(symbol==2){
							$("#result").html("Perdu ! tu as pris un coup, renvois en deux fois plus !");

							scordi++;

							} else {
								$("#result").html("Gagné !!!! la ceinture de champion est à toi!");

								scorej1++;
							}

							$("#foot").html("Score de l'ordinateur : "+scordi+" Ton score : "+scorej1);

					});//fin de la fonction click sur la pierre

					$("#feuille").click(function(){//fonction click si le joueur choisi la feuille
						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image du joueur 2 pour le jeu

						if(symbol==1){
							$("#result").html("Egalité ! la force sera avec toi... un jour");

						} else if(symbol==2){
							$("#result").html("Perdu ! ré-affronter l'ordinateur, tu devras!");

							scordi++;

							} else {
								$("#result").html("Gagné !!!! la force est puissante en toi");

								scorej1++;
							}

							$("#foot").html("Score de l'ordinateur : "+scordi+" Ton score : "+scorej1);

					});//fin de la fonction click sur la feuille

					$("#ciseaux").click(function(){//fonction click si le joueur choisi les ciseaux
						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image du joueur 2 pour le jeu

						if(symbol==1){
							$("#result").html("Egalité ! ah ben non, dommage ");

						} else if(symbol==2){
							$("#result").html("Perdu ! l'échec n'est plus permis");

							scordi++;

							} else {
								$("#result").html("Gagné !!!! tu as le droit de rejouer");

								scorej1++;
							}

							$("#foot").html("Score de l'ordinateur : "+scordi+" Ton score : "+scorej1);

					});//fin de la fonction click sur les ciseaux



				/*	$(".feuille").click(function(){});
					$(".ciseaux").click(function(){});

					if (partie==true){};

				$(".face1").html('<img src="images/des3D.gif"/>');
				$(".face2").html('<img src="images/des3D.gif"/>');

				setTimeout(function(){ //le jeu se déroule ici
			
			var de1=Math.floor((3)*Math.random()+1);

			$(".face1").html('<img src="images/des_0'+de1+'.png"/>');

			if(de1>de2){
				scorej1++;
			 $('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score ordi = '+scordi)
			}
				else if (de1<de2) {
						scordi++;
					$('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score ordi = '+scordi)
				}

					scorej1++; scordi++;
					$('#result').html('Score joueur1 = '+scorej1+'<br>'+'Score ordi = '+scordi)
					

							},1000);
				}); //fin du nombre de jets de dés*/

		});//fin Jquery