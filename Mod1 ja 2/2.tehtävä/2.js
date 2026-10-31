// Kirjoita ohjelma, joka kysyy käyttäjän nimeä ja tervehtii sitten käyttäjää. 
// Tulosta tervehdys HTML-dokumenttiin: Hei, Nimi! (2p)

"use strict";
const name = prompt("Anna nimesi");
document.querySelector("#target").innerHTML =
"Hyvää huomenta, " + name + "!";