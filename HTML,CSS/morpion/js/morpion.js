		var morpion=[[],[],[]];
		var partie=true;
		var joueurs=1;
		var marque;
		var chgjoueur='X';
		var posx;
		var posy;
		

$(function(){

		$('td').click(function(){
			$(this).html(chgjoueur).addClass('rempli').off();

				if (partie==true){

				posx= $(this).index(); //enregistre dans l'index la coordonnée x
				posy= $(this).closest('tr').index(); //enregistre dans l'index la coordonnée y

				morpion[posx][posy]=chgjoueur;

			if(joueurs==1){
				joueurs--;
				chgjoueur='O';
			} //fin du if
			else {
				joueurs++;
				chgjoueur='X';
			} //fin du else
				
				

				$('.debug').html(posx + ' ' + posy); //donne les coordonnées de la case cliquée

		a=morpion[0][0];
		b=morpion[1][0];
		c=morpion[2][0];
		d=morpion[0][1];
		e=morpion[1][1];
		f=morpion[2][1];
		g=morpion[0][2];
		h=morpion[1][2];
		i=morpion[2][2];

			if (a=='X' && b=='X' && c=='X'||
				d=='X' && e=='X' && f=='X'||
				a=='X' && e=='X' && i=='X'||
				g=='X' && h=='X' && i=='X'||
				a=='X' && d=='X' && g=='X'||
				b=='X' && e=='X' && h=='X'||
				c=='X' && f=='X' && i=='X'||
				c=='X' && e=='X' && g=='X') {

				$('.finpartie').html('le joueur à la croix gagne!'); // vérifie que les solutions avec X existent

				partie==false;


			}

				else if(a=='O' && b=='O' && c=='O'||
						d=='O' && e=='O' && f=='O'||
						a=='O' && e=='O' && i=='O'||
						g=='O' && h=='O' && i=='O'||
						a=='O' && d=='O' && g=='O'||
						b=='O' && e=='O' && h=='O'||
						c=='O' && f=='O' && i=='O'||
						c=='O' && e=='O' && g=='O') {

					$('.finpartie').html('le joueur au rond gagne!'); // vérifie que les solutions avec O existent
					partie==false;
				}

				else if (!$('td').hasClass('rempli')){

					$('.finpartie').html('égalité'); 
					partie==false;
				}

			}
	
		});  //fin de td click

}); //fin de Jquery