/*
  Opis:
     Napišite funkciju pod nazivom repeater() koja uzima dva argumenta (string i broj) i vraća novi string gdje se ulazni string ponavlja toliko puta.
   primjeri:
     repeater("a", 5) bi trebao vratiti "aaaaa"
     repeater("xyz", 3) bi trebao vratiti "xyzxyzxyz"

*/

//----------------RJEŠENJE ZADATAKA ------------


function repeater(string, broj) {
  return string.repeat(broj);
}


//---------------------------------------------------

// Function Export
module.exports = repeater