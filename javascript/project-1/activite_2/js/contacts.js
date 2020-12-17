/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contactModel = {
    firstName: "",
    lastName: "",
    init: function(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    },
    showContact: function() {
        return this.firstName + " " + this.lastName;
    }
}

var contact = [];

contact[0] = Object.create(contactModel);
contact[1] = Object.create(contactModel);

contact[0].init("Axel","Buob");
contact[1].init("Onja","Ramarozafy");

function listContact() {
    for (var i = 0; i < contact.length; i++) {
        console.log(contact[i].showContact());
    }
    main();
}

function addContact() {
    var i = contact.length;
    contact[i] = Object.create(contactModel);
    contact[i].firstName = prompt("Entrez le prénom du contact:");
    contact[i].lastName = prompt("Entrez le nom du contact:");
    main();
}

function main() {
    while (o != 0 && o != 1 && o != 2) {
        var o = Number(prompt("Choisissez une option:"));
    }
    if (o == 1) {
        listContact();
    } else if (o == 2) {
        addContact();
    } else {
        console.log("Aurevoir !");
    }
}

console.log("Bienvenue dans le gestionnaire de contact !");
console.log("1: Lister les contacts\n2: Ajouter un contact\n0: Quitter")
main();