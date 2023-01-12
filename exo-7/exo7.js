console.log("exo-7");

// afficher

let traduction = {
  car: "voiture",
  house: "maison",
  game: "jeu",
  videoGame: "jeux vidéos",
  show: "show",
};

let articles = document.querySelector("#article");

jsonDatas.forEach((e) => {
  // fait matcher les données avec l'objet traduction et type du fichier datas.js pour ajouter une donnée "trad" dans le fichier datas.js
  e.trad = traduction[e.type];
  articles.innerHTML += '<div class="article">' + e.name + "</div>";
});
console.log(jsonDatas);

let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let sect = document.querySelector(".text");
  let para = document.createElement("p");
  para.textContent = traduction.videoGame;
  para.textContent = jsonDatas[0].name;
  sect.appendChild(para);
  console.log(para);
  console.log(jsonDatas);
  //ontenu.innerHTML += `Articles :  ${e}`;
  //console.log(contenu);
});
