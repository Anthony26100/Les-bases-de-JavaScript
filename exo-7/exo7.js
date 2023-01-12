console.log("exo-7");


// afficher


let traduction = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeux vidéos",
    show: "show"
}

let articles = document.querySelector('#article');

jsonDatas.forEach((e) => {
    // fait matcher les données avec l'objet traduction et type du fichier datas.js pour ajouter une donnée "trad" dans le fichier datas.js
    e.trad = traduction[e.type];
    articles.innerHTML += ('<div class="article">'+e.name+'</div>');
});
console.log(jsonDatas);

let btn = document.querySelector("btn");
let contenu = document.querySelector(".text");