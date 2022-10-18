/*
  Opis:
     Napišite funkciju pod nazivom sumDigits koja prima jedan parametar koji je broj 
     i koja kao rezultat vraća zbroj apsolutne vrijednosti svake decimalne znamenke broja.
     Pretpostavimo da će svi brojevi na ulazu biti cjelobrojne vrijednosti.
   
     Primjeri:
     sumDigits(10);    // Vraća 1
     sumDigits(99);    // Vraća 18
     sumDigits(-32);   // Vraća 5
*/

//----------------RJEŠENJE ZADATAKA ------------


function sumDigits(broj) {
  suma = 0
  while (broj !== 0) {
    suma += Math.abs(broj % 10);
    broj = parseInt(broj / 10);
  }
  return suma
}


//---------------------------------------------------


// Function Export
module.exports = sumDigits