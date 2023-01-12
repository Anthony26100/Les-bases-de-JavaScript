// you can write js here

console.log("exo-5");

// Variables
let input = "Turpentine and turtles";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// Boucle pour trouver toutes les voyelles dans notre chaine initiale
for (let i = 0; i < input.length - 1; i++) {
  // Affiche la lettre courante dans la console
  console.log(input[i]);

  // Vérifie si la lettre courante est une voyelle
  if (vowels.indexOf(input[i].toLowerCase()) != -1) {
    // Utilise la méthode .push() sur le tableau resultArray pour y ajouter la lettre courante
    resultArray.push(input[i]);
    console.log(resultArray);
  }
}

// Bonus : J'utilise sans la méthode .indexOf()
for (let i = 0; i < input.length; i++) {
  // Affiche la lettre courante dans la console
  console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    // Vérifie si la lettre courante est une voyelle
    if (input[i].toLowerCase() === vowels[j]) {
      // Utilise la méthode .push() sur le tableau resultArray pour y ajouter la lettre courante
      resultArray.push(input[i]);
    }
  }
}

// J'utilise les méthodes join() et toUpperCase() pour un bon formatage
console.log(resultArray.join(".").toUpperCase());
