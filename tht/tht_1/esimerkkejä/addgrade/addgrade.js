// TRANSAKTION toteutus callbackeillä

// Voit täydentää tähän runkoon tehtävän ratkaisun

/*
Tässä voidaan havaita callbackien avulla tehdyn koodin epäselvyys
silloin, kun täytyy käyttää useita sisäkkäisiä callbackeja. Tämän vuoksi 
monimutkaisissa peräkkäisrakenteissa käytetään yleensä mieluummin promiseja,
joiden ansiosta koodi on selkeämpää.
*/

// jos opiskelija saa arvosanaksi 0, niin transaktiota ei tehdä, koska
// opintopisteitä ei lisätä.

if (newgrade > 0) {
  // kaikki koodi on beginTransaction-metodin callbackin sisällä
  conn.beginTransaction((err) => {
    //1. cb
    if (err) {
      throw err;
    }
    // Transaktion ensimmäinen vaihe, kutsutaan addGrade-metodia

    // Transaktion toinen vaihe, eli addPoints-metodin kutsu, tulee ensimmäisen
    // vaiheen callbackin sisään. Jos toinen vaihe tuottaa virheen, tehdään rollback.

    // commit suorittaa toimenpidesarjan jos molemmat vaiheet ovat onnistuneet
    conn.commit((err) => {
      if (err) {
        // jos tulee virhe, tehdään rollback.
        return conn.rollback(() => {
          throw err;
        });
      }
      console.log(
        'Molemmat toimenpiteet onnistuivat, eli Transaktio onnistui!',
      );
    });
    //  }); // 3. cb päättyy
    // }); // 2. cb päättyy
  }); // 1. cb päättyy
} else {
  // arvosana on 0
  // kutsutaan vain addGrade-metodia
}

// Sama koodi totetettuna promiseilla ja async-await -rakenteella on selvästi helppolukuisempi:
// Huom. kantayhteys tulee palauttaa promisena ja Dbmethods-metodien tulee palauttaa promiseja.
/*

if (newgrade > 0) {
try {
    // Aloitetaan transaktio
    await conn.beginTransaction();

    // Transaktion ensimmäinen vaihe: arvosanan lisääminen
    
       await Dbmethods.addGrade(studentcode, coursecode, newgrade);

    // Transaktion toinen vaihe: opintopisteiden lisääminen
    
       await Dbmethods.addPoints(studentcode, points);

    // Jos päästään tänne asti ilman virheitä, vahvistetaan muutokset
    
    await conn.commit();
    console.log('Molemmat toimenpiteet onnistuivat, eli Transaktio onnistui!');

} catch (err) {
    // Jos jokin vaihe epäonnistuu, perutaan kaikki muutokset
    await conn.rollback();
    console.error('Transaktio epäonnistui, muutokset peruttiin.', err);
    throw err; 
}
 
} else { // arvosana on 0
	// kutsutaan vain addGrade-metodia
}*/
