//A
let netsAvg = (96 + 108 + 89) / 3;
let knicksAvg = (88 + 91 + 110) / 3;

if (netsAvg > knicksAvg) {
    console.log("Nets win");
}
else if (netsAvg < knicksAvg) {
    console.log("Knicks win");
}
else {
    console.log("Draw");
}

//Bonus 1
netsAvg = (97 + 112 + 101) / 3;
knicksAvg = (109 + 95 + 123) / 3;

if ((netsAvg > knicksAvg) && (netsAvg >= 100)) {
    console.log("Nets win");
}
else if ((netsAvg < knicksAvg) && (knicksAvg >= 100)) {
    console.log("Knicks win");
}
else {
    console.log("Draw");
}

//Bonus 2
netsAvg = (97 + 112 + 101) / 3;
knicksAvg = (109 + 95 + 106) / 3;

if ((netsAvg > knicksAvg) && (netsAvg >= 100)) {
    console.log("Nets win");
}
else if ((netsAvg < knicksAvg) && (knicksAvg >= 100)) {
    console.log("Knicks win");
}
else if ((netsAvg === knicksAvg) && (netsAvg >= 100)) {
    console.log("Draw");
}


//B
let bill = 0;
let tip = 0;
let amount = ((bill >= 30) && (bill <= 300));
switch(amount) {
    case true:
        tip = (0.15 * bill);
        break;
    case false:
        tip = (0.20 * bill);
        break;
    default:
        console.log("Invalid");
    }
    
    let total = bill + tip;

    bill = 275;
    console.log("The bill was " + bill + " the tip was " + tip + " and the total value " + total + ".");

    bill = 28;
    console.log("The bill was " + bill + " the tip was " + tip + " and the total value " + total + ".");

    bill = 430;
    console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + total + ".");


//C
function celsiusToFahrenheit(C) {
    let F = ((9 / 5) * C + 32);
    console.log(C + "\u00B0C is " + F + "\u00B0F.");
}
let C = 22;
celsiusToFahrenheit(C);

function fahrenheitToCelsius(F) {
    let C = ((F - 32) * (5 / 9));
    console.log(F + "\u00B0F is " + C + "\u00B0C.");
}
let F = 65;
fahrenheitToCelsius(F);
