// Harry Potter -lastenkirjoissa lajitteluhattu sijoittaa Tylypahkan noitien ja velhojen koulun uuden oppilaan yhteen neljästä tuvasta, jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi. 
// Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimeä ja arpoo oppilaalle tuvan. 
// Jos annat nimeksi esimerkiksi Anna, ohjelma tulostaa HTML-dokumenttiin ”Anna, sinä olet Korpinkynsi.” (3p)
// Käytä metodia Math.random() arvon (1, 2, 3 tai 4) arpomiseen.
// Kun luku on arvottu, tarvitset valintarakenteen, jossa on useita vaihtoehtoja (if, else if, …, else tai switch).

"use strict";


const nimi = prompt("Anna nimesi")

const numero = Math.floor(Math.random() * 4) + 1;

let tupa = "";
switch (numero) {
  case 1:
    tupa = "Rohkelikko";
    break;
  case 2:
    tupa = "Luihuinen";
    break;
  case 3:
    tupa = "Puuskupuh";
    break;
  case 4:
    tupa = "Korpinkynsi";
    break;
}

target.innerHTML = nimi + ", sinä olet " + tupa;

    