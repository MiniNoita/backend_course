// Yhteydenotto MySQL-kantaan mysql2-kirjastolla

const mysql = require('mysql2');

function mysqlconnect() {
  const conn = mysql.createConnection({
    user: 'root',
    password: 'password',
    database: 'koetietokanta',
  });

  conn.connect((err) => {
    if (err) {
      return console.error('MySQL yhteysvirhe: ' + err.message);
    }
    console.log('Yhteys MySQL-kantaan toimii!');
  });
}

mysqlconnect();
