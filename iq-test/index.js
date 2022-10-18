/*
  Opis:
     Pero se sprema proći test inteligencije. Najčešći zadatak u ovom testu je
     kako saznati koji se od zadanih brojeva razlikuje od ostalih.
     Pero je primijetio da se jedan broj obično razlikuje od ostalih po parnosti.
     Pomozite Peri — da provjeri svoje odgovore, potreban mu je program koji među
     zadanim brojevima pronalazi onaj koji se razlikuje po parnosti, i vrati poziciju tog broja.
   
   Primjeri:
     iqTest("2 4 7 8 10") => 3 // Treći broj je neparan, dok su ostali brojevi parni
     iqTest("1 2 1 1") => 2 // Drugi broj je paran, dok su ostali brojevi neparni
   
   Bilješke:
     Imajte na umu da je vaš zadatak pomoći Peri riješiti pravi IQ test,
     što znači da indeksi elemenata počinju od 1 (ne od 0)
  */

//----------------RJEŠENJE ZADATAKA ------------


function iqTest(brojevi) {
  const nizbrojeva = brojevi.split(" ");
  var parni = 0;
  var neparni = 0;

  for (let i = 0; i < nizbrojeva.length; i++) {
    paranNiz = nizbrojeva.filter(broj => broj % 2 === 0);
    neparanNiz = nizbrojeva.filter(broj => broj % 2 !== 0);

    var stringParanNiz = paranNiz.toString();
    var stringNeParanNiz = neparanNiz.toString();

    if (nizbrojeva[i] % 2 === 0) {
      parni++;
    }
    if (nizbrojeva[i] % 2 !== 0) {
      neparni++;
    }
  }

  if (parni > neparni) {
    return nizbrojeva.indexOf(stringNeParanNiz) + 1;
  }
  if (neparni > parni) {
    return nizbrojeva.indexOf(stringParanNiz) + 1;
  }
}


//---------------------------------------------------

// Function Export
module.exports = iqTest;
