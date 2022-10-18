/*
Opis:
 Svima je poznat sustav "lajkanja" s Facebooka, Instagrama i drugih društvenih stranica. Ljudi mogu "lajkati" postove na blogu, slike ili druge stavke. 
 Potrebno je stvoriti tekst koji bi trebao biti prikazan pored takve stavke. 
 Implementirajte funkciju koja uzima niz koji sadrži imena ljudi kojima se neka stavka sviđa. 
 Funkcija mora vratiti tekst za prikaz kao što je prikazano u primjerima:

  Primjeri:

    likes [] //mora biti "no one likes this"
    likes ["Petar"] //mora biti "Petar likes this"
    likes ["Pero", "Ivan"] //mora biti "Pero and Ivan like this"
    likes ["Robert", "Marija", "Marko"] //mora biti "Robert, Marija and Marko like this"
    likes ["Ivan", "Pero", "Marko", "Robert"] //mora biti "Ivan, Pero and 2 others like this"

  Bilješke:
    Za više od 4 imena, broj unutar teksta "and 2 others" jednostavno se povećava.
*/

//----------------RJEŠENJE ZADATAKA ------------


function likes(imena) {
  if (imena.length == 0) {
    return "no one likes this";
  }
  for (let i = 0; i < imena.length; i++) {
    let ostali = imena.length - 2;
    if (imena.length == 1) {
      return imena[0] + " likes this";
    }
    if (imena.length == 2) {
      return imena[0] + " and " + imena[1] + " like this";
    }
    if (imena.length == 3) {
      return imena[0] + ", " + imena[1] + " and " + imena[2] + " like this";
    }
    else {
      return imena[0] + ", " + imena[1] + " and " + ostali + " others like this";
    }
  }
}


//---------------------------------------------------


// Function Export
module.exports = likes