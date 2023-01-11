// you can write js here
console.log('exo-2');

const myDate = new Date();
const journeyWeek = "Nous sommes un jour de semaine.";
const journeyWeekend = "Nous sommes un jour de weekend.";

let dateToday;
let dateHeure;

const isTesting = true;

if(isTesting) {

     dateToday = Number(prompt("Entrer le jour : "));
     dateHeure = Number(prompt("Entrer l'heure : "));
} else
{
    dateToday = myDate.getDay();
    dateHeure = myDate.getHours();
}

// Test si nous sommes un jour de semaine (0,6)
if (dateToday < 6 && dateToday > 0) {
    console.log(journeyWeek);
} else {
    console.log(journeyWeekend)
}

if( dateToday < 5 && dateHeure >= 17)
{
    console.log(journeyWeekend);
}
else
{
    console.log(journeyWeek);
}

if(dateToday === 0 && dateHeure <= 9)
{
    console.log(journeyWeekend);
}
else
{
    console.log("Nous sommes le ",myDate.getDay(), "de la semaine ", " il est : ", myDate.getHours(), myDate.getMinutes());
}