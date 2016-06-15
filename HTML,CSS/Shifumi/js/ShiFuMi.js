$(function(){ //charge le dom avec Jquery

					var scorej1=0; //score du joueur 1
					var scordi=0; //score de l'ordinateur
					var pierre=1;
					var feuille=2;
					var ciseaux=3;
					var nbe=15; //nombre de parties au total
					var partie=true;//booléen

					$("#regle").click(function(){ //fonction click sur la règle

						$("p").slideToggle(); //déroulement des règles
						$("#pierre").fadeIn(200); //apparition de l'image de la pierre
						$("#feuille").fadeIn(200); //apparition de l'image de la feuille
						$("#ciseaux").fadeIn(200); //apparition de l'image des ciseaux
						$("#choixbot").hide(); // on cache le choix de l'ordinateur et le choix du joueur
						$("#choixjoueur").hide();

							$("#ferme").click(function(){ // ouverture de la fonction qui ferme les règles
								$("#regle").hide(100);
							});//fin de la fonction ferme

							$("#foot").html( "Ton score : "+scorej1+"/ Score de l'ordinateur : "+scordi);

					});//fin des règles


					$("#pierre").click(function(){ //fonction click si le joueur choisi la pierre
						if(nbe<=0){
							$('#reload')
							.fadeIn(200)
							.click(function(){
								location.reload();
							});
							return false;
						};//fin reload
									nbe--;
											$("#pierre").hide();
											$('#feuille').hide();
											$('#ciseaux').hide();						

						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image de l'ordinateur pour le jeu

						if(symbol==1){ //si le nombre aléatoire est 1 l'ordinateur affichera la pierre
							$("#result").html("Egalité ! il reste encore les rounds suivants pour te rattraper");
							$("#choixbot").attr('src', 'images/pierremain.png').fadeIn(300);
							$("#choixjoueur").attr('src', 'images/pierremain.png').fadeIn(300);
							scordi++; scorej1++;

						} else if(symbol==2){ //si le nombre aléatoire est 2 l'ordinateur affichera la feuille
							$("#result").html("Perdu ! tu as pris un coup, renvois en deux fois plus !");
							$("#choixbot").attr('src', 'images/feuillemain.png').fadeIn(300);
							$("#choixjoueur").attr('src', 'images/pierremain.png').fadeIn(300);

							scordi++;

							} else { //si le nombre aléatoire est 3 l'ordinateur affichera les ciseaux
								$("#result").html("Gagné !!!! la ceinture de champion est à toi!");
								$("#choixbot").attr('src', 'images/ciseauxmain.png').fadeIn(300);
								$("#choixjoueur").attr('src', 'images/pierremain.png').fadeIn(300);

								scorej1++;
							}

							$("#rejouer").fadeIn(200)
								.click(function(){
									$("#choixbot").hide();
									$("#choixjoueur").hide();
									$("#pierre").fadeIn(200);
									$('#feuille').fadeIn(200);
									$('#ciseaux').fadeIn(200);
							}); //fin de la fonction click sur rejouer

								$("#foot").html( "Ton score : "+scorej1+"/ Score de l'ordinateur : "+scordi);

					});//fin de la fonction click sur la pierre

					$("#feuille").click(function(){//fonction click si le joueur choisi la feuille
						if(nbe<=0){
							$('#reload')
							.fadeIn(200)
							.click(function(){
								location.reload();
							});
							return false;
						};//fin reload
									nbe--;
											$("#feuille").hide();
											$('#pierre').hide();
											$('#ciseaux').hide();	
						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image du joueur 2 pour le jeu

						if(symbol==2){ //si le nombre aléatoire est 2 l'ordinateur affichera la feuille
							$("#result").html("Egalité ! la force sera avec toi... un jour");
							$("#choixbot").attr('src', 'images/feuillemain.png').fadeIn(200);
							$("#choixjoueur").attr('src', 'images/feuillemain.png').fadeIn(200);

							scordi++; scorej1++;

						} else if(symbol==3){ //si le nombre aléatoire est 3 l'ordinateur affichera les ciseaux
							$("#result").html("Perdu ! ré-affronter l'ordinateur, tu devras!");
							$("#choixbot").attr('src', 'images/ciseauxmain.png').fadeIn(200);
							$("#choixjoueur").attr('src', 'images/feuillemain.png').fadeIn(200);

							scordi++;

							} else { //si le nombre aléatoire est 1 l'ordinateur affichera la pierre
								$("#result").html("Gagné !!!! la force est puissante en toi");
								$("#choixbot").attr('src', 'images/pierremain.png').fadeIn(200);
								$("#choixjoueur").attr('src', 'images/feuillemain.png').fadeIn(200);

								scorej1++;
							}

							$("#rejouer").fadeIn(200)
										.click(function(){
											$("#choixbot").hide();
											$("#choixjoueur").hide();
											$("#pierre").fadeIn(200);
											$('#feuille').fadeIn(200);
											$('#ciseaux').fadeIn(200);
								}); //fin de la fonction click sur rejouer

										$("#foot").html( "Ton score : "+scorej1+"/ Score de l'ordinateur : "+scordi);

					});//fin de la fonction click sur la feuille


					$("#ciseaux").click(function(){//fonction click si le joueur choisi les ciseaux
						if(nbe<=0){
							$('#reload')
							.fadeIn(200)
							.click(function(){
								location.reload();
							});
							return false;
						};//fin reload
									nbe--;	
											$("#ciseaux").hide();
											$('#pierre').hide();
											$('#feuille').hide();
						var symbol=Math.floor((3)*Math.random()+1); //variable aléatoire qui servira à choisir l'image du joueur 2 pour le jeu

						if(symbol==3){ //si le nombre aléatoire est 3 l'ordinateur affichera les ciseaux
							$("#result").html("oh ben non, dommage, Egalité ! ");
							$("#choixbot").attr('src', 'images/ciseauxmain.png').fadeIn(300);
							$("#choixjoueur").attr('src', 'images/ciseauxmain.png').fadeIn(300);

							scordi++; scorej1++;

						} else if(symbol==1){ //si le nombre aléatoire est 1 l'ordinateur affichera la pierre
							$("#result").html("Perdu ! l'échec n'est plus permis");
							$("#choixbot").attr('src', 'images/pierremain.png').fadeIn(300);
							$("#choixjoueur").attr('src', 'images/ciseauxmain.png').fadeIn(300);

							scordi++;

							} else { //si le nombre aléatoire est 2 l'ordinateur affichera la feuille
								$("#result").html("Gagné !!!! tu as le droit de rejouer");
								$("#choixbot").attr('src', 'images/feuillemain.png').fadeIn(300);
								$("#choixjoueur").attr('src', 'images/ciseauxmain.png').fadeIn(300);

								scorej1++;
							}

							$("#rejouer").fadeIn(200)
								.click(function(){
										$("#choixbot").hide();
										$("#choixjoueur").hide();
										$("#pierre").fadeIn(200);
										$('#feuille').fadeIn(200);
										$('#ciseaux').fadeIn(200);
							}); //fin de la fonction click sur rejouer

								$("#foot").html( "Ton score : "+scorej1+"/ Score de l'ordinateur : "+scordi);

					});//fin de la fonction click sur les ciseaux


		});//fin Jquery