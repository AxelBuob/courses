/* 
Activité 3
*/

// DÉCLARATION DES VARIABLES GLOBALES
var form = document.getElementById("form"),
    auteur = document.getElementById("auteur"),
    titre = document.getElementById("titre"),
    url = document.getElementById("url"),
    addLink = document.getElementById("addLink"),
    formInputs = Array.from(document.getElementsByTagName("input"));


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


// ATTACHE UN LIEN WEB AU DOM
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

// VERIFIE SI UN CHAMP EST VIDE, SINON RENVOI UN MESSAGE D'ERREUR
function validate(element) {
    var test = element.value.length === 0;
    var error = element.nextElementSibling;
    if(test) {
        element.className = "invalid";
        error.textContent = "Veuillez complèter ce champ !";
        error.className = "error active";
        return false;
    } else {
        element.className = "valid";
        error.textContent = "";
        error.className = "error";
        return true;
    }
}

// TEST SI L'URL SAISI COMMENCE BIEN PAR HTTP:// SINON LE RAJOUTE
function validateUrl(url){
    if ((url.value.indexOf("http://") !== 0) && (url.value.indexOf("https://") !== 0)) {
            url.value = "http://" + url.value;
    }
}

// TEST SI TOUS LES CHAMPS SONT REMPLIS AVANT L'ENVOI DU FORMULAIRE
function validateForm() {
    var titreOK = validate(titre),
        auteurOK = validate(auteur),
        urlOK = validate(url);
    if(titreOK && auteurOK && urlOK) {
        var data = new FormData(form);
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", data, function(response){
            // SI LA REQUÊTE N'ABOUTIS PAS LE FORMULAIRE EST RÉINITIALISER
            if(response.status >= 200 && response.status < 400) {
                attacheNouvelElement(response.responseText);
            } else {
                toggleClass(form, "hide");
                toggleClass(addLink, "hide");
                form.reset();
            }
        }, false);
    }
}

//RECUPÈRE LES LIENS SUR LE SERVEUR ET LES ATTACHE AU DOM
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function(response) {
    var listeLiens = JSON.parse(response.responseText);
    listeLiens.forEach(function(element) {
        attache(element);
    });
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
    e.preventDefault();
    validateUrl(url);
    validateForm();
});
