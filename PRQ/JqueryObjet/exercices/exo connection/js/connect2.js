var User = function(name, password){
	this.name = name;
	this.password = password;
}

User.getUserByName = function(name){
	var user = new User(login, mdp);
	for(i=0; i<Userlist.length; i++){ //on créer une variable i pour parcourir le tableau de Userlist
		var currentUser = Userlist[i]; // on créer une variable pour stocker la fiche de l'utilisateur sur lequel on se trouve lorsqu'on a i
			if(currentUser.name == name){ // si le name de l'utilisateur actuel est égal au name de l'utilisateur sur lequel on se trouve (dans le tableau) alors...
				return currentUser;
			}
			else {
				return false;
			}
	}
}

User.prototype.connect = function(){
	if(User.getUserByName().name == this.name){
		if(User.getUserByName().password == this.password){
			var lastname = User.lastname;
			var note = User.notes;
			return true;
		}
		return false;
	}
	return false;
}




var user1 = new User('gerard', 'pass');
user1.connect();
console.log(user1);
var user2 = new User('Pierre', 'toto');
user2.connect();
console.log(user2);
