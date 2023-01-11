// you can write js here
console.log('hello from file');


// Etape 1 & 5
// let kelvins = 294;
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log(kelvins);
// Etape 2
let celsius = kelvins - 273;
console.log(celsius);

// Etape 3
// Je multiple celsius par (9/5) et j'ajoute 32 pour avoir la température en Fahrenheit.
let fahrenheits = celsius * (9/5) + 32;
console.log(fahrenheits);

// Etape 4
// J'utilise la méthode Math.floor("variables ou valeurs") pour arrondir mon résultat
let floor = Math.floor(fahrenheits);
console.log(floor);



