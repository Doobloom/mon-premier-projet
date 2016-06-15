$(function(){ //charge le dom avec Jquery

		$("button").click(function(){
			//le jeu se déroule ici
			var de1=Math.floor((6)*Math.random()+1);
			var de2=Math.floor((6)*Math.random()+1);

			$(".face1").html('<img src="images/des_0'+de1+'.png"/>');
			$(".face2").html('<img src="images/des_0'+de2+'.png"/>');

			if(de1>de2) {$('#result').html('Vous avez gagné une nouvelle partie')}
				else if (de1<de2) {$('#result').html('Perdu, insérez un COIN')}
					else {$('#result').html('FATALITY')};

			//fin évènement bouton
		});

//fin Jquery
});