const mysql = require('mysql2');

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'nodemysql',
});

conn.connect((err) => {
  if (err) {
    return console.error('MySQL yhteysvirhe: ' + err.message);
  }
  console.log('Yhteys MySQL-kantaan toimii!');
});

module.exports = conn;
