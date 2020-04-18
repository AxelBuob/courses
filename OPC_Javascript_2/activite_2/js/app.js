/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

// DÉCLARATION DES VARIABLES GLOBALES
var form = document.getElementById("form");
var auteur = document.getElementById("auteur");
var titre = document.getElementById("titre");
var url = document.getElementById("url");
var addLink = document.getElementById("addLink");
var formInputs = Array.from(document.getElementsByTagName("input"));

// ATTACHE LES LIENS DU TABLEAU LISTELIENS AU DOM
function attache(element) {
    var content = document.getElementById("contenu"),
        div = document.createElement("div"),
        h4 = document.createElement("h4"),
        a = document.createElement("a"),
        url = document.createElement("span"),
        author = document.createElement("span"),
        firstEl = content.childNodes[0];

    div.classList.add("lien");

    h4.style.display = "inline";

    a.href = element.url;
    a.textContent = element.titre;
    a.style.textDecoration = "none";
    a.style.color = "#428bca";
    a.style.paddingRight = "5px";

    url.textContent = element.url;
    url.style.display = "inline";

    author.textContent = "Ajouté par "+element.auteur;
    author.style.display = "block";

    content.insertBefore(div, firstEl);
    div.appendChild(h4);
    h4.appendChild(a);
    div.appendChild(url);
    div.appendChild(author);
}

// ATTACHE UN NOUVEL OBJET AU DOM
function attacheNouvelElement(){
    var element = {},
        message = document.getElementById("message"),
        titreMessage = document.getElementById("titreMessage");

    element.titre = titre.value;
    element.auteur = auteur.value;
    element.url = url.value;
    attache(element);

    titreMessage.textContent = element.titre;
    toggleClass(message,"hide",2000);
    toggleClass(form, "hide");
    toggleClass(addLink, "hide");

    form.reset();
}

// AJOUTE OU RETIRE UNE CLASS À UN ÉLÉMENT
function toggleClass(element, cla, timeout) {
    if(timeout) {
        element.classList.remove(cla);
        setTimeout(function() {
            element.classList.add(cla);
        }, timeout);
    } else {
        if(element.classList.contains(cla)){
            element.classList.remove(cla);
        } else {
            element.classList.add(cla);
        }
    }
}

// VERIFIE SI UN CHAMP EST VIDE, SINON RENVOI UN MESSAGE D'ERREUR
function validate(element) {
    var test = element.value.length === 0;
    var error = element.nextElementSibling;
    if(test) {
        // element.className = "invalid";
        error.textContent = "Veuillez complèter ce champ !";
        error.className = "error active";
        return false;
    } else {
        // element.className = "valid";
        error.textContent = "";
        error.className = "error";
        return true;
    }
}

// TEST SI TOUS LES CHAMPS SONT REMPLIS AVANT L'ENVOI DU FORMULAIRE
function validateForm() {
    var titreOK = validate(titre),
        auteurOK = validate(auteur),
        urlOK = validate(url);
    if(titreOK && auteurOK && urlOK) {
        attacheNouvelElement();
        return true;
    } else {
        return false;
    }
}

// TEST SI L'URL SAISI COMMENCE BIEN PAR HTTP:// SINON LE RAJOUTE
function validateUrl(url){
    if ((url.value.indexOf("http://") !== 0) && (url.value.indexOf("https://") !== 0)) {
            url.value = "http://" + url.value;
    }
}

// PARCOURS LE TABLEAU LISTELIENS
listeLiens.forEach(function(element){
    attache(element);
});

// GESTION DES EVENEMENTS
addLink.addEventListener("click", function(element){
    toggleClass(form, "hide");
    toggleClass(addLink, "hide");
});

formInputs.forEach(function(element){
    element.addEventListener("input",function(){
        validate(element);
    });
});

form.addEventListener("submit",function(e){
    validateUrl(url);
    validateForm();
    e.preventDefault();
});



