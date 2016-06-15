User = function(name, password){
	this.name = name;
	this.password = password;
}

User.prototype.connect = function(name, password){

	for(i=0;i<Userlist.length;i++){

		var currentUser = Userlist[i];

		if (currentUser.name == this.name){

			if(currentUser.mdp == this.password){

				this.age = currentUser.age;

				this.lastname = currentUser.lastname;

				this.notes = currentUser.notes;

				return true;			
			}
			return false;
		}
		return false;
	}
	return false;
}

$(document).ready(function(){

	var mainUser;

	$('#connection').click(function(event){

		event.preventDefault(); //évite que la page se rafraichisse à chaque fois

		var username = $('#username').val();

		var password = $('#mdp').val();

		mainUser = new User(username, password);

		if(mainUser.connect() == true){
			//remplir la liste

			$('#connect').fadeOut();
			
			$('#main').fadeIn();
		}
		else{

			alert('mauvais identifiants ou mot de passe !');
		}

	})


})