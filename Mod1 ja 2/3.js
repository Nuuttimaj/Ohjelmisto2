//Kirjoita ohjelma, joka kysyy kolme kokonaislukua. 
//Ohjelma tulostaa lukujen summan, tulon ja keskiarvon HTML-dokumenttiin. (3p)
//Muista muuntaa merkkijonot luvuiksi ennen kuin lasket ne yhteen.

"use strict";

const luku_1Str = prompt("Anna luku 1")
const luku_2Str = prompt("Anna luku 2")
const luku_3Str = prompt("Anna luku 3")

const luku_1 = parseInt(luku_1Str);
const luku_2 = parseInt(luku_2Str);
const luku_3 = parseInt(luku_3Str);

const summa = (luku_1 + luku_2 + luku_3)
const tulo = (luku_1 * luku_2 * luku_3)
const keskiarvo = ((luku_1 + luku_2 + luku_3) / 3)


document.querySelector("#target").innerHTML =
"Summa: " + summa + " Tulo: " + tulo + " Keskiarvo: " + keskiarvo;

