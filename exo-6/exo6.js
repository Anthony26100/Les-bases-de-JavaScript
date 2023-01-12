// Cours 8 de Codecademy
console.log("exo-6");

let joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. 
// Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true;
console.log(joeInfo.garage);

// 4 Team

let team = {
    players : [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    games : [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints:27 
    }],
    addPlayer(firstName, lastName, age) {
        //this.players.push({firstName});
        //this.players.push({lastName});
        // this.players.push({age});
        this.players.push({firstName, lastName, age});
    },
    addGame(opponent, teamPoints, opponentPoints)
    {
        this.games.push({opponent, teamPoints, opponentPoints});
    }
};

console.log(team);

team.addPlayer("Bouboule", "Chauve", 30);
team.addPlayer("toto", "tata", 25);

console.log(team);

team.addGame("Lyon", 3, 0);
team.addGame("Lyon", 6, 5);
team.addGame("Lyon", 6, 4);
team.addGame("St-Etienne", 4, 1);
team.addGame("St-Etienne", 6, 1);

console.log(team);

// Calcul de la somme des points de l'équipe
let test = team.games.sort();
console.log(test);
let a = 0;
//
team.games.forEach(game => {
    if(game.opponent === "Lyon")
    {
        a = a + game.teamPoints;
    }
});
console.log(a);

let calculPointsTeam = team.games.reduce((accumulator, games) => 
{
    if(games.opponent === "Lyon")
    {
        accumulator = accumulator + games.teamPoints;
    }
    return accumulator
}, 0);

console.log(`Total team points: ${calculPointsTeam}`);

// Calculer la moyenne des points de l'équipe adverse
let calculOponentTeam = team.games.reduce((accumulator, games) => 
{
    if(games.opponent === "Lyon")
    {
    accumulator = accumulator + games.opponentPoints
    }

    return accumulator;
}, 0);

console.log(calculOponentTeam);

let averageOpponentTeam = calculOponentTeam / team.games.length;

console.log(`Average opponent points: ${averageOpponentTeam}`);

// Trouver le joueur le plus âgé
let oldestPlayer = team.players.reduce((oldest, player) => {

    return (player.age > oldest.age) ? player : oldest;

}, {age: 0});
console.log(`Oldest player: ${oldestPlayer.firstName}, ${oldestPlayer.lastName}`);

// Bonus : Trier les joueurs par ordre alphabétique
team.players.sort((a, b) => {

    if (a.lastName < b.lastName) return -1;

    if (a.lastName > b.lastName) return 1;

    return 0;
});

console.log("Players sorted by last name:", team.players);

team.players.forEach((nom, index) => {
    console.log(index + 1, nom.firstName);
})
