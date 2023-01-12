// you can write js here

console.log("exo-4");

let secretMessage = [
  "Learning",
  "isn't",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it's",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Etape 1 : Enlever le dernier élément du tableau

secretMessage.pop();

console.log(secretMessage);

// Etape 2 : Ajouter des mots au tableau

secretMessage.push("to", "program");

console.log(secretMessage);

// Etape 3 : Changer un mot du tableau

secretMessage[6] = "right";

console.log(secretMessage);

// Etape 4 : Supprimer le premier élément du tableau

secretMessage.shift();

console.log(secretMessage);

// Etape 5 : Ajouter une chaine au début du tableau

secretMessage.unshift("Programming");

console.log(secretMessage);

// Etape 6 : Remplacer des mots par un seul mot

secretMessage.splice(5, 5, "know");

console.log(secretMessage);

// Etape7 : Utilisation de la méthode .join() pour afficher le message secret

secretMessage.join(" ");

console.log(secretMessage);
