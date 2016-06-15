//à propos de variables locales et globales

var globale='variable globale<br>';
var locale="variable locale<br>"
function testvar(){
	var locale="coucou";
	globale="bonjour tout le monde"; //ne pas faire...
}

document.write(globale+locale);

function parle(mots){
	document.write(mots);
}

parle("Ecris quelque chose");
parle("dis autre chose");

variable="<br>je veux encore dire quelques chose";
parle(variable);

function parle2(mots,remot){ //les mots oranges sont des variables
	document.write(mots+"autre mot"+remot);
}

parle2("coucou","comment vas tu?");

function parleretour(mots){

	return mots;
	alert("ceci ne s'affichera pas"); //rien ne s'affiche après un return
}

retour=parleretour("<br>Ceci sont des mots retournés<br>");

document.write(retour);
document.getElementById('test').innerHTML=(retour); //méthode longue javascript


function Moyenne(a,b,c,d){
	var result=(a+b+c+d)/4;
		return result;
}

var score=Moyenne(8,4,6,5);

document.write(score+"<br>");



function nombre(x){
		var rand=Math.floor((x)*Math.random()+1);

		return rand;
}

var lol=nombre(200);
document.write(lol);

// .val() sert à récupérer les valeurs entrées dans un champ

$(function(){
$("button").click(function(){
    		alert($("input:text").val());

    		return button;

    });

});