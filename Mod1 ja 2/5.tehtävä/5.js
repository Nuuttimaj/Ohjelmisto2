// Kirjoita ohjelma, joka pyytää käyttäjää syöttämään vuosiluvun ja ilmoittaa, onko vuosi karkausvuosi. 
// Vuosi on karkausvuosi, jos se on jaollinen neljällä. 
// Sadalla jaolliset vuodet ovat kuitenkin karkausvuosia vain, jos ne ovat jaollisia myös neljälläsadalla. 
// Tulosta tulos HTML-dokumenttiin. (3p)

"use strict";

const vuosi = prompt("Anna vuosi");

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    target.innerHTML = "Vuosi on karkausvuosi";
} else {
    target.innerHTML = "Vuosi ei ole karkausvuosi";
}


