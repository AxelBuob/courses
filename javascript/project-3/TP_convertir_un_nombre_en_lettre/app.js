

function nbrToLetter(nbr) {
	var numberText;
	var arrayNbr = nbr.split('');

	if(nbr.length == 1) {
		numberText = unites[arrayNbr[0]-1];
	} else if (nbr.length == 2) {
		numberText = dizaines[arrayNbr[0]-1]+' ';
		numberText += unites[arrayNbr[1]-1];
	} else if (nbr.length == 3) {
		numberText = centaines[arrayNbr[0]-1] +' ';
		numberText += dizaines[arrayNbr[1]-1] +' ';
		numberText += unites[arrayNbr[2]-1];
	} else {
		console.log('undefined');
	}

	alert(numberText);
	start();
}

function control(nbr) {
	if(nbr.length <= 0 || nbr.length > 3) {
		console.log("Veuillez rentrer un nombre valide.")
	} else {
		parseInt(nbr, 10);
		nbrToLetter(nbr);
	}
}

var unites = ['un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix'],
	dizaines = ['dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix','cent'],
	centaines = ['cent','deux cents','trois cent','quatre cent','cinq cents','six cents','sept cents','huit cents','neuf cents'],
	nbr;

function start() {
	nbr = prompt("Entrez un nombre entre 0 et 999.");
	control(nbr);
}

start();