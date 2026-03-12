const Dbmethods = require('./dbmethods');
const conn = require('./dbconnection');

//arvosana
const newGrade = 5;

//studentid
const studentcode = 'a1234';

if (newGrade > 0) {
  conn.beginTransaction((err) => {
    //1. callback
    if (err) throw err;

    //Transaktion ensimmäinen vaihe
    Dbmethods.addGrade(studentcode, '3002', newGrade, (err) => {
      if (err) {
        return conn.rollback(() => {
          throw err;
        });
      }

      const points = 5;

      //transaktion toinen vaihe
      Dbmethods.addPoints(points, studentcode, (err) => {
        if (err) {
          return conn.rollback(() => {
            throw err;
          });
        }

        //we try to commit
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
      });
    });
  });
} else {
  Dbmethods.addGrade(studentcode, '3002', newGrade, (err, result) => {
    if (err) throw err;

    console.log(result.affectedRows + ' records inserted');
  });
}
