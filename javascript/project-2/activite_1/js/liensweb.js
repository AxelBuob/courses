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
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

function createElement(link) {
        var content = document.getElementById("contenu"),
        div = document.createElement("div"),
        a = document.createElement("a"),
        url = document.createElement("span"),
        author = document.createElement("span"),
        br = document.createElement("br");

        div.classList.add("lien");
        div.classList.add("link_"+link.id);

        a.href = link.url;
        a.textContent = link.titre;
        a.style.textDecoration = "none";
        a.style.color = "#428bca";
        a.style.paddingRight = "5px";

        url.textContent = link.url;
        url.classList.add("url");

        author.textContent = "Ajouté par "+link.auteur;
        author.classList.add("author");

        content.appendChild(div);
        div.appendChild(a);
        div.appendChild(url);
        div.appendChild(br);
        div.appendChild(author);
}

function main() {
    for(var i = 0; i < listeLiens.length; i++) {
        listeLiens[i].id = i;
        createElement(listeLiens[i]);
    }
}

main();


