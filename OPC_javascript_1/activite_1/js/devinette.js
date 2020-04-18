/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var reponse = askUser();
var essai = i + 1;

function askUser() {
	var i = Number(prompt("Saissez un nombre entre 1 et 100:"));
	return i;
}

for(var i = 0; i <= 6; i++) {
	var essai = i + 1;
	if(i == 6) {
		console.log("Perdu... la solution était "+solution);
		break;
	} else if(reponse < solution) {
		console.log(reponse+" est trop petit !");
		reponse = askUser();
	} else if(reponse > solution) {
		console.log(reponse+" est trop grand");
		reponse = askUser();
	} else {
		console.log("Bavo! La réponse était "+solution);
		console.log("Vous avez trouvé en "+ essai +" essai(s)");
		break;
	}
}