/*
   Opis:
     Za zadani skup brojeva, vratite inverz svakom od njih. Svaki pozitivan broj postaje negativan, a negativan postaje pozitivan.
   Primjeri:
     invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
     invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
     invert([]) == []
   Bilješke:
     Možete pretpostaviti da su sve vrijednosti u nizu cijeli brojevi.
*/

//----------------RJEŠENJE ZADATAKA ------------


function invert(brojevi) {
  let invert = [];
  for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > 0) {
      invert.push(-Math.abs(brojevi[i]));
    }
    if (brojevi[i] < 0) {
      invert.push(Math.abs(brojevi[i]));
    }
    if (brojevi[i] == 0) {
      invert.push(0);
    }
  }
  return invert;
}


//---------------------------------------------------

// Function Export
module.exports = invert